# AI Assistant Training Guide

This guide explains how to ensure the AI assistant is well-trained on your context and provides accurate, helpful responses.

## Current Training Implementation

### 1. **Comprehensive Context Structure**
The assistant context (`assistantContext` in `/app/api/voice-ai/route.ts`) includes:
- **About**: Your title, tagline, description, location, expertise
- **Projects**: Detailed information about each project (name, description, status, tech stack, highlights, links)
- **Services**: Complete service details (name, price, period, description, timeline, includes, payment terms)
- **How We Work**: Process steps and approach
- **Trust & Reliability**: Key trust indicators
- **Contact**: All contact methods
- **FAQs**: Common questions and answers
- **Common Questions**: Pre-formatted answers for frequent queries

### 2. **Enhanced System Prompt**
The system prompt includes:
- Clear rules about answering directly (no introductions)
- Example responses showing the expected format
- Specific instructions for different question types
- Emphasis on using context data

### 3. **Fallback Keyword Matching**
When API keys aren't configured, the system uses intelligent keyword matching that:
- Detects pricing, process, project, service, warranty, and contact questions
- Provides accurate responses based on the context
- Handles multiple question variations

## How to Improve Training

### 1. **Keep Context Up-to-Date**
When you update your website:
- Update the `assistantContext` object in `/app/api/voice-ai/route.ts`
- Sync service names, prices, and descriptions
- Add new projects as they're completed
- Update FAQs based on common customer questions

### 2. **Add More Examples**
In the system prompt, add more example Q&A pairs:
```javascript
EXAMPLE RESPONSES:
User: "What are the prices?"
You: "Andrew offers three main services: Blueprint Sprint is €500..."

User: "How long does implementation take?"
You: "Implementation typically takes 2-4 weeks..."
```

### 3. **Expand Keyword Matching**
In the fallback section, add more keyword variations:
```javascript
else if (
  lowerMessage.includes("price") ||
  lowerMessage.includes("cost") ||
  lowerMessage.includes("pricing") ||
  // Add more variations here
  lowerMessage.includes("what's the cost")
) {
```

### 4. **Add Conversation History (Advanced)**
For better context awareness, you could:
- Store recent conversation history
- Include previous questions in the API call
- Help the assistant understand follow-up questions

### 5. **Test Common Questions**
Regularly test the assistant with:
- Pricing questions
- Service questions
- Project questions
- Process questions
- Contact questions

## Best Practices

### ✅ DO:
- Keep all information in the context object synchronized with your website
- Use specific, concrete details (exact prices, timelines, features)
- Include multiple ways to phrase the same information
- Test with real user questions
- Update context when services or pricing change

### ❌ DON'T:
- Use vague descriptions ("affordable pricing" instead of "€500")
- Include outdated information
- Forget to update both the context and fallback keyword matching
- Use generic responses that don't answer the question

## Monitoring & Improvement

### Check These Regularly:
1. **Accuracy**: Are responses factually correct?
2. **Completeness**: Does it answer the full question?
3. **Tone**: Is it professional and helpful?
4. **Directness**: Does it avoid unnecessary introductions?

### When to Update:
- New services added
- Pricing changes
- New projects completed
- Common questions emerge that aren't covered
- Website content updates

## Current Context Coverage

✅ **Well Covered:**
- Pricing (all services with exact amounts)
- Services (descriptions, timelines, includes)
- Projects (detailed information)
- Process (5-step workflow)
- Contact (multiple methods)

⚠️ **Could Be Enhanced:**
- Add more project-specific details
- Include more FAQ variations
- Add industry-specific examples
- Include case study results/metrics

## Quick Update Checklist

When updating the assistant context:
- [ ] Update `assistantContext` object
- [ ] Update system prompt examples if needed
- [ ] Update fallback keyword matching
- [ ] Test with common questions
- [ ] Verify API responses are correct
- [ ] Check fallback responses work

## Testing the Assistant

Test with these questions:
1. "What are the prices?"
2. "How does the process work?"
3. "What projects has Andrew built?"
4. "What's included in implementation?"
5. "How do I contact Andrew?"
6. "What's the warranty?"
7. "How long does a project take?"

The assistant should answer directly with specific information from the context.

