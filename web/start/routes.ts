import Route from '@ioc:Adonis/Core/Route';

Route.get('/', 'MainController.index').as('app.index');
