---
section: publications
---
{% for group in site.data.publications %}
### {{ group.year }}

{% for book in group.books %}
- {% if book.url %}[*{{ book.title }}*]({{ book.url }}){% else %}*{{ book.title }}*{% endif %}, {{ book.publisher }}
{% endfor %}

{% for article in group.articles %}
 - ["{{ article.title }}"]({{ article.url }}), *{{ article.journal }}* {{ article.volume }}, pp. {{ article.pages }}
{% endfor %}
{% endfor %}
