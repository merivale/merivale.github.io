---
section: cv
---
{% for group in site.data.roles %}
### {{ group.years }}

{% for role in group.roles %}
- {{ role.title }} ({{ role.dates }})

  {% for place in role.places %}[{{ place.title }}]({{ place.url }}){% unless forloop.last %}, {% endunless %}{% endfor %}
{% endfor %}
{% endfor %}
