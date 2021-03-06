$.fn.dmWidgetContentCkEditorForm = function(widget)
{

    //Kill all existing instances before loading
    //ckeditor again or it will not work with ajax request
    for(var name in CKEDITOR.instances)
    {
        CKEDITOR.remove(CKEDITOR.instances[name]);
    }


    var self = this, $textarea = self.find('textarea.dm_ckeditor'), editor;

    $textarea.ckeditor(function()
        {
            $.dbg(this);
        },
        $textarea.metadata()
    );


    self.find('input.submit').click(function() {

        $textarea.text($textarea.val());

    });
};

window.CKEDITOR_BASEPATH = dm_configuration.relative_url_root+'/dmCkEditorPlugin/js/ckeditor/';