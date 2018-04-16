---
path: "/humility-and-database-connectivity"
title: "Humility and Database Connectivity"
date: "2008-01-30"
draft: false
tags: tech, work
---
Ben Watson, on his blog, Philosophical Geek, recently published an excellent post titled <a href="http://www.philosophicalgeek.com/2008/01/20/5-attributes-of-highly-effective-programmers/">Top 5 Attributes of Highly Effective Programmers</a>. He is not referring here to knowledge of particular technical topics, frameworks or interview minutiae. Instead, these are 5 personality traits that make programmers more effective:

<ul>
<li>Humility</li>
<li>Love of Learning</li>
<li>Detail-orientedness</li>
<li>Adaptability</li>
<li>Passion</li>
</ul>

The post examines each of these in depth and, as I said, is an excellent analysis. Most interesting to me is the first, humility. Ben starts:

<blockquote>
"Humility is first because it implies all the other attributes, or at least enables them."
</blockquote>

Though Ben states he believes all five attributes can be learned, I am not sure I agree when it comes to humility. My early professional experience taught me that after basic technical competence, humility is the single most important attribute a developer can possess. Humility enables best practices like unit testing and refactoring. Humility allows collaboration. In my opinion, humility is a requirement for the long term success of a team.

In 10+ years, I've worked with some massive egos and some incredibly intelligent, talented people. Rarely would I use both descriptions for the same person.

Working with a programmer who is sure they are an expert in every topic makes for long days. They generally believe that every line of code flowing from their gifted fingers to the keyboard is bug-free and perfect. Their designs are the work of genius only they possess. Testing is unnecessary against such perfection. Code that does not work must be someone else's issue. While this description may sound like a caricature, I've been there. More than once.

In my first programming job, I worked with that guy - the Expert. This was 1997 and the company was just figuring out how it might hop on the Internet bandwagon. We were building an e-commerce site with Java servlets and JSP (version 0.92, if I remember) -- technology choices our Expert made because, well, he was an Expert. While the rest of the team was learning on the job, he churned out library after library. While the team got up to speed and built some momentum, our Expert wore out his welcome with management (long after he'd alienated most of the team) and was reassigned to a&nbsp; "special" project.

As our first big release approached, we uncovered some glaring performance issues in his database connection pooling library (I believe this was early enough that we were using a Type 1 JDBC-ODBC bridge with no built in pooling). Clearly annoyed, he said he'd have a look and dismissed me. A couple of days later I inquired again. He could reproduce the problem, but was sure that it was not his code. His conclusion was that the JDBC-ODBC bridge was to blame and suggested that we switch to the pure Java driver, which I believe was not yet at 1.0.

Not long after this, our Expert left the company, having further worn out his welcome and failing to get his "special" project off the ground. In the meantime, a couple of us unravelled his connection pooling and fixed the threading issue that caused the problem.

I have other, similar stories - some from long ago, some from not so long ago. In all of them a lack of humility leads to pain. Again, I'm not sure this trait can be learned. I do know that when I think about joining a team, this is always one of the variables I carefully consider.
