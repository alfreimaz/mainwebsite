---
title: "Is the cat dead, dead dead, truly alive or playing jazz?"
description: "Quantum course essay"
publishDate: "27 Mar 2026"
tags: ["english", "linguistics","quantum","essay"]
updatedDate: 20 August 2026
pinned: false
---

or, using the quantum framework to disambiguate language.

## Introduction

The goal of this paper is to present if and how notions and strategies
proper to quantum mechanics can be applied to linguistic analysis, in an
attempt to quantify and model lexical ambiguities. We mainly focus on
the works of Wang, Sadrzadeh, Abramsky and Cervantes [Wang, 2021:3], which
notably revolve around quantum-like entanglement between multiple words
and the contextuality of their meaning.

## Linguistic ambiguities

First of all, let us clarify the matter at hand. There exist two main
types of linguistic ambiguities. Syntactical and lexical. The first
solely relies on unclear arrangement of words, otherwise clear
themselves. A classic example being "I see a man using my telescope\".
Such a sentence can be interpreted in two ways, depending on who the
"using my telescope\" adjoint is attached to. Either the man has it, or
I do and using it allows me to see the man. This type of ambiguity can
be straightforwardly formalised, using general syntactical tree
structure. The difference of meaning can then be seen with ease as both
interpretations result in completely different graphs. This method is
crucially the result of the compositional approach to meaning, which
claims meaning of sentences or words can be derived from the smaller
fragments they are made of (in the case of sentences, those fragments
being words, and in the case of words, those fragments being morphemes).
One key aspect to identify here, is that this framework fundamentally
struggles with giving meaning to those more basic elements. If a
linguistic atom cannot be split further, how can we derive its meaning
without simply imposing it? To avoid this call to fundamentalism,
lexical meaning is, contrary to that of sentences, generally understood
through the distributional framework. Instead of deriving meaning
through composition, the distributional approach stems from the idea
that "words that often occur in the same context have similar meanings
and that one can know a word by the company that it keeps\"[Wang, 2021:7]. As
such, the meaning of a word, although less tangible, turns to a web of
interconnections to other ones that seam to occur simultaneously in
certain contexts. One easy way to visualise this, is to think of meaning
as the ensemble of words you would use to describe something. A tiger is
a "big cat, orange, dangerous, found in jungles\". The distributional
framework, although this is a simplification, would then assign the web
of all words, with stronger links to the aforementioned commonly
occurring words as the meaning of "tiger\". This makes distributional
analysis particularly unfit to understand sentences, as entire sentences
rarely appear multiple times, and even more rarely to a statistical
significant degree. However, there is one crucial thing to notice here.
Neither of these frameworks seem to be able to analyse lexical
ambiguities.\
\
Indeed, lexical ambiguity is more subtle than its syntactical
counterpart, and traditionally harder to explicitate formally[^1].
Furthermore, it is of multiple nature, since "\[at\] the lexical level,
one can distinguish between two broad types of ambiguity: homonymy
refers to cases in which, due to some historical accident, words that
share exactly the same spelling and pronunciation are used to describe
completely distinct concept \[\...\] On the other hand, the senses of a
polysemous word are usually closely related with only small deviations
between them\"[Piedeleu]. For an example of homonymy, look no further than
the title of this essay, as the word "cat\" can both refer to the furry
domestic animal as well as, in jazz slang, to a man. Both meanings, a
term crucially different from "sense\", though we will gladly bundle
both under the umbrella term "interpretation\", followed separate
etymological paths that simply ended up converging in spelling. On the
other hand, both "dead\" and "alive\" are great examples of polysemy.
Both can be used in a literal sense, but find another use in meaning
"tired\" or "thriving\" respectively[^2]. Those alternative senses are
more intertwined with the original one, as they stem from it, the first
from an exaggerated use of "dead\", and the second a more enthusiastic
use of "alive\". Now, notice how neither compositionality, given its
struggles with understanding unsplittable words, nor distributionality,
which doesn't separate occurrences of words by their meaning, as meaning
is precisely what we wish to gather, can be used to explain lexical
ambiguities. This is where quantum theory might help.

## Quantum strategy

