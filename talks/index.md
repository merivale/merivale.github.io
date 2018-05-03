---
section: talks
---
{% for year in site.data.talks %}
### {{ year.year }}

{% for talk in year.talks %}
- [{{ talk.title }}](/talks/{{ year.year }}/{{ talk.title | slugify }}), *{{ talk.where }}* ({{ talk.when }})
{% endfor %}
{% endfor %}
