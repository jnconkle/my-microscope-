var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  },
  {
    title: 'Breaking Smart',
    url: 'http://breakingsmart.com/season-1/'
  }
];
// below is a template helper called posts which returns postsList we defined above
Template.postsList.helpers({
  posts: postsData
});
