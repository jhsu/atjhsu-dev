# Writing Guide

This guide is based on the current posts in `./src/data/blog-posts/`:

- `src/data/blog-posts/ai-tinkerers-hackathon-nyc.md`
- `src/data/blog-posts/clawcon-nyc-recap.md`
- `src/data/blog-posts/dodaily-ai-personal-knowledge-base.md`
- `src/data/blog-posts/recursive-language-models-ai-rlm.md`

It describes the writing voice and habits that already show up in the work, so it should be treated as a living document rather than a rigid rulebook.

## 1. Voice and tone

At its best, the writing is:

- direct
- grounded
- curious
- practical
- observant
- lightly enthusiastic without becoming hypey

The voice usually sounds like a builder explaining what they saw, made, or learned to another smart person on the internet. It is personal, but not confessional. It is technical, but not showy. It is excited by tools, communities, and systems, but it usually stays tethered to real use cases.

### Tone rules

- Write like a person who was actually there or actually built the thing.
- Prefer concrete enthusiasm over broad excitement.
- Keep the emotional temperature moderate: interested, energized, reflective.
- Sound informed, but not authoritative for the sake of sounding authoritative.
- It is okay to sound casual and first-person.
- It is okay to sound impressed, as long as the reason for the impression is specific.
- Avoid sounding like a marketer, futurist, or detached explainer.

### Tone to avoid

- generic AI hype
- polished founder-speak
- forced profundity
- corporate optimism
- dramatic claims that outrun the evidence
- fake neutrality when a simple opinion would be clearer

## 2. Structure

There are currently two dominant post shapes in the blog.

### Shape A: recap / field note

Used in posts like the hackathon and ClawCon recaps.

Typical flow:

1. Open with a simple first-person statement about where you went or what happened.
2. Establish the vibe quickly with one or two concrete details.
3. Pull out one central theme or takeaway.
4. Walk through a few memorable moments, demos, or observations.
5. End with a compact personal reflection or broader read on what it meant.

This shape works best when the post feels like notes from the ground, not a formal event report.

### Shape B: product / technical explainer

Used in posts like DoDaily and ai-rlm.

Typical flow:

1. Start with the problem or the core idea in plain language.
2. Explain why it matters.
3. Break the system into a few understandable parts.
4. Use headings, lists, or examples to make the explanation scannable.
5. End with what you are aiming for, what comes next, or why it is useful in practice.

### Structural preferences across both shapes

- Get to the point early.
- One post should have one central idea.
- Use sections when the topic is product or technical.
- Stay mostly chronological for recaps.
- Move from concrete detail to general point, not the other way around.
- End before the energy drops.

## 3. Sentence-level preferences

### Default sentence style

- clear and medium-short
- plainspoken
- low-jargon unless the topic requires it
- concrete before abstract
- varied enough to avoid monotony, but never ornate

### What the writing tends to do well

- Uses short setup sentences to create momentum.
- Follows abstract claims with concrete examples.
- Uses punchy emphasis sentences sparingly, for example: `The demos were the best part.`
- Explains technical ideas in everyday language before adding implementation detail.

### Preferred sentence moves

- Start simple, then expand.
- Use lists when explaining systems, flows, or features.
- Use a short paragraph after a dense one to reset the rhythm.
- Use first-person framing when it makes the point more credible.
- Let a sentence be plain if plain is enough.

### Syntax and diction preferences

- Prefer `I built`, `I went`, `I wanted`, `What stood out`, `The idea is simple` over more inflated alternatives.
- Prefer active voice.
- Prefer familiar words over impressive ones.
- Use technical terms, but explain them in context.
- Use emphasis with restraint.

## 4. Signature moves

These moves show up repeatedly and make the writing feel like yours.

### 1. Open from lived experience

Posts often begin with a simple statement of personal involvement:

- `I spent this weekend at the AI Tinkerers NYC Hackathon.`
- `I went to ClawCon NYC recently...`
- `I’ve tried a lot of note-taking apps over the years.`
- `I built ai-rlm to explore this pattern in a concrete, programmable way.`

This works because it is immediate, credible, and unforced.

### 2. Move from observation to interpretation

You often start with what happened, then pull out the pattern:

- a packed room becomes a sign of real momentum
- a journaling app becomes a way to reduce friction between thought and reuse
- recursion becomes a practical pattern for decomposition and verification

### 3. Prefer concrete use cases over abstract claims

You tend to trust examples more than slogans. When something is interesting, you usually explain why through a concrete workflow, feature, or scenario.

### 4. Use compact framing lines

You often write a short line that frames the section cleanly:

- `The word of the night was movement.`
- `The demos were the best part.`
- `The idea is simple: write freely now, make sense of it later.`

These lines help give the post rhythm.

