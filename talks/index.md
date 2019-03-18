---
section: talks
---
{% for year in site.data.talks %}
### {{ year[0] }}

{% for talk in year[1] %}
- [{{ talk[1].title }}](/talks/{{ year[0] }}/{{ talk[0] }}), *{{ talk[1].event }}*, {{ talk[1].date }}
{% endfor %}

{% endfor %}
