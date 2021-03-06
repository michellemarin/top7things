App.Router.map(function () {
  this.route('thing',             {path: '/things/:id'         });
  this.route('edit_thing',        {path: '/things/:id/edit'    });
  this.route('new_thing',         {path: '/things/new'         });
  this.route('review_things',     {path: '/review'             });
  this.route('results',           {path: '/results'            });
  this.route('category',          { path: '/categories'        });
  this.route('contact',           {path: '/contact'            });
  this.route('get-started',       {path: '/get-started'        });
});
