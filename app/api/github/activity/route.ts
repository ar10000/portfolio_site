import { NextRequest, NextResponse } from "next/server";

interface GitHubCommit {
  commit: {
    author: {
      date: string;
    };
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const repoUrl = searchParams.get("repo");

    if (!repoUrl) {
      return NextResponse.json(
        { error: "Repository URL is required" },
        { status: 400 }
      );
    }

    // Extract owner and repo from GitHub URL
    // Format: https://github.com/owner/repo
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) {
      return NextResponse.json(
        { error: "Invalid GitHub URL format" },
        { status: 400 }
      );
    }

    const [, owner, repo] = match;
    const repoName = repo.replace(/\.git$/, ""); // Remove .git if present

    // Fetch commits from GitHub API
    // Using public API (no auth required for public repos)
    const commitsUrl = `https://api.github.com/repos/${owner}/${repoName}/commits?per_page=100&page=1`;
    
    const response = await fetch(commitsUrl, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Add User-Agent header as GitHub API requires it
        "User-Agent": "Portfolio-Website",
      },
    });

    if (!response.ok) {
      // If repo is private or doesn't exist, return null
      if (response.status === 404 || response.status === 403) {
        return NextResponse.json({
          duration: null,
          firstCommit: null,
          lastCommit: null,
          totalCommits: 0,
        });
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const commits: GitHubCommit[] = await response.json();

    if (!commits || commits.length === 0) {
      return NextResponse.json({
        duration: null,
        firstCommit: null,
        lastCommit: null,
        totalCommits: 0,
      });
    }

    // Get first and last commit dates
    const commitDates = commits.map((commit) => new Date(commit.commit.author.date));
    const firstCommit = new Date(Math.min(...commitDates.map((d) => d.getTime())));
    const lastCommit = new Date(Math.max(...commitDates.map((d) => d.getTime())));

    // Calculate duration in weeks
    const diffTime = Math.abs(lastCommit.getTime() - firstCommit.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.ceil(diffDays / 7);

    // Format duration string
    let durationString = "";
    if (diffWeeks < 1) {
      durationString = "Less than 1 week";
    } else if (diffWeeks === 1) {
      durationString = "1 week";
    } else if (diffWeeks < 4) {
      durationString = `${diffWeeks} weeks`;
    } else {
      const months = Math.floor(diffWeeks / 4);
      const remainingWeeks = diffWeeks % 4;
      if (remainingWeeks === 0) {
        durationString = months === 1 ? "1 month" : `${months} months`;
      } else {
        durationString = `${months} month${months > 1 ? "s" : ""} ${remainingWeeks} week${remainingWeeks > 1 ? "s" : ""}`;
      }
    }

    return NextResponse.json({
      duration: durationString,
      durationWeeks: diffWeeks,
      firstCommit: firstCommit.toISOString(),
      lastCommit: lastCommit.toISOString(),
      totalCommits: commits.length,
    });
  } catch (error) {
    console.error("GitHub activity error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub activity" },
      { status: 500 }
    );
  }
}

