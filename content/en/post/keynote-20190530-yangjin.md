+++
title = "[Keynote] CPU analysis and Software design summary"
summary = "The CPU of hardware analysis and the summary of software design experience in previous time."

date = "2019-05-30T00:00:00+00:00"
tags = []
authors = ["yangjin"]

[header]
image = ""
caption = ""
+++

Click [PDF](https://eyrie.coden.hk/space/?path=/c422/weekly-keynote/2019-5-31-yangjin/5.30工作室分享会.pdf) and see details.

## Point out an error

For the question that **"Why is Thread instead of Process in ‘4 Core 8 Thread' ?”** in PDF

Firstly，a point should be clearly，which is that **Thread in '4 Core 8 Thread' is different with Thread in operating system**.The former refers to the **physical unit** in the CPU, the latter refers to the **logical unit** in the operating system, so the problem does not hold!
