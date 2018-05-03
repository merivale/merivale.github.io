---
section: teaching
---
## Introduction to Logic

The set text for this course is Volker Halbach's Logic Manual. You can find details of the book and various other supporting materials here: [logicmanual.philosophy.ox.ac.uk](http://logicmanual.philosophy.ox.ac.uk/).

Note that we will not be going through the course content in the default order. This means that you will encounter some things with me before you encounter them in the university lectures, and vice versa. Don't let this worry you -- it won't happen very much, and everything will have been covered twice by the end of term.

{% for week in site.data.logic %}
### Week {{ week.number }}: {{ week.title }}

- Reading: {{ week.reading }}
{% if week.notes %}- Notes: [Week {{ week.number }} - {{ week.notes }} (PDF)](/assets/pdf/teaching/logic/Week {{ week.number }} - {{ week.notes }}.pdf){% endif %}
- Work: [Week {{ week.number }} - Exercises (PDF)](/assets/pdf/teaching/logic/Week {{ week.number }} - Exercises.pdf)

{% endfor %}
