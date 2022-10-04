
# Domain Models

## User story 1: 
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

| **OBJECTS** | **PROPERTIES**       | **MESSAGE**   | **OUTPUT** |
|-------------|----------------------|---------------|------------|
| airport     | hanger@array[@plane] | @land(@plane) | @void      |
| plane       | id@string            | -             | -          |