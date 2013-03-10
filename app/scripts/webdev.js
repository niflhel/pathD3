define([], function() {
  var data = 
  {
    "nodes": [
      {"id":"HTML","group":1,"selected":false},
      {"id":"CSS","group":2,"selected":false},
      {"id":"JavaScript","group":3,"selected":false},
      {"id":"jQuery","group":3,"selected":false},
      {"id":"Backbone","group":3,"selected":false},
      {"id":"Node","group":3,"selected":false},
      {"id":"SASS","group":3,"selected":false},
      {"id":"LESS","group":3,"selected":false},
      {"id":"HAML","group":3,"selected":false},
      {"id":"Handlebars","group":3,"selected":false}
    ],
    "links": [
      {"source":"HTML","target":"HAML"},
      {"source":"HTML","target":"Handlebars"},
      {"source":"CSS","target":"HTML"},
      {"source":"CSS","target":"JavaScript"},
      {"source":"CSS","target":"SASS"},
      {"source":"CSS","target":"LESS"},
      {"source":"JavaScript","target":"HTML"},
      {"source":"JavaScript","target":"jQuery"},
      {"source":"jQuery","target":"Backbone"},
      {"source":"JavaScript","target":"Backbone"},
      {"source":"JavaScript","target":"Node"}
    ]
  };
  return data;
});