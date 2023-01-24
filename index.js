var options = {
    mode: 'frontend',
    pagination: 'thumbnails'
};

var instance = new AsukaDesigner('#myId', options); // Create an instance of the main plugin class

instance.designer().addView('myView', /* width */ 500, /* height */ 500); // Access the subclasses from the main class

instance.on('ready', function () {
    console.log('The plugin is ready');
})