What if ambiguous words were akin to superimposed quantum states? This
is the main idea behind Wang et al.[Wang, 2021:3], in continuation to [Piedeleu],
and, indeed, if one could view standard unambiguous words as pure
states, one might be able to create some understanding of lexical
ambiguity from there. Namely, homonyms would be perceived as a
superimposition of said pure states[^3], one that could easily collapse
under measurement. But what measurement? Well, reading, or hearing, or
even more generally: interacting with the word. Engaging with an
ambiguous word causes a collapse of its meaning. Indeed, it does not
seem possible for an agent to hold all the possible meanings of a word
true at once. Instead, we select one, based on the context. If I say I
saw a cat on the street, you would more likely than not imagine the
animal. If I say I saw a cat in a jazz club, that reading might not be
your preferred one[^4]. This apparent "contextuality\" of language the
authors resume in the following way: "given that a certain
interpretation of a word is selected within a certain context, can we
use this information to deduce how the same word may be interpreted in a
different context (e.g. in different phrases) in the corpus? Our
intuition is that this is not the case\"[Wang, 2021:3]. This context dependency
is the reason why one of the goals of the method we are about to present
is to show its quantum contextuality. However, note that both notions
are fundamentally different, proper to two different fields, the later
being in some sense stronger, though we will come back to that.\
\
This method crucially sits at the frontier between compositionality and
distributionality. Indeed, we are still looking for statistical
co-occurences, similarly to the distributional work in [Schütze], but
inside a certain structure, a certain pairing. This allows us to avoid
the previously encountered "\[\...\] issue with this framework \[\...\]
that the grammatical structure of phrases and sentences is ignored and
the focus is mainly on large-scale statistics of data.\"[Wang, 2021:3]. Given
the known tendency in linguistics to relegate issues in one's approach
to a different subfield (think of the numerous debates around focus,
which syntax claims is for semantics to solve and semantics for syntax
to handle), the perspective of constructing a method reliant on two
traditionally divergent approaches is a worthy goal in itself. But, to
see if it actually works, let us first describe the process.

## Possibilistic contextuality

Take the typical quantum experiment where Alice and Bob are each given
entangled particles in superposition. Wang et al.[Wang, 2021:3] propose an
analogous situation in language, where entanglement is a syntactic link,
superposition is homonymy, and particles are words. For a concrete
example, we consider one of their cases, take the words *coach, boxer,
lap* and *file*. Each one of those words is ambiguous. We index their
meanings the way described in Table 1.

| word  | meaning **0**       | meaning **1** |
|-------|------------------|-----------|
| coach | sports trainer   | bus       |
| boxer | athlete          | dog breed |
| lap   | run              | drink     |
| file  | document         | smoothen  |

<p align=center> Table 1 : sample of ambiguities </p>

Now, combine all these words in a subject-verb structure (this is where
compositionality comes into play) and for each of their respective
meanings, ask yourself "does this reading make sense?\". Does it make
sense, for instance, for a dog to drink? does it make sense for a bus to
document something? If yes, we note the combination with a *1*, and if
not with a *0*.[^5]. This, according to the authors[^6], gives us the
results of Table 2. As mentioned previously, one of our goals with this
framework is to achieve contextuality, but that title alone is not
specific enough, as we differentiate between three kinds: probabilistic,
possibilistic and strongly possibilistic. This nomenclature comes from
Abramsky's work, see [Abramsky], who summarised the criteria each type
must obtain[^7].

   noun  |  verb  | (**0**,**0**) |  (**0**,**1**) |  (**1**,**0**) |  (**1**,**1**)
  -------| ------ |-------| -------| -------| -------
   coach |  lap   | *1* |  *1* |  *1* |  *0*
   coach |  file  | *1* |  *1* |  *0* |  *0*
   boxer |  lap   | *1* |  *1* |  *1* |  *1*
   boxer |  file  | *1* |  *1* |  *0* |  *0*

<p align=center> Table 2 : possibilistic combinations </p>

