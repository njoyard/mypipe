import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    const band = this.modelFor('channels');
    return band.findBy('slug', params.slug);
  }
});
