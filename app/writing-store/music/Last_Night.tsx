import Markdown from 'markdown-to-jsx';
const lyrics = `
[english]

Last night we let the liquor talk
I can't remember everything we said but we said it all
You told me that you wish I was somebody you never met
But baby, baby somethin's tellin' me this ain't over yet
No way it was our last night
 
I kiss your lips
Make you grip the sheets with your fingertips
Last bottle of Jack we split a fifth
Just talk about life goin' sip for sip
You, you know you love to fight
And I say shit I don't mean
But I'm still gon' wake up wantin' you and me
 
I know that last night we let the liquor talk
I can't remember everything we said but we said it all
You told me that you wish I was somebody you never met
But baby, baby somethin's tellin' me this ain't over yet
No way it was our last night
No way it was our last night
 
No way it was the last night that we break up
I see your tail lights in the dust
You call your momma, I call your bluff
In the middle of the night, pull it right back up
Yeah my, my friends say let her go
Your friends say what the hell
I wouldn't trade your kind of love for nothin' else
 
Oh baby, last night we let the liquor talk
I can't remember everything we said but we said it all
You told me that you wish I was somebody you never met
But baby, baby somethin's tellin' me this ain't over yet
 
No way it was our last night, we said we'd had enough
I can't remember everything we said but we said too much
I know you packed your shit and slammed the door right before you left
But baby, baby somethin's tellin' me this ain't over yet
No way it was our last night
No way it was our last night
 
I know you said this time you really weren't coming back again
But baby, baby somethin's tellin' me this ain't over yet
No way it was our last night
No way it was our last night

[español]

Anoche dejamos que el licor hablara
No puedo recordar todo lo que dijimos, pero lo dijimos todo
Me dijiste que deseabas que fuera alguien que nunca conociste
Pero cariño, algo me está diciendo que esto aún no ha terminado
De ninguna manera fue nuestra última noche

Besé tus labios
Te hago agarrar las sábanas con las yemas de tus dedos
La última botella de Jack la compartimos a medias
Solo hablamos de la vida tomando sorbo a sorbo
Tú, tú sabes que te encanta pelear
Y digo cosas que no quiero decir
Pero aún me despertaré queriéndote a ti y a mí

Sé que anoche dejamos que el licor hablara
No puedo recordar todo lo que dijimos, pero lo dijimos todo
Me dijiste que deseabas que fuera alguien que nunca conociste
Pero cariño, algo me está diciendo que esto aún no ha terminado
De ninguna manera fue nuestra última noche
De ninguna manera fue nuestra última noche

De ninguna manera fue la última noche en que rompemos
Veo tus luces traseras en el polvo
Llamas a tu mamá, yo desafío tu farol
En medio de la noche, lo vuelves a levantar
Sí, mis amigos dicen déjala ir
Tus amigos dicen qué diablos
No cambiaría tu tipo de amor por nada más

Oh cariño, anoche dejamos que el licor hablara
No puedo recordar todo lo que dijimos, pero lo dijimos todo
Me dijiste que deseabas que fuera alguien que nunca conociste
Pero cariño, algo me está diciendo que esto aún no ha terminado

De ninguna manera fue nuestra última noche, dijimos que ya habíamos tenido suficiente
No puedo recordar todo lo que dijimos, pero dijimos demasiado
Sé que empacaste tus cosas y cerraste la puerta justo antes de irte
Pero cariño, algo me está diciendo que esto aún no ha terminado
De ninguna manera fue nuestra última noche
De ninguna manera fue nuestra última noche

Sé que dijiste que esta vez realmente no volverías
Pero cariño, algo me está diciendo que esto aún no ha terminado
De ninguna manera fue nuestra última noche
De ninguna manera fue nuestra última noche`.replaceAll('\n', '<br/>');

const Last_Night = {
  title: 'Last Night Morgan Wallen lyrics/letra Traducción al español',
  category: 'music',
  img: 'https://charts-static.billboard.com/img/2016/08/morgan-wallen-nlu-344x344.jpg',
  writing: (
    <>
      <img
        src="https://charts-static.billboard.com/img/2016/08/morgan-wallen-nlu-344x344.jpg"
        className="mt-4"
      />
      <Markdown>{lyrics}</Markdown>
      <iframe
        className="mt-4 w-full"
        height="315"
        src="https://www.youtube.com/embed/bUjPPBxbQrQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </>
  ),
  description:
    'La letra de la canción de Morgan Wallen "Last Night" ha sido traducida al español. | The lyrics of "Last Night" by Morgan Wallen have been translated into Spanish.',
  tags: [
    'Lyrics',
    'Morgan Wallen',
    'R&B',
    'español',
    'Spanish',
    'Country Pop',
    'translation',
  ],
  date: new Date('2023-08-20T04:01:37.973Z'),
};

export default Last_Night;
