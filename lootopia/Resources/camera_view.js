/**
 * @author uca
 */
// 全面白の背景色指定
var window = Ti.UI.createWindow({
   backgroundColor:'#FFFFFF'
});
 
//ボタン設置
var camera = Ti.UI.createButton({
    //backgroundImage:'images/camera.png',
    height:40,
    width:100,
    top:200
});
 
//クリック時にカメラの起動
camera.addEventListener('click', function(){
    Ti.Media.showCamera({
        success:function(event){
            // cropRectにはx,y,height,widthといったデータがはいる。
                var rect    = event.cropRect;
                var image   = event.media;
 
            // 撮影されたデータが写真ならばImageViewとしてWindowに貼り付ける
            if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO){
                var imageView = Ti.UI.createImageView({
                    width:window.width,
                    height:window.height,
                    image:event.media
                });
                window.add(imageView);
            }
        },
        cancel:function(){
            //キャンセルの場合の処理
        },
        error:function(error){
            // カメラがない場合は、error.code が Ti.Media.NO_CAMERA として返す。
        },
        // 撮影データのフォトギャラリーへの保存
        saveToPhotoGallery:true,
        // 撮影直後に拡大縮小移動をするか否かのフラグ
        allowEditing:true,
        // 撮影可能なメディア種別を配列で指定
        mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO],
    });
});
 
//カメラボタンを画面へ追加
window.add(camera);
window.open({
    animated:true
});