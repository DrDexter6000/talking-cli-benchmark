# Talking CLI Benchmark Repository

This repository contains real-world experiments comparing **bloated SKILL.md** patterns vs **Talking CLI** (distributed prompting) patterns.

## Purpose

Demonstrate the practical differences between:
- **Bloated approach**: All guidance centralized in SKILL.md (800+ lines)
- **Talking CLI approach**: Guidance distributed to tool responses via hints

## Structure

```
experiments/
  bloated-version/     # Original OpenClaw gh-issues skill (887 lines)
  talking-version/     # Refactored version with tool hints (170 lines)
results/
  benchmark-report.md  # Detailed comparison results
```

## Key Metrics

| Metric | Bloated | Talking | Improvement |
|--------|---------|---------|-------------|
| SKILL.md Lines | 887 | 170 | **-84.3%** |
| Initial Prompt Tokens | 8,716 | 1,370 | **-84.3%** |
| Runtime Input Tokens | 13,024 | 2,166 | **-83.4%** |
| Total Tokens | 16,228 | 6,137 | **-62.2%** |
| Pass Rate | 80% | **90%** | **+10pp** |

## Real-World Impact

### Cost Savings (per 1,000 tasks)

| Model | Bloated Cost | Talking Cost | Savings |
|-------|-------------|--------------|---------|
| MiniMax M2.7 Highspeed | $15.50 | $10.80 | **$4.70 (30%)** |
| Claude 3.5 Sonnet (est.) | $78.00 | $54.00 | **$24.00 (30%)** |
| GPT-4o (est.) | $52.00 | $36.00 | **$16.00 (30%)** |
| Gemini 1.5 Pro (est.) | $26.00 | $18.00 | **$8.00 (30%)** |

## Experiments

### Experiment 1: OpenClaw gh-issues Skill

**Scenario**: Auto-fix GitHub issues with parallel sub-agents

**Bloated Version**: 
- 887 lines of SKILL.md
- All error handling inline
- Sub-agent prompts embedded
- Watch mode logic included

**Talking Version**:
- 170 lines of SKILL.md
- Error handling in tool hints
- External references for sub-agent prompts
- Simplified watch mode

**Results**: See `results/experiment-1-gh-issues.md`

### Experiment 2: Filesystem Operations

**Scenario**: Complex filesystem tasks with error recovery

**Tasks**:
- Batch JSON transformation
- Monorepo dependency analysis
- Security codebase scanning
- Performance profiling
- Database migration generation

**Results**: See `results/experiment-2-filesystem.md`

## Methodology

1. **Task Selection**: 25 real-world tasks covering common agent scenarios
2. **Execution**: MiniMax M2.7 Highspeed with controlled environment
3. **Measurement**: Token consumption, pass rates, turn counts
4. **Validation**: Deterministic checkers verify task completion

## Conclusion

Talking CLI's distributed prompting approach:
- ✅ Reduces token consumption by 60-80%
- ✅ Improves task success rates
- ✅ Makes skills more maintainable
- ✅ Provides better error recovery

## References

- [Talking CLI Repository](https://github.com/DrDexter6000/talking-cli)
- [PHILOSOPHY.md](https://github.com/DrDexter6000/talking-cli/blob/master/PHILOSOPHY.md)
- [CN-001: Tool-Scoped Progressive Disclosure](https://github.com/DrDexter6000/talking-cli/blob/master/docs/CN-001-tool-scoped-progressive-disclosure.md)

---

*This is a living document. Experiments are continuously updated as new data becomes available.*
