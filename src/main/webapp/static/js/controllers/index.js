/**
 * Created by mingchen.xiao on 2016/6/29.
 */

define(['app' , 'bootbox' , 'js-beautify'], function(app , bootbox) {
    app.controller('IndexCtrl', ['$rootScope' , '$scope' , '$http' , '$cookies' , '$window' ,'gqObj' , 'gqJSON' , '$location' , function($rootScope , $scope , $http , $cookies , $window , gqObj , gqJSON , $location) {
        /**
         * 查询所有node
         */
        var queryNodes = function() {
            var _path = {
                dir: "menu",
                fileName: "menu"
            };
            gqJSON.query(_path, {}, function(obj) {
                //console.log(obj);
                $scope.menus = obj;
            },function(error){
                bootbox.alert(error.data.message);
            });
        }
        queryNodes();

        //bootbox.alert("coming soon.");
        $scope.validPath = function(path){
            var reg = new RegExp('^' + path + '.*','i');
            var lp = $location.path();
            lp = "#" + lp;
            return reg.test(lp);
        }

        $scope.toggleMenu = function(e) {
            var $link = jQuery(e.target);

            // Get link's parent
            var $parentLi = $link.parent('li');

            if ($parentLi.hasClass('open')) { // If submenu is open, close it..
                $parentLi.removeClass('open');
            } else { // .. else if submenu is closed, close all other (same level) submenus first before open it
                $link
                    .closest('ul')
                    .find('> li')
                    .removeClass('open');

                $parentLi
                    .addClass('open');
            }
            return false;
        };
    }]);

    app.controller('DataCtrl', function($scope, $http) {
        $scope.openFileModel = function(){
            $("#import_file_model").modal('show');
        };

        $scope.uploadFile = function () {
            //打开遮罩层
            $.blockUI({
                target : '#import_file_model',
                boxed : true,
                baseZ : 9999999,
                message : '<i class="dialog-loading"></i><h4>正在解析中...</h4>',
                css:{background:'none',border:'none',color:'#fff'}
            });
            var formData=new FormData();
            formData.append("file",batFile.files[0]);
            $http({
                method: 'POST',
                url: '/data/upload',
                headers: {'Content-Type': false},
                data: formData,
                transformRequest: function(data, headersGetterFunction) {
                    return data;
                }
            }).success(function(data, status) {
                //关闭遮罩层
                $.unblockUI('#batch_whitelist_dialog');
                $("#batch_whitelist_dialog").modal('hide');
                bootbox.alert("导入成功！");
            }).error(function(err){
                bootbox.alert("导入失败");
            })

        };

    });

    return app;
});