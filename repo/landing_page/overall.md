Pedagogical Philosophy

### 1. Curriculum Structure

The curriculum is organized across 3 levels:

```
Subject → Topic → Concept
```

Each **Concept** includes the following content types: `definition`, `formula`, `method`, `property`, `application`, `common_mistake`, `visualization`.

*Example:* `math → calculus → limits` would cover the definition of a limit, formulas for evaluating limits, real-world applications, and so on.

---

### 2. Learning Model: P-D-E-O

Students progress through a repeating loop:

```
Problem → Done → Execute → Optimize → (new Problem)
```

Core principle: **"Done > Perfect"** — completion matters more than perfection.  
This is reflected at the technical level: incorrect answers still advance the progress bar by a small amount.

---

### 3. Session Structure

Each Concept spans **2 sessions**:

| | Session 1 | Session 2 |
|---|---|---|
| **Goal** | Understand enough to solve basic multiple-choice questions | Master the concept through conversation and practice problems |
| **Format** | Self-study the content | Chat with the AI chatbot, solve 4 problems |
| **Output** | Build a foundation | Progress bar reaches 100% |

---

### 4. The 4-Problem Structure — Session 2

| # | Role | Description |
|---|---|---|
| P1 | REINFORCEMENT | Review knowledge from Session 1 |
| P2 | CHALLENGE | Harder, but same problem type |
| P3 | EXPLORATION | Difficult and non-standard — breaks old patterns |
| P4 | EXTENSION | Same difficulty as P3, builds confidence with the new pattern |

Students work through problems in a fixed order: P1 → P4. This is an intentional design decision: the P3 → P4 sequence only delivers its pedagogical effect when completed consecutively.

---

### 5. Chatbot Behavior — The "Study Buddy" Model

The chatbot does not act as a teacher; it acts as a **fellow student**:

- The chatbot **follows the student's approach**, never leads
- **Correct answer** → confirm → nudge the student to self-identify any weak points (if any)
- **Incorrect answer** → chatbot "shares its own perspective" to ask a question → student recognizes the mistake → repeat (up to 3 times)
- After 3 consecutive errors on the same mistake → switch to `SOFT_INTERVENTION`: the chatbot temporarily steps out of the study-buddy role, directly suggests the next step (without giving the answer), and offers the option to skip with a score penalty

Key technique: the chatbot **"voices doubt, not diagnosis"** — *"Hmm, I tried that approach and got stuck at the point where..."* rather than *"You forgot to handle case X."*

---
 
### 6. Progress Bar Mechanics

- Progress only increases when an answer is **submitted** (the chatbot saying right/wrong does not count)
- Correct answer → larger progress gain; incorrect answer → smaller gain (both are > 0)
- Goal: reach 100% by the end of Session 2
- Anti-farming protection: if random guessing is detected, progress gains are temporarily paused

Requirement: planning for creating landing page of edtech startup, for demo product, focus on B2C. product name D-Friend. opening with some sentences like "everyone want to have the friend that ...". "the" and "D" pronouce look like the same, then zoom in "the friend" and transform "the" to "D". "D" here is core engine: done > perfect. "friend" here is chatbot act like a friend, do not judge when fail,.. also focus on the thinking framework that can refactor user's mind.

note: do not provide much business information 

