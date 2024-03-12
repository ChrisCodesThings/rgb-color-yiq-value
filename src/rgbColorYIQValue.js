import looksLikeRGBA from '@chriscodesthings/color-looks-like-rgba';


export default function (col) {
    if (!looksLikeRGBA(col)) {
        return;
    }

    return ((col[0] * 299) + (col[1] * 587) + (col[2] * 114)) / 1000;
}
