import router from './router'
import NProgress from 'nprogress';

NProgress.configure({
  template: `<div class="bar" role="bar" style="background:#1DE2C3;"><div class="peg"></div></div>
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>`,
  showSpinner: false,
});

router.beforeEach(async(to, from, next) => {
    NProgress.start();
    next()
})

router.afterEach(() => {
  NProgress.done();
});

