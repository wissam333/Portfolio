<template>
  <div class="contact">
    <div class="container">
      <div class="row">
        <div class="eamil_form col-lg-6" data-aos="fade-right" data-aos-duration="2000">
          <h2 class="headline">Contact ME</h2>
          <form action="https://formsubmit.co/18aef7e8cffd038a8d44aa69bd4c869e" method="POST">
            <ul>
              <li class="half">
                <input type="text" name="name" placeholder="your name" required />
              </li>
              <li class="half">
                <input type="email" name="email" placeholder="Email Address" required />
              </li>
              <li>
                <input class="full" type="text" name="_subject" placeholder="subject" />
              </li>
              <li>
                <textarea class="full" type="text" name="message" rows="6" placeholder="type your message" required />
              </li>
              <input type="hidden" name="_autoresponse" value="Hey, this is an automatic reply message I will reply to your message
                         within 3 days at most. If there is no response, please call me 0987319112" />
              <input type="hidden" name="_next" value="https://wissam333.github.io/Portfolio/Thanks" />
              <li>
                <button class="send" type="submit">Send</button>
              </li>
            </ul>
          </form>
        </div>

        <div class="map col-lg-6" data-aos="fade-left" data-aos-duration="2000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d704825.1872944215!2d36.25349922760725!3d34.85240029379569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1523ce727918c63f%3A0xefbade7a3e749eb6!2z2LXYp9mB2YrYqtin2Iwg2LPZiNix2YrYpw!5e0!3m2!1sar!2sus!4v1659945553623!5m2!1sar!2sus"
            width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact",
};
</script>
<style lang="scss" scoped>
@import "../style/reset.scss";

.contact {
  overflow: hidden;
  position: relative;
  background-color: #141415;
  display: flow-root;
  font-size: 1.2rem;

  @media (min-width: 1400px) {
    height: 100vh;
  }

  .container {
    margin-top: 150px;
    margin-bottom: 50px;

    .eamil_form {
      margin-bottom: 100px;

      h2 {
        margin-bottom: 50px;
      }

      form {
        ul {
          li {
            margin-bottom: 10px;

            input,
            textarea {
              padding: 12px;
              color: #8d8d8d;
              border: 0;
              border-radius: 4px;
              color: #fff !important;
              background: #2b2b2b;
              border-bottom: 3px solid transparent;
              transition: all 0.3s ease-in-out;

              &:focus {
                border-bottom: 3px solid #696497;
              }

              &:focus-visible {
                outline: 0 !important;
              }
            }

            button {
              padding: 12px;
              color: #fff;
              background: transparent;
              border: 1px solid #8d8d8d;
              border-radius: 4px;
              width: 25%;
              float: right;
            }

            &.half {
              &:nth-child(1) {
                margin-right: 2%;
              }

              width: 49%;
              float: left;
              clear: none;

              input {
                width: 100%;
              }
            }

            & .full {
              width: 100%;
            }

            & .send {
              width: 35%;
              transition: all 0.2s ease-in-out;

              @media (max-width: 991px) {
                width: 100%;
              }

              &:hover {
                background-color: #69649c;
              }
            }
          }
        }
      }
    }

    .map {
      display: flex;
      justify-content: center;
      margin: auto;

      iframe {
        border: 11px solid #696497 !important;
        border-radius: 4px;
      }
    }
  }
}
</style>
