$(document).ready(function() {
    $('#goodreads').qtip({
        content: 'Goodreads',
        position: {
            corner: {
                tooltip: 'topMiddle',
                target: 'bottomMiddle'
            },
            adjust: {
                y: 5
            }
        }
    });
    $('#linkedin').qtip({
        content: 'LinkedIn',
        position: {
            corner: {
                tooltip: 'topMiddle',
                target: 'bottomMiddle'
            },
            adjust: {
                y: 5
            }
        }
    });
    $('#facebook').qtip({
        content: 'Facebook',
        position: {
            corner: {
                tooltip: 'topMiddle',
                target: 'bottomMiddle'
            }, 
            adjust: {
                y: 5
            }
        }
   });
   $('#github').qtip({
        content: 'GitHub',
        position: {
            corner: {
                tooltip: 'topMiddle',
                target: 'bottomMiddle'
            },
            adjust: {
                y: 5
            }
        }
    });
});