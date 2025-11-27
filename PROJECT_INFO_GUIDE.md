# Project Information Guide

This guide explains what information you should provide for each project to create a compelling project page.

## 📋 Required Information (Minimum)

These are the **essential** fields needed to create a basic project page:

### 1. **Basic Details**
- **Title**: Project name (e.g., "Creative Garden")
- **Description**: One-line summary (e.g., "Production-grade AI-powered business system")
- **Status**: `"Live"`, `"Beta"`, or `"In Development"`
- **Tech Stack**: Array of technologies (e.g., `["Flutter", "Python", "Supabase", "AI"]`)
- **GitHub URL**: Your GitHub repo (e.g., `"https://github.com/ar10000/creative-garden"`)
- **Demo URL**: Live demo or website (e.g., `"https://creativegarden.app"` or `"#"` if not public)

### 2. **Story (Problem/Solution)**
- **Problem**: What problem were you solving? (2-3 sentences)
- **Solution**: How did your project solve it? (2-3 sentences)
- **Overview**: What the project does (1-2 sentences)
- **Why It Matters**: Why this solution is valuable (1-2 sentences)

---

## 🎯 Recommended Information (Highly Recommended)

These make your project page **much more compelling**:

### 3. **Key Features** (Array of 4-6 features)
Each feature should have:
- **Icon**: Choose from Lucide icons (Sparkles, Zap, Database, Bot, etc.)
- **Title**: Feature name (e.g., "AI-Powered Responses")
- **Description**: What it does (1 sentence)
- **Emoji** (optional): For visual appeal (e.g., "🤖")

**Example:**
```javascript
features: [
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI-Powered Responses",
    description: "Claude AI maintains context-aware conversations"
  },
  {
    icon: Database,
    emoji: "📊",
    title: "Smart Analytics",
    description: "Real-time insights and performance tracking"
  }
]
```

### 4. **Tech Stack Details** (Array)
More detailed than the basic tech array:
- **Name**: Technology name
- **Category**: "Framework", "Backend", "Database", "AI", "Language", etc.
- **Icon**: Lucide icon

**Example:**
```javascript
techStack: [
  { name: "Flutter", category: "Framework", icon: Smartphone },
  { name: "Python", category: "Backend", icon: Code2 },
  { name: "Supabase", category: "Database", icon: Database }
]
```

### 5. **Architecture** (1-2 paragraphs)
Explain the technical architecture:
- How components connect
- Key design decisions
- Scalability considerations

**Example:**
```
"Creative Garden uses a microservices architecture with Python-based API services handling business logic. The Flutter frontend communicates with Supabase backend through RESTful APIs. Real-time updates are handled via Supabase subscriptions, ensuring instant synchronization across devices."
```

### 6. **Metrics/Results** (Array, if available)
Quantifiable results make projects more credible:
- **Label**: What you're measuring (e.g., "Active Users")
- **Value**: The number/metric (e.g., "2.5K+")
- **Icon**: Lucide icon

**Example:**
```javascript
metrics: [
  { label: "Active Users", value: "2.5K+", icon: Sparkles },
  { label: "Response Time", value: "< 2s", icon: Zap },
  { label: "Uptime", value: "99.9%", icon: Server }
]
```

---

## ✨ Optional but Powerful Information

These add **extra polish** and make your project stand out:

### 7. **Tagline** (Optional)
A punchy one-liner that appears in the hero:
- **Example**: `"AI Sales Assistant That Qualifies Leads While You Sleep"`

### 8. **Demo Video** (Optional)
YouTube or Loom embed URL:
- **Example**: `"https://www.youtube.com/embed/VIDEO_ID"` or `"https://www.loom.com/embed/VIDEO_ID"`

### 9. **How It Works** (Optional - Array of 5 steps)
Step-by-step flow diagram:
- **Step**: Number (1, 2, 3, etc.)
- **Title**: Step name
- **Description**: What happens
- **Icon**: Lucide icon

**Example:**
```javascript
howItWorks: [
  {
    step: 1,
    title: "User submits request",
    description: "Form data is validated and sent to API",
    icon: Mail
  },
  {
    step: 2,
    title: "AI processes request",
    description: "Claude AI analyzes and generates response",
    icon: Bot
  }
]
```

### 10. **Pricing** (Optional - for commercial projects)
Pricing information:
- **Example**: `"Starting at $299/month for small agencies"`

