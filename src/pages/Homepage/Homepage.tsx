import Button from "../../components/Button"
import PageHeader from "../../components/PageHeader"
import "./Homepage.scss"

const Homepage = () => {
  return (
    <section id="homepage">
      <PageHeader text="Home" />
      <div className="summary">
        <p>
          <em>
            When continents were yet joined, one of the eight tribes of man
            waged war on the other tribes using dark powers.
          </em>
        </p>
        <p>
          <em>
            To protect their world, the ancient animal spirits gave the rest of
            humanity the power to shift into animal warriors and win the war,
            driving the dark tribe to banishment outside the Vale.
          </em>
        </p>
        <p>
          <em>
            But when catastrophies begin again in the Vale, the tribes start to
            suspect the return of the banished tribe... and the coming of
            another war for the Vale.
          </em>
        </p>
        <p>
          <em>
            Join the heroes of the Vale as they save humanity's broken society,
            defy destiny with half-hearted hopes, and bridge the gaps of
            history, all while fighting for trust in a world of lies.
          </em>
        </p>
      </div>
      <a href="https://drive.google.com/file/d/1_ayC9fwnRcBm0mdY68iXERF9djAYhbJX/view?usp=sharing">
        <Button>Download the first three chapters for free</Button>
      </a>
    </section>
  )
}

export default Homepage