For now, we are only concerned by possibilistic contextuality, which
Table 2 happily satisfies. Results are possibilistically contextual if
"\[there\] exists a local assignment \[\...\] which cannot be extended
to a compatible family of local assignments\"[^8][Abramsky]. A local
assignement is the function determining with which meaning we should
interpret a certain word. In our case, a family of local assignments is
said to be compatible if we assign a set meaning to each word such that
the syntactical combinations of those meanings are meaningful. For
example, $coach\rightarrow 1$ is the assignment setting the meaning of
the word "coach\" to "bus\", and $coach\rightarrow 0$ the one setting it
to "sports trainer\". The set
$\{coach\rightarrow 0, boxer\rightarrow 0, lap\rightarrow 0,file\rightarrow 0\}$
is a compatible family of local assignments. To verify it, we simply
check that the cases corresponding to
$(coach\rightarrow 0,lap\rightarrow 0)$,
$(coach\rightarrow 0,file\rightarrow 0)$,
$(boxer\rightarrow 0,lap\rightarrow 0)$ and
$(boxer\rightarrow 0,file\rightarrow 0)$ all hold a $\textbf{1}$. On the
contrary, what makes this array contextual is the impossibility of
creating such a family containing certain attested combinations. One can
check that the combination $(coach\rightarrow 0, lap\rightarrow1)$,
despite being considered possible, cannot be contained in any family
without said family to be inconsistent. This is precisely possibilistic
contextuality, which in our linguistic case can be reduced to the
impossibility of assuming a certain set meaning for every ambiguous word
without running into any impossible phrasings. Then, should we simply
stop here? We have indeed found a case of contextuality, implying there
is at least one situation where the framework can be applied, right?
Well, to ensure that this system actually acts similarly to quantum
behaviour, we might need to take a small detour to another key concept:
non-signallity. Take the original instance of Alice and Bob's
experiment. We would call the setup non-signalling if one key criterion
obtains: no matter what Alice observes, this should not impact what
measurements Bob can conduct, and inversely. And, as it turns our, one
of the consequences of Bell's Theorem is that any quantum system needs
to be non-signalling to ensure proper behaviour, see [Abramsky]. The
implications this has on our concerns may be disputable: indeed, no
equivalent theorem has been proven of language and, furthermore,
"certainly there is no reason to assume it\"[Wang, 2021:3]. This is,
nevertheless, a requirement of the quantum framework and, as such, using
said framework on language requires the considered systems to be
non-signalling[^9]$^{,}$[^10]. Notably, our case in Table 2 does not
satisfy that requirement. Suppose the meaning of "coach\" collapses to
that of "bus\" (this is the equivalent of Alice getting their
measurement result), then, it is simply impossible for "file\" to
follow, as none of its meanings would be compatible (see that once we
fix $coach\rightarrow 1$, both file cases are *0*). This shows the
system is signalling, and thus does not behave in quantum-like
ways[^11]. We must then find some other approach.

## Probabilistic contextuality

As a response to this issue, Wang et al.[Wang, 2021:3] changed focus and turned
their heads towards probabilistic contextuality, hoping to find an
instance both contextual and non-signalling. This strategy diverges in
two main aspects from the possibilistic outlook: first, we replace our
question "Does this make sense?\" with data analysis of linguistic
corpus. That is, we look for attested occurrences of the word pairs we
consider, instead of native gut feeling. Secondly, we replace our *1*
and *0*'s with statistical probabilities[^12]. The result can be seen
in Table 3, keeping the same words as in our previous example for
simplicity. This probabilistic approach gives us more information to
work with. Indeed, instead of simply having the possibility of a certain
reading, we now know the ratio between interpretations of a single
pairing[^13].

   noun  |  verb |  (**0**,**0**) |  (**0**,**1**) |  (**1**,**0**) |  (**1**,**1**)
  -------| ------| -------| -------| -------| -------
   coach |  lap  |  2/11  |  7/11  |  2/11  |  *0*
   coach |  file |  43/44 |  1/44  |  *0* |  *0*
   boxer |  lap  |  11/53 |  22/53 |  8/53  |  12/53
   boxer |  file |  35/54 |  19/54 |  *0* |  *0*

<p align=center> Table 3 : probabilistic combinations </p>