### 11. **Code Snippet** (Optional)
A representative code example:
- **Code**: The actual code (as a string)
- **Language**: "python", "dart", "typescript", "javascript", etc.

**Example:**
```javascript
codeSnippet: `def process_lead(lead_data):
    # Process lead with AI
    response = ai_client.generate(lead_data)
    return response`,
codeLanguage: "python"
```

### 12. **Screenshots** (Optional - Array of image URLs)
- **Example**: `["/images/project-1.png", "/images/project-2.png"]`
- Currently using placeholders, but you can add real image paths

### 13. **Lessons Learned** (Optional)
A brief reflection (2-3 sentences):
- What you learned building this
- What you'd do differently
- Key insights

---

## 📝 Complete Example Structure

Here's what a complete project entry looks like:

```javascript
"creative-garden": {
  // Required
  title: "Creative Garden",
  description: "Production-grade AI-powered business system",
  status: "Live",
  statusColor: "green",
  tech: ["Flutter", "Python", "Supabase", "AI"],
  github: "https://github.com/ar10000/creative-garden",
  demo: "https://creativegarden.app",
  
  // Story
  problem: "Businesses needed a way to...",
  solution: "I built Creative Garden to...",
  overview: "Creative Garden is a...",
  whyItMatters: "This matters because...",
  
  // Recommended
  features: [
    {
      icon: Bot,
      title: "AI Integration",
      description: "Seamless AI-powered workflows"
    }
  ],
  techStack: [
    { name: "Flutter", category: "Framework", icon: Smartphone }
  ],
  architecture: "The system uses...",
  metrics: [
    { label: "Users", value: "1K+", icon: Sparkles }
  ],
  
  // Optional
  tagline: "Your AI-powered business assistant",
  demoVideo: "https://www.youtube.com/embed/VIDEO_ID",
  pricing: "Starting at $99/month",
  codeSnippet: `// Your code here`,
  codeLanguage: "python",
  screenshots: ["/images/cg-1.png"],
  lessonsLearned: "I learned that..."
}
```

---

## 🎨 Tips for Writing Great Project Descriptions

### Problem Statement
- Start with the pain point
- Be specific (e.g., "Agencies were losing deals because...")
- Include numbers if possible (e.g., "10+ hours per week")

### Solution Statement
- Focus on the outcome, not just features
- Mention speed/time if relevant (e.g., "built in 3 weeks")
- Highlight what makes it unique

### Features
- Focus on **benefits**, not just features
- Use action-oriented language
- Keep descriptions concise (1 sentence)

### Metrics
- Use real numbers when possible
- If no metrics yet, you can omit this section
- Examples: users, response time, uptime, conversion rate

---

## 🚀 Quick Start Template

Copy this template and fill in your project details:

```javascript
"your-project-slug": {
  title: "Your Project Name",
  description: "One-line description",
  status: "Live", // or "Beta" or "In Development"
  statusColor: "green", // or "yellow" or "blue"
  tech: ["Tech1", "Tech2", "Tech3"],
  github: "https://github.com/ar10000/your-repo",
  demo: "https://your-demo-url.com",
  
  problem: "What problem were you solving? (2-3 sentences)",
  solution: "How did you solve it? (2-3 sentences)",
  overview: "What does it do? (1-2 sentences)",
  whyItMatters: "Why is this valuable? (1-2 sentences)",
  
  features: [
    {
      icon: Sparkles, // Choose from Lucide icons
      title: "Feature Name",
      description: "What it does"
    }
    // Add 3-5 more features
  ],
  
  techStack: [
    { name: "Technology", category: "Category", icon: Code2 }
    // Add more technologies
  ],
  
  architecture: "Explain the technical architecture (1-2 paragraphs)",
  
  metrics: [
    { label: "Metric Name", value: "Value", icon: Sparkles }
    // Add 2-4 metrics if available
  ],
  
  // Optional fields:
  tagline: "Punchy one-liner",
  demoVideo: "https://youtube.com/embed/VIDEO_ID",
  pricing: "Starting at $X/month",
  codeSnippet: `// Your code`,
  codeLanguage: "python",
  screenshots: ["/images/screenshot-1.png"],
  lessonsLearned: "What you learned (2-3 sentences)"
}
```

---

## 📌 Next Steps

1. **Gather your information** using this guide
2. **Write it in a text file** or share it with me
3. **I'll add it to the project data** in the correct format
4. **The project page will be automatically generated** with all sections

**Need help?** Just share what you have, and I can help you structure it properly!

