---
section: portfolio
---
Alongside my philosophical research and teaching, I have been working for ten years in digital humanities and web development. I am currently available for freelance or contract work, and can be contacted through [GitHub]({{ site.github }}) or [LinkedIn]({{ site.linkedin }}).

I specialize lately in frontend development, and am experienced in JavaScript, jQuery, Elm, React, Webpack, Jekyll, and Harp. I am also accomplished in relational database design, and can do backend work as needed, preferably with Node and PostgreSQL (though I have also worked with PHP/Symfony, MySQL, and SQL Server). Below are some of my projects.

{% for project in site.data.projects %}
### [{{ project.title }}]({{ project.url }})

{{ project.blurb }}

{% endfor %}
