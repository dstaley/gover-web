module.exports = {
  compile: {
    files: [{
      expand: true,
      cwd: 'app/styles',
      src: ['**/*.less', '!less/*.less'],
      dest: 'tmp/result/assets/',
      ext: '.css'
    }]
  }
};