### 5. Make technical writing scannable

When explaining systems, you naturally shift into headings, lists, numbered flows, and code blocks. This should remain a default move for technical pieces.

### 6. End with a grounded takeaway

Your endings usually do not try to deliver a grand thesis. They land on a realistic takeaway, next step, or personal reflection.

## 5. Anti-patterns / blacklist

Avoid these because they would pull the writing away from the existing voice.

### Tone anti-patterns

- `AI is revolutionizing everything`
- `This space is changing faster than ever`
- generic future-of-work proclamations
- sounding like a launch announcement unless the post is actually a launch
- overstating importance without examples

### Sentence anti-patterns

- filler transitions like `Moreover`, `Furthermore`, `In conclusion`
- padded claims like `It is important to note that`
- symmetrical AI phrasing used too often, especially `not X, but Y`
- vague praise words like `incredible`, `powerful`, `amazing`, `transformative` unless backed by specifics
- long thesis-like sentences when two shorter ones would be clearer

### Structural anti-patterns

- slow intros that delay the main point
- too many ideas in one post
- abstract framing before the reader knows the context
- concluding by repeating the intro with slightly different wording
- overexplaining features that are already clear from the example

### Technical-writing anti-patterns

- unexplained jargon
- dumping implementation details before explaining the user problem
- code without context
- pretending certainty about results that are still exploratory

## 6. Positive examples

### Example 1: clear problem framing

> I’ve tried a lot of note-taking apps over the years. Most of them are great at helping you capture information. Very few are good at helping you actually use it later.

Why it works:

- starts from personal experience
- states the problem quickly
- uses short sentences with strong contrast
- sounds human and confident without sounding dramatic

### Example 2: concise thematic framing

> The word of the night was movement.

Why it works:

- compresses a broad impression into one memorable line
- gives the post a center of gravity
- creates a clean pivot into interpretation

### Example 3: plain-language explanation

> Recursive language models (RLMs) are a simple idea: let a model call itself (or another model step) to break harder tasks into smaller tasks, then combine the results.

Why it works:

- defines the concept in one sentence
- stays readable despite being technical
- uses a concrete verb phrase: `break harder tasks into smaller tasks`

### Example 4: product north star

> Reduce the friction between having a thought and being able to use it later.

Why it works:

- clear design goal
- simple wording
- memorable without trying too hard

## 7. Negative examples

These are not quotes from the blog. They are examples of what to avoid because they do not sound like the current writing voice.

### Example 1

> In today’s rapidly evolving AI landscape, innovative solutions like this one are transforming the way individuals and organizations think about productivity.

What is wrong with it:

- generic
- buzzword-heavy
- detached from lived experience
- could describe almost anything

### Example 2

> This groundbreaking app doesn’t just store notes, it revolutionizes the relationship between human cognition and digital memory in a profoundly impactful way.

What is wrong with it:

- oversold
- inflated diction
- abstract where the real writing prefers concrete utility
- sounds promotional rather than observational

### Example 3

> Furthermore, it is important to note that recursive architectures can, in many scenarios, provide meaningful improvements across a wide variety of multidimensional tasks.

What is wrong with it:

- padded and impersonal
- vague about what improves and for whom
- lacks the grounded, practical examples the blog prefers

## 8. Revision checklist

Before publishing, check:

- Does the post get to the point fast enough?
- Is the central idea obvious by the first few paragraphs?
- Did I include at least one concrete example, image, workflow, or scene?
- Does this sound like a person who actually used, built, or attended the thing?
- Are any sentences trying to sound smarter than they need to?
- Is there unnecessary hype?
- Did I explain the problem before the implementation details?
- If the topic is technical, is it still legible to an interested non-specialist?
- Are the headings and lists doing useful work, or just adding structure for its own sake?
- Did I end on a grounded takeaway instead of a generic conclusion?

## 9. Operating instructions for AI

When helping write in this voice:

- prioritize clarity over flourish
- stay close to concrete experience
- keep the voice first-person when appropriate
- explain technical ideas in plain language first
- use examples, lists, and section breaks to make ideas easy to scan
- preserve mild enthusiasm, but avoid hype
- if a sentence sounds like generic AI writing, simplify it
- if a claim is broad, anchor it in a specific observation or use case
- choose grounded and useful over clever and polished

## 10. One-paragraph summary

The writing should sound like a thoughtful builder sharing what they saw, made, or learned in clear, grounded language. It should get to the point quickly, prefer concrete examples over sweeping claims, and use simple structure to make technical or product ideas easy to follow. The voice can be personal, curious, and lightly enthusiastic, but it should avoid hype, corporate polish, and vague abstraction. When in doubt, write like someone explaining something real to another smart person, not like someone trying to win a branding award.
