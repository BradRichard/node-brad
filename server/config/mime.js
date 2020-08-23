const mime={
    'html':'text/html',
    'css' :'text/css',
    'jpg' :'image/jpg',
    'ico' :'image/x-icon',
    'mp3' :'audio/mpeg3',
    'mp4' :'video/mp4'
};
const archivo=(camino)=>{
    const vec=camino.split('.');
    const extension=vec[vec.length-1];
    return mimearchivo=mime[extension];
}
module.exports={
    archivo
};