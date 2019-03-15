---
section: publications
---
### Books

{% for book in site.data.publications.books %}
- {% if book.url %}[*{{ book.title }}*]({{ book.url }}){% else %}*{{ book.title }}*{% endif %}, {{ book.publisher }}, {{ book.year }}
{% endfor %}

### Articles

{% for article in site.data.publications.articles %}
 - ["{{ article.title }}"]({{ article.url }}), *{{ article.journal }}* {{ article.volume }} ({{ article.year }}), pp. {{ article.pages }}
{% endfor %}

### Other

{% for other in site.data.publications.others %}
- {% if other.url %}[*{{ other.title }}*]({{ other.url }}){% else %}*{{ other.title }}*{% endif %}, {{ other.publisher }}, {{ other.year }}
{% endfor %}
