
import perfection from '../../images/browser/happyHomer.jpg'
import carCrusher from '../../images/browser/carCrusher.png'
import cheeseburger from '../../images/browser/cheeseburger.png'
import happyCow from '../../images/browser/happyCow.jpeg'
import smashBurgerLargeLogo from '../../images/browser/smashBurgerLargeLogo.png'
import NavBar from '../../components/NavBar/NavBar'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="homePageMainBox">

    <NavBar />


    <div className='homePageSectionOuterBox'>
      <div className='homePageSectionSubBox'>
      <img className='homePageSmashLogo' src={smashBurgerLargeLogo} />
      </div>
    </div>

<div className='homePageSectionOuterBox'>
  <div className='homePageDescription'>
    <h2 style={{ marginBottom: '1%'}}>Burgers so good you'll literally have a million!</h2>
  <p>
    SO what is it about these burgers thats so great Tony? 
    <br /><br />
    Grrrreat! It's Tony the Tiger here, and let me tell you, beef is the king of the jungle when it comes to meats! It's packed with protein for those powerful muscles, iron for energy that keeps you roaring all day, and B vitamins for a brain as sharp as my claws.   
    <br />
    <br />
    Beef's flavor? Oh, it's a symphony of deliciousness! From juicy burgers to sizzling steaks, every bite is an adventure. Its versatility? Unmatched! You can grill it, roast it, braise it - the possibilities are endless. And don't forget the variety! Whether you crave a tender filet or a hearty brisket, there's a cut for every occasion.
    <br /><br />
    So, the next time you're looking for a meal that'll make you feel like the top of the food chain, choose beef! It's not just delicious, it's grrrreat!
  </p>
  </div>
 
    <div className='homePageSectionSubBox'>
<img src={happyCow} className='homePageImg'/>
<p style={{ padding: '2%'}}> + </p>
<img src={cheeseburger} className='homePageImg'/>
<p style={{ padding: '2%'}}> X </p>
<img src={carCrusher} className='homePageImg' />
<p style={{ padding: '2%'}}> = </p>
<img src={perfection} className='homePageImg' />
    </div>
</div>

<div className='homePageSectionOuterBox'>
  <div className='homePageDescription'>
    <h2 style={{ marginBottom: '1%'}}>THEY MAKE YOU SMARTER TOO??? test</h2>
  <p>
    SO what is it about these burgers thats so smart Mr. Fudd? 
    <br /><br />
    Eheheheheh, it's youw fwiend, Elmew Fudd, hewe to tell you why beef makes you smawtew!  Now, I may be aftew that wascawwy wabbit, but I ain't no dummy! I know a thing ow two about bwain powew, and beef, well, it's the secwet weapon!
    <br /><br />
    Fawst off, beef is packed with pwotein.  That's what builds stwong muscles, and youw bwain is just a big muscle, see?  So, eatew up that beef and watch those bwain cells get pumptew up!  You'll be outsmartin' even that twicky Bugs Bunny in no time!
    <br /><br />
    Next, thewe's iwon. Iwon keeps the blood flowin', and youw bwain needs lots of that good stuff to keep thinkin' cweaw.  Without iwon, you'll be feelin' foggy, and youw ideas will be as slow as a tuwtle. But with beef, you'll be shawp as a tack!
    <br /><br />
    And don't fowget those B vitamins! They'we wike wittwe spawk pwugs fow youw noggin.  They help youw bwain send messages faster than a spweedin' buwwet, so you can weaceon fast and solve any pwobwem.
    <br /><br />
    So, if you wanna be the best and the bwightest, don't be a dwip!  Put some beef on youw p-wate, and you'll be thinkin' cweaw in no time.  Be vewy, vewy quiet... I'm huntin' fow some bwain food! Eheheheheh!
  </p>
  </div>
    </div>
    </div>  
  )
}