A consquence of these alterations is that, now, contextuality of the
system has to be checked slightly differently. Indeed, we are not
working with possibilistic but probabilistic contextuality, a version
significantly weaker. This means that, though some cases did not behave
contextually previously, they still might with this statistical
approach. To check probabilistic contextuality, we need to work with
Bell inequalities, see [Abramsky]. The general idea is still similar to
what we previously presented, in that we want to prove non-classical
behaviour, i.e. statistical distribution that cannot be explained via
the work of an external source (of a global assignment, if you will).
Bell proved that a certain inequality, when violated, showed
quantum-like contextuality of the system. Here is the method to
calculate it: take a few (one for each line of the table) logical
"unjointly satisfiable\"[Abramsky] propositions, then add up the
probabilities of the cases (bound to their respected lines) that satisfy
said propositions. This sum must be equal or below the number of lines
in table, minus 1, for the system to be classically explainable, given
any particular set of formulas. Contextuality is ensured when the
inequality fails. Here, given our example, are the formulas one might
consider: <br><br>
$\varphi_1 = (coach\rightarrow 1 \land lap\rightarrow 1)
\vee (coach\rightarrow 0 \land lap\rightarrow 0)$ <br>
$\varphi_2 = (coach\rightarrow 1 \land file\rightarrow 1)
\vee (coach\rightarrow 0 \land file\rightarrow 0)$ <br>
$\varphi_3 = (boxer\rightarrow 1 \land lap\rightarrow 1)
\vee (boxer\rightarrow 0 \land lap\rightarrow 0)$ <br>
$\varphi_4 = (boxer\rightarrow 0 \land file\rightarrow 1)
\vee (boxer\rightarrow 1 \land file\rightarrow 0)$


The inconsistency of those formulas is easy to check. We then assign to every $\varphi_i$ the probability $p_i$ for it to obtain, in our case:

<br>
$p_1 = 2/11 + 7/11 = 9/11 $<br>
$p_2 = 43/44 + 0 = 43/44 $<br>
$p_3 = 11/53 + 12/53 = 23/53 $<br>
$p_4 = 19/54 + 0 = 19/54 $<br>

Our Bell inequality to transgress is then:<br>
$\sum_{i=1}^4 p_i\leq 3$<br> After adding all $p_i$'s together, we get
$\sim 2,58$, which is lower than our assumed threshold of $3$ (the
number of lines, minus one). This shows that this particular choice of
formulas does not prove contextuality of the system. However, in our
case, that is not needed, as we have already proven possibilistic
contextuality of the support[^14] of that system, and as such, we know
the model is contextual.\
\
This approach nonetheless does not solve the none signallity issue we
faced. Indeed, Wang et al.[Wang, 2021:3] observe that it even makes it harder
to attain. If we previously only had to check for possibility of
measurement, we now must also verify that statistical distributions are
shared between interpretations. And, indeed, Wang et al.[Wang, 2021:3] observe
that many of the considered systems still refuse to abide to
non-signallity. Considering our example, let us suppose we fix
$coach\rightarrow 0$, then the sum of probabilities between a
measurement with "lap\" ($2/11 + 7/11 = 9/11$) is not the same as with a
measurement through "file\" ($43/44 + 1/44 = 1$). But an identical
distribution is what defines possibilistc non-signallity, showing it
still does not hold in our case. And as such, one major issue arises:
the instability of the corpus. It is extremely unlikely for
probabilities to magically show patterns in their repeated sums.
Furthermore, suppose, fixing a corpus, that we find a non-signalling
system. Adding or removing a single word could break the harmony between
the distributions, making it signalling. Even more problematic, what
would happen if we did it all again, with a much smaller sample? Well,
things might not change, but some attested combinations might
disappear[^15] and in the same breath again change the probability
distributions. We thus still need a way of solidifying probabilities in
a way that ensures that, even were we to alter the corpus, and change
the statistical occurrences of specific combinations, we would still
keep a possibly non-signalling behaviour. And this is why the authors
considered the Contextuality by Default framework.

## Contextuality by Default

