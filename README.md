# React-Django-rest_api

# <span style="colour:red;">WHAT IS REST??<span>
https://restfulapi.net/
************
 # Serializers
  Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types. Serializers also provide deserialization, allowing parsed data to be converted back into complex types, after first validating the incoming data.

The serializers in REST framework work very similarly to Django's Form and ModelForm classes. We provide a Serializer class which gives you a powerful, generic way to control the output of your responses, as well as a ModelSerializer class which provides a useful shortcut for creating serializers that deal with model instances and querysets.

  <h4>Declaring Serializers</h4>
  
Let's start by creating a simple object we can use for example purposes:
  
from datetime import datetime

class Comment:
  
    def __init__(self, email, content, created=None):
  
        self.email = email
  
        self.content = content
  
        self.created = created or datetime.now()

comment = Comment(email='leila@example.com', content='foo bar')
 
 *********
 # Implementing React side:
 
 Basic Installation:
  1. Install webpack webpack-cli @babel/core @babel/presets(-env,-react) babel-loader babel-plugin-transform-class-properties in -D dependencies.
 
  2. Install react react-dom and prop-types in dependencies.
  
 Implementation:
 

 1. Implement Webpack.config.js and .babelrc
 
 2.  Write the scripts for dev and build.
 
 3.  Create your react app and add urls and views with index.html link.
 
 4. In terminal : npm run dev and python manage.py runserver!!
  
  
