---
section: portfolio
---
Alongside my philosophical research and teaching, I have been working for more
than ten years in digital humanities and web development. I am currently
available for freelance or contract work, and can be contacted through
[GitHub]({{ site.github}}) or [LinkedIn]({{ site.linkedin }}).

I specialize in frontend CSS and JavaScript development, and am experienced in a
range of JavaScript-related technologies (Node, Deno, TypeScript, Elm, React,
Webpack). My preference is for functional programming, and when given the choice
I will work either with a strict version of TypeScript (keeping my code as pure
as possible), or with Elm.

I am also accomplished in relational database design, and can do backend work as
needed, preferably with Node and PostgreSQL (though I have also worked with
PHP/Symfony, MySQL, and SQL Server).

Below are some of my projects.

{% for project in site.data.projects %}
### [{{ project.title }}]({{ project.url }})

{{ project.blurb }}

{% endfor %}
