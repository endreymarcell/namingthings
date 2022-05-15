<main>
  <img class="profile" alt="Marcell Endrey" src="/img/profile.png" />
  <div>
    <p>Hey there!</p>
    <p>
      I am a frontend developer at <a href="https://wise.com">Wise</a>. I mostly work with TypeScript-React
      applications.
    </p>
    <p>
      I hold clean code in high regard, I have led teams of up to eight developers, and apart from coding I also enjoy
      presenting about software engineering and teaching others how to code.
    </p>
    <p>
      I do believe that culture eats strategy for breakfast and my preference is to work with a team in-office, rather
      than remotely.
    </p>
    <p>
      My fun piece of trivia is that I am a <a
        href="https://www.worldcubeassociation.org/persons/2007ENDR01?tab=championship-podiums"
        >five-time world champion</a
      > in solving the Rubik's Cube blindfolded.
    </p>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  p:first-of-type {
    margin-top: 0;
  }

  img.profile {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    align-self: center;
  }

  @media screen and (min-width: 600px) {
    main {
      flex-direction: row;
    }

    img.profile {
      order: 1;
      align-self: initial;
    }
  }
</style>
