# KYNE PRICING AUDIT - All Inconsistencies Found

**Date:** October 5, 2026  
**Status:** ⚠️ INCONSISTENT - Multiple pricing systems conflict

---

## 🔴 PROBLEM: THREE DIFFERENT PRICING SYSTEMS

### System 1: Tier Packages (Pricing.tsx) ✅ UPDATED
- **Starter:** $49/month (1 strip type - morning OR day OR night)
- **Core:** $99/month (all 3 core strips - morning + day + night)
- **Elite:** $149/month (all 3 core strips + monthly coaching)

### System 2: Hero Cards (Hero.tsx) ✅ UPDATED
- **Morning strip:** $49/month
- **Day strip:** $49/month
- **Night strip:** $49/month

### System 3: Individual Product Lines (products.ts) ❌ NOT UPDATED
**8 specialty product lines with DIFFERENT prices:**

| Product Line      | Slug       | Current Price | What It Is                    |
|-------------------|------------|---------------|-------------------------------|
| kyne core         | signal     | $54/month     | Core circadian (morning/day/night) |
| kyne d3+k         | d3k        | $39/month     | Vitamin D3 + K2               |
| kyne gut          | gut        | $54/month     | Gut health formula            |
| kyne mind         | mind       | $59/month     | Cognitive performance         |
| kyne mito         | mito       | $64/month     | Mitochondrial support         |
| kyne nerve        | nerve      | $54/month     | Nerve health                  |
| kyne age          | longevity  | $64/month     | Longevity/anti-aging          |
| kyne peptide      | peptide    | $79/month     | Peptide formulations          |

**These pages exist at:**
- /signal (core) - shows $54
- /d3k - shows $39
- /gut - shows $54
- /mind - shows $59
- /mito - shows $64
- /nerve - shows $54
- /longevity - shows $64
- /peptide - shows $79

---

## 🤔 THE CONFUSION

**On the homepage:**
- Hero shows: "kyne morning $49"
- Pricing tier shows: "Starter $49" (1 strip)

**But if you click through to /signal (core product page):**
- Shows: "kyne core $54/month"

**Which is correct??**

---

## 💡 DECISION NEEDED

You need to decide ONE of these strategies:

### Option A: Single Product Model (Simplest)
**Only sell the core circadian protocol in 3 tiers:**
- $49/month = 1 strip type (morning OR day OR night)
- $99/month = all 3 strips (morning + day + night)
- $149/month = all 3 strips + coaching

**Result:** Delete all 8 specialty product lines, remove those pages, focus ONLY on core

### Option B: Multi-Product Model (Complex)
**Core circadian protocol + 7 specialty add-ons:**
- Core (signal): $49/month per strip OR $99/month for all 3
- Specialty products: $39-$79/month each as add-ons
- Elite: $149/month (core + 1 specialty + coaching)

**Result:** Need to reconcile all pricing across all 8 product lines

### Option C: Launch with Core Only, Add Later
**Phase 1 (Q1 2027):** Launch ONLY core circadian ($49/$99/$149)
**Phase 2 (Q3 2027):** Add specialty lines once core is proven

**Result:** Hide all specialty products for now, simplify to 3 SKUs

---

## ⚠️ CURRENT STATE: BROKEN

Right now the site is confusing because:
1. Homepage says $49 for core strips
2. /signal page says $54 for core strips  
3. Tier pricing says $99 for all 3 core strips
4. But if you calculate 3 × $49 = $147 (doesn't match $99)
5. And if you calculate 3 × $54 = $162 (also doesn't match $99)

**This is a mess. Customers will be confused.**

---

## ✅ MY RECOMMENDATION

**Go with Option C: Core Only for Launch**

**Why:**
1. You don't have CMO manufacturing lined up yet
2. Simpler = faster to market
3. Easier to test pricing with 3 SKUs vs 8+
4. Focus on one product done well vs 8 products done poorly

**What to do:**
1. Keep Pricing.tsx tiers: $49/$99/$149 ✅
2. Keep Hero cards: $49 each ✅
3. **Update products.ts core price: $54 → $49**
4. **Hide/disable all 7 specialty product pages** (d3k, gut, mind, mito, nerve, longevity, peptide)
5. Remove specialty product links from navigation
6. Add "Coming 2027" section for specialty lines

**Pricing math that WORKS:**
- 1 strip = $49/month
- 3 strips = $99/month (33% bundle discount)
- 3 strips + coaching = $149/month

---

## 🚨 WHAT NEEDS TO HAPPEN NOW

**Tell me which option you want:**
- **A:** Delete all specialty products, core only forever
- **B:** Keep all products, fix all 8 prices (requires decisions on each)
- **C:** Launch core only, add specialty later (my recommendation)

Once you decide, I'll update ALL files to match and remove every inconsistency.

---

**Waiting for your decision before making changes.**
