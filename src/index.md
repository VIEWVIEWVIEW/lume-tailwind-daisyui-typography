---
title: This is the front matter
layout: layouts/main.njk
theme: lofi
---

<!-- @tailwind/typography is applied in _includes/layouts/main.njk -->
<h1>This page uses the lofi theme</h1>

[Check out the nunjucks example](nunjucks)
----

## Below are some demos



Heading level 2
---------------


Love<strong>is</strong>bold

Italicized text is the *cat's meow*.

> Dorothy followed her through many of the beautiful rooms in her castle.

<!-- daisyUI button example. I had to add not-prose, as @tailwind/typography makes text dark  -->
<button class="btn btn-primary " href="/nunjucks">This is a useless button</button>

<div class="radial-progress bg-primary text-primary-content border-4 border-primary" style="--value:70;">70%</div>

# Lol 
<select class="select w-full max-w-xs border-2 border-black">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.