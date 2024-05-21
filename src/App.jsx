import { useState } from "react";
import "./styles.css";
import { SocialIcon } from "react-social-icons";

export default function App() {
  const quotes = [
    {
      quote: "You don't manage people, you manage things. You lead people.",
      author: "Grace Hopper",
      url: "https://www.biography.com/scientist/grace-hopper",
    },
    {
      quote:
        "It is often easier to ask for forgiveness than to ask for permission.",
      author: "Grace Hopper",
      url: "https://www.biography.com/scientist/grace-hopper",
    },
    {
      quote:
        'The most dangerous phrase in the language is, "We\'ve always done it this way."',
      author: "Grace Hopper",
      url: "https://www.biography.com/scientist/grace-hopper",
    },
    {
      quote: "A ship in port is safe, but that is not what ships are for.",
      author: "Grace Hopper",
      url: "whttps://www.biography.com/scientist/grace-hopper",
    },
    {
      quote: "One accurate measurement is worth a thousand expert opinions.",
      author: "Grace Hopper",
      url: "https://www.biography.com/scientist/grace-hopper",
    },
    {
      quote: "All great achievements require time.",
      author: "Maya Angelou",
      url: "",
    },
    {
      quote:
        "If you don't like something, change it. If you can't change it, change your attitude.",
      author: "Maya Angelou",
      url: "",
    },
    {
      quote: "Nothing will work unless you do.",
      author: "Maya Angelou",
      url: "",
    },
    {
      quote: "Life is what you make it. Always has been, always will be.",
      author: "Eleanor Roosevelt",
      url: "",
    },
    {
      quote:
        "You don’t have to be someone special to achieve something amazing. You’ve just got to have a dream, believe in it and work hard.",
      author: "Jessica Watson",
      url: "",
    },
    {
      quote:
        "Don't feel stupid if you don't like what everyone else pretends to love.",
      author: "Emma Watson",
      url: "",
    },
    {
      quote: "When the whole world is silent, even one voice becomes powerful.",
      author: "Malala Yousafzai",
      url: "",
    },
    {
      quote:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
      url: "",
    },
    {
      quote: "In order to be irreplaceable one must always be different.",
      author: "Coco Chanel",
      url: "",
    },
    {
      quote:
        "Being confident and believing in your own self-worth is necessary to achieving your potential.",
      author: "Sheryl Sandberg",
      url: "",
    },
    {
      quote: "Done is better than perfect.",
      author: "Sheryl Sandberg",
      url: "",
    },
    {
      quote:
        "Don't let anyone rob you of your imagination, your creativity, or your curiosity. It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.",
      author: "Mae Jemison",
      url: "https://www.space.com/17169-mae-jemison-biography.html",
    },
    {
      quote:
        "I was taught that the way of progress was neither swift nor easy.",
      author: "Marie Curie",
      url: "https://www.brainyquote.com/quotes/marie_curie_383419",
    },
    {
      quote: "Life need not be easy, provided only that it is not empty.",
      author: "Lise Meitner",
      url: "https://www.goodreads.com/quotes/1336078-life-need-not-be-easy-provided-only-that-it-is",
    },
    {
      quote:
        "All sorts of things can happen when you’re open to new ideas and playing around with things.",
      author: "Stephanie Kwolek",
      url: "http://www2.dupont.com/Kevlar/en_US/assets/downloads/DuPont_Cooper_River_Timeline_Online_Piece_FINAL%20100311.pdf",
    },
    {
      quote:
        "As always in life, people want a simple answer...and it’s always wrong.",
      author: "Susan Greenfield",
      url: "http://extraordinarywls.blogspot.com/2016/01/quote-susan-greenfield.html",
    },
    {
      quote:
        "Courage is like a habitus, a habit, a virtue: you get it by courageous acts. It’s like you learn to swim by swimming. You learn courage by couraging",
      author: "Marie Daly",
      url: "https://www.biography.com/people/marie-m-daly-604034",
    },
    {
      quote:
        "The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.",
      author: "Rachel Carson",
      url: "https://www.americanswhotellthetruth.org/portraits/rachel-carson",
    },
    {
      quote:
        "Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.",
      author: "Golda Meir",
      url: "http://www.goodreads.com/author/quotes/223411.Golda_Meir",
    },
    {
      quote:
        "I didn’t get there by wishing for it or hoping for it, but by working for it.",
      author: "Estée Lauder",
      url: "",
    },
    {
      quote: "Power’s not given to you. You have to take it.",
      author: "Beyoncé Knowles Carter",
      url: "",
    },
    {
      quote:
        "The difference between successful people and others is how long they spend time feeling sorry for themselves.",
      author: "Barbara Corcoran",
      url: "",
    },
    {
      quote:
        "You can waste your lives drawing lines. Or you can live your life crossing them.",
      author: "Shonda Rhimes",
      url: "",
    },
    {
      quote:
        "I’d rather regret the things I’ve done than regret the things I haven’t done.",
      author: "Lucille Ball",
      url: "",
    },
    {
      quote: "If you don’t risk anything, you risk even more.",
      author: "Erica Jong",
      url: "",
    },
    {
      quote:
        "A woman is like a tea bag - you can't tell how strong she is until you put her in hot water.",
      author: "Eleanor Roosevelt",
      url: "",
    },
    {
      quote:
        "If you don’t like the road you’re walking, start paving another one.",
      author: "Dolly Parton",
      url: "",
    },
    {
      quote:
        "One of the secrets to staying young is to always do things you don’t know how to do, to keep learning.",
      author: "Ruth Reichl",
      url: "",
    },
    {
      quote:
        "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
      author: "Madeleine Albright",
      url: "",
    },
    {
      quote:
        "Step out of the history that is holding you back. Step into the new story you are willing to create.",
      author: "Oprah Winfrey",
      url: "",
    },
    {
      quote:
        "What you do makes a difference, and you have to decide what kind of difference you want to make.",
      author: "Jane Goodall",
      url: "",
    },
    {
      quote: "I choose to make the rest of my life the best of my life.",
      author: "Louise Hay",
      url: "",
    },
    {
      quote:
        "The question isn’t who is going to let me; it’s who is going to stop me.",
      author: "Ayn Rand",
      url: "",
    },
    {
      quote:
        "Take criticism seriously, but not personally. If there is truth or merit in the criticism, try to learn from it. Otherwise, let it roll right off you.",
      author: "Hillary Clinton",
      url: "",
    },
    {
      quote:
        "When we speak we are afraid our words will not be heard or welcomed. But when we are silent, we are still afraid. So it is better to speak.",
      author: "Audre Lorde",
      url: "",
    },
    {
      quote:
        "Learn from the mistakes of others. You can’t live long enough to make them all yourself.",
      author: "Eleanor Roosevelt",
      url: "",
    },
    {
      quote:
        "If you’re not making some notable mistakes along the way, you’re certainly not taking enough business and career chances.",
      author: "Sallie Krawcheck",
      url: "",
    },
    {
      quote:
        "Doubt is a killer. You just have to know who you are and what you stand for.",
      author: "Jennifer Lopez",
      url: "",
    },
    {
      quote: "I am not afraid of storms for I am learning how to sail my ship.",
      author: "Louisa May Alcott",
      url: "",
    },
    {
      quote:
        "When you feel copied, remember that people can only go where you have already been, they have no idea where you are going next.”",
      author: "Liz Lange",
      url: "",
    },
    {
      quote:
        "Hold your head and your standards high even as people or circumstances try to pull you down.",
      author: "Tory Johnson",
      url: "",
    },
    {
      quote:
        "Normal is not something to aspire to, it’s something to get away from.",
      author: "Jodie Foster",
      url: "",
    },
    {
      quote:
        "I learned a long time ago that there is something worse than missing the goal, and that’s not pulling the trigger.",
      author: "Mia Hamm",
      url: "",
    },
    {
      quote:
        "Owning our story can be hard but not nearly as difficult as spending our lives running from it.",
      author: "Brene Brown",
      url: "",
    },
    {
      quote:
        "I do not try to dance better than anyone else. I only try to dance better than myself.",
      author: "Arianna Huffington",
      url: "",
    },
    {
      quote: "I’m always perpetually out of my comfort zone.",
      author: "Tory Burch",
      url: "",
    },
    {
      quote: "If you can’t go straight ahead, you go around the corner.",
      author: "Cher",
      url: "",
    },
    {
      quote:
        "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.”",
      author: "Angelina Jolie",
      url: "",
    },
    {
      quote: "Everyone shines, given the right lighting.",
      author: "Susan Cain",
      url: "",
    },
    {
      quote:
        "When you embrace your difference, your DNA, your look or heritage or religion or your unusual name, that’s when you start to shine.",
      author: "Bethenny Frankel",
      url: "",
    },
    {
      quote:
        "You can’t be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.",
      author: "Tina Fey  ",
      url: "",
    },
    {
      quote:
        "If you just set out to be liked, you would be prepared to compromise on anything at any time, and you would achieve nothing.",
      author: "Margaret Thatcher",
      url: "",
    },
    {
      quote:
        "Don’t look at your feet to see if you are doing it right. Just dance.",
      author: "Anne Lamott",
      url: "",
    },
    {
      quote:
        "All careers go up and down like friendships, like marriages, like anything else, and you can’t bat a thousand all the time.",
      author: "Julie Andrews",
      url: "",
    },
    {
      quote:
        "We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.",
      author: "J.K. Rowling",
      url: "",
    },
    {
      quote: "Dying seems less sad than having lived too little.",
      author: "Gloria Steinem",
      url: "",
    },
    {
      quote: "Style is a way to say who you are without having to speak.",
      author: "Rachel Zoe",
      url: "",
    },
    {
      quote: "I need to listen well so that I hear what is not said.",
      author: "Thuli Madonsela",
      url: "",
    },
    {
      quote: "Style is a way to say who you are without having to speak.",
      author: "Rachel Zoe",
      url: "",
    },
    {
      quote:
        "It’s not the absence of fear, it’s overcoming it. Sometimes you’ve got to blast through and have faith.",
      author: "Emma Watson",
      url: "",
    },
  ];

  let index = Math.floor(Math.random() * 64);
  let quote = quotes[index].quote;
  let author = quotes[index].author;

  const [randomQuote, setQuote] = useState(quote); //wird trotz rerendering nicht mehr aktualisiert
  const [randomAuthor, setAuthor] = useState(author);

  function updateQuote() {
    index = Math.floor(Math.random() * 64); //bei setcount wird fertig durchlaufen und dann gererendert also die komponente
    quote = quotes[index].quote;
    author = quotes[index].author;
    setQuote(quote);
    setAuthor(author);
  }
  return (
    <>
      <div id="quote-box">
        <p id="text" class="text">
          {randomQuote}
        </p>
        <p id="author" class="text">
          {randomAuthor}
        </p>
        <a id="tweet-quote" href="twitter.com/intent/post">
          <SocialIcon
            style={{
              width: "20pt",
              height: "20pt",
              margin: "8pt",
            }}
            href="https://twitter.com/intent/post"
            url="https://twitter.com"
          />
        </a>
        <button id="new-quote" onClick={updateQuote}>
          New quote
        </button>
      </div>
    </>
  );
}