Explaining in detail the Contextuality by Default framework could be the
work of an entire separate paper. We will therefore be content with
introducing the general idea behind it. Crucially, note that it "is not
a model of empirical phenomena, and it cannot be corroborated or
falsified by empirical data. However, it provides a sophisticated
conceptual framework in which one can describe empirical data and
formulate models that involve random variables.\"[Dzhafarov]. Its main goal
is to "facilitate\" non-signallity of systems. To simplify (as Wang et
al.[Wang, 2021:3] never use it in a "table shape\"), it can be seen as a hybrid
between the possibilistic and probabilistic contextuality models we
presented, taking the contextuality criteria for probabilistic
contextuality combined with the ease of possibilistic non-signallity. In
other words, it is a form of "compression\", ensuring the statistical
distribution of our probabilistic models do not diverge between
interpretations, by homogenising them through the minimum we observe.
Then, it is possible to calculate how close a system may be to being
contextual. This technique allowed Wang et al.[Wang, 2021:3] to identify
multiple cases of contextuality in natural language, cases obtaining
both of our criteria. This is then further expanded upon in [Wang, 2021:7],
where they mark a difference between the amount of contextuality of
polysemous and homonymous words, notably through the fact that
homonymous verbs seem to disambiguate more that polysemous ones, hinting
at a possibly more theoretical interpretation of the quantum method.

## Critiques and other works

