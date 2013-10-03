require.config({
    // relative url from where modules will load
    baseUrl: 'Scripts',
    paths: {
        jQuery: 'jquery-2.0.3',
        knockout: 'knockout-2.3.0.debug',
        MemberViewModel: 'Modules/MemberViewModel'
    },
    shim: {
        knockout: {
            exports: 'knockout'
        },
        jQuery: {
            exports: 'jQuery'
        }
    }
});