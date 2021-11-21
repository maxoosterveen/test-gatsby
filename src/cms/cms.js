import CMS from 'netlify-cms-app'
import products from './collections/products'
import pages from './collections/pages';

window.CMS_MANUAL_INIT = true

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'test-repo',
    },
    media_folder: '/static/img',
    public_folder: '/img',
    collections: [pages, products],
  },
})

CMS.registerEventListener({
    name: 'prePublish',
    handler: ({ author, entry }) => {
        if(entry.get('collection') === 'product') {
            console.log('a new product was published!');
        }
    }
});