Though rigorous, a few aspects of Wang et al.[Wang, 2021:3]'s paper can be
discussed, and may lead to interesting expansions of the theory. First,
it is unclear why the possibilistic approach initially considered did
not rely on the same corpus that the probabilistic one did, but instead
on gut feeling. The reason one could imagine, is that by giving a pass
or fail themselves, the authors ensured elimination of metaphorical
interpretations, as they decided to "work with non metaphorical meanings
in order to keep the hand annotations of interpretations
manageable.\"[Wang, 2021:3]. This choice itself, can however be criticised too.
In fact, given that the framework here described does not make any
distinctions between polysemous and homonymous words, as the method
could be applied to both, one can wonder why it would not be the same
process for metaphors? And in fact, why not expand on similar concepts
like homophony and homography, where the ambiguity only arises in one
specific way of engaging with the word, namely sound or text? If the
discrimination against metaphorical meaning resulted from an ontological
claim, a belief about their singularity in theory and incompatibility
with the quantum framework, would the same exclusion apply to homophony
and homography, as superposition can only be observed under a very
specific light? One could also wonder about words gaining or losing
interpretations over time. Preexisting words gain slang meanings on
daily basis, and lose archaic ones at least as often, but what impact
does this have on the contextuality of language? Could it gain or lose
contextuality? In a similar way, is it necessary for all interpretations
to be accounted for to evaluate the contextuality of a system? If a word
is contextual with 3 interpretations, should it not also be so with 2?
However, this framework does not ensure this, which seems to indicate
that it is still bound to be a method of analysis, and not a claim about
the underlying structure of language itself.\
\
Please note that there also exist different applications of quantum
theory to linguistics. It has for instance been used to describe vague
words (such as "animal\", "act\", "fruit\" or "vegetable\"), see
[Aerts], and the likelihood for a concept falling under two umbrella
terms to end up being expressed via one or the other. Quantum jargon has
even been used in less formal manners to describe modalities in
language, see [The Heart of Quantum Linguistics], in much the same ways that a lot of trending
topics get applied for a quick intersectionality flare. Nevertheless,
quantum theory appears to be an interesting and vibrant source of
inspiration for linguistic studies.

## Conclusion

In conclusion, the research lead by Wang et al.[Wang, 2021:3] greatly pushes
the idea that quantum theories, and in their case more precisely the
notion of quantum contextuality, could have a role to play in linguistic
analysis. Although not in its traditional possibilistic or probabilistic
forms, but under the adapted guise of the Contextuality by Default
framework, it allows for a proper formalisation of lexical ambiguity and
the context dependency of language. Other applications of the theory
seem as promising, leaving many more research opportunities open, but
until they have been thoroughly scrutinised, we will not take the risk
to claim the field dead or alive.

## References

- Wang, Daphne, Mehrnoosh Sadrzadeh, Samson Abramsky, and Víctor H. Cervantes. **“On the Quantum-like Contextuality of Ambiguous Phrases.”** *CoRR*, 2021. [arXiv:2107.14589](https://arxiv.org/abs/2107.14589).
- 
- Abramsky, Samson. **“Contextuality: At the Borders of Paradox.”** 2020. [arXiv:2011.04899](https://arxiv.org/abs/2011.04899).

- Schütze, Hinrich. **“Automatic Word Sense Discrimination.”** *Computational Linguistics* 24, no. 1 (1998): 97–123.

- Dzhafarov, Ehtibar N., and Janne V. Kujala. **“Context–Content Systems of Random Variables: The Contextuality-by-Default Theory.”** *Journal of Mathematical Psychology* 74 (2016): 11–33. [DOI](https://doi.org/10.1016/j.jmp.2016.04.010).

- Wang, Daphne, Mehrnoosh Sadrzadeh, Samson Abramsky, and Víctor H. Cervantes. **“Analysing Ambiguous Nouns and Verbs with Quantum Contextuality Tools.”** 2021. [UCL repository](https://discovery.ucl.ac.uk/id/eprint/10146180/1/JCogSci.pdf).

- Aerts, Diederik, Liane Gabora, and Sandro Sozzo. **“Concepts and Their Dynamics: A Quantum-Theoretic Modeling of Human Thought.”** *Topics in Cognitive Science* 5, no. 4 (2013): 737–772. [DOI](https://doi.org/10.1111/tops.12042).

- **“The Heart of Quantum Linguistics.”**

- Piedeleu, Robin, Dimitri Kartsaklis, Bob Coecke, and Mehrnoosh Sadrzadeh. **“Open System Categorical Quantum Semantics in Natural Language Processing.”** 2015. [arXiv:1502.00831](https://arxiv.org/abs/1502.00831).

[^1]: Although some have used the distributional framework for
    disambiguation, see [Schütze].

[^2]: It could be argued that this divergence is instead due to
    pragmatics, and to the fact that someone saying "I'm dead\" cannot
    realistically be so literally. This distinction is however not
    important, though it highlights the complexity of separating
    context-induced meanings from "formal\" ones. A tried and tested
    non-pragmatic alternative example of a polysemous word could be the
    word bank, meaning both the building and the financial
    establishment.

[^3]: Note that polysemous words can also be explained in a different
    way, see [Piedeleu], more consistent with the general linguistic
    theory. This reading claims polysemous words to be "bundles\" of
    vector states, which aligns more clearly with the theory (given
    homonymy is the inability of differentiating words, whereas polysemy
    is inner confusion bound to one and only lexical unity), but, as it
    strays away from the method here presented, we will ignore said
    differences and treat polysemy as superimposition too. To avoid
    confusion, all following examples in this paper are homonyms.

[^4]: We will later briefly look at seemingly unambiguous ambiguous
    words. Most people would only think of the furry animal in this
    example, as the other reading is jargon, or in-group slang the agent
    might not be aware of. The point, however, still holds.

[^5]: To avoid confusion with the indexes of meanings, we embolden those
    numbers.

[^6]: We will see later that this method induces confusion, as some
    readings deemed possible were never found in corpus, and some deemed
    impossible were instantiated, albeit via metaphors and figures of
    speech.

[^7]: This is the origin of the problem in the previous footnote. Those
    types of contextuality are of gradual strength, where strongly
    possibilistic entails possibilistic, which itself entails
    probabilistic. Misalignment between the possibilistic and
    statistical tables risks breaking this chain (and it does).

[^8]: Though we will not use the term here, note that strong
    possibilistic contextuality simply requires that no local
    assignement can be extended.

[^9]: Even if the entire language itself is not

[^10]: This requirement can be softened through the CbD framework we
    consider later, but should still apply to standard quantum theory
    applications.

[^11]: Strong possibilistic contextuality could be used here as a way to
    enforce applicability of the framework, as it naturally entails
    non-signallity, see [Abramsky]. Strengthening the contextuality
    requirement would however reduce the amount of cases the framework
    is applicable to, which explains why it is not a solution considered
    by the authors.

[^12]: Please note that a consequence of this is that all probabilities
    on a same line add up to 1.

[^13]: Note that, once again for readability, unattested interpretations
    will be marked with a bold *0*.

[^14]: The support is simply the same table as our probabilistic
    results, with *1* inserted wherever a non-zero statistic has been
    observed. In short, it is the underlying possibilistic structure of
    a probabilistic model. This explains why probabilistic contextuality
    naturally follows from its possibilistic counterpart

[^15]: Similarly, if we were to massively enlarge the sample, some
    unattested combinations might make an appearance.
