import { Fragment } from "react";
import { Cta, Figure, ProsCons } from "./_parts";

/**
 * Body for "Tips to Sell Your Home in the Fall".
 *
 * Rendered as DIRECT children of `.ar-narrow` — blog.css styles body copy with
 * `.ar-body .ar-narrow > p`, so wrapping any of this in an extra element
 * silently drops the type styling. That is also why the CTAs and the
 * pros-and-cons panel are siblings rather than sitting inside a section.
 *
 * Headings follow the supplied document: its section headings are h2 and the
 * sub-steps h3. blog.css styles exactly those two levels, so nothing here
 * needs a new rule. The three CTA headings are deliberately NOT headings —
 * see Cta in ./_parts.
 *
 * The two in-article images are the ones the copy marked by name: "How to
 * Prepare Your Home for a Fall Sale" under that section, and "Home Showing
 * Preparation" under the pre-showing checklist.
 *
 * The copy attributes several recommendations to Zillow. Those stay as plain
 * text: an outbound link would send a seller who is reading a listing agent's
 * article straight to a competing portal.
 */

/**
 * The FAQ block, kept as data because it is rendered twice: as visible copy
 * here, and as FAQPage structured data in app/blog/[slug]/page.tsx. Google
 * requires the two to match — schema whose answers are not on the page is a
 * violation, not just a wasted rich result — so they read from one array.
 */
export const FAQS: { q: string; a: string }[] = [
  {
    q: "Is fall a bad time to sell a house?",
    a: "No. Fall can still be a good time to sell. Your local inventory, buyer demand, home condition, pricing, and personal timeline matter more than the season alone.",
  },
  {
    q: "What should I do before selling my house in the fall?",
    a: "Start with repairs, deep cleaning, decluttering, curb appeal, lighting, professional photos, and a market-based pricing plan.",
  },
  {
    q: "How do I make my house look good for fall showings?",
    a: "Keep it clean, bright, comfortable, and simple. Add a few neutral seasonal touches without filling the home with holiday decorations.",
  },
  {
    q: "Should I decorate my house for fall when selling?",
    a: "A small amount of seasonal decor can make a home feel welcoming. Keep it simple so buyers can still picture the home as a year-round space.",
  },
  {
    q: "What repairs should I make before selling in the fall?",
    a: "Start with visible problems and issues that may affect comfort or inspection results, such as HVAC problems, drafts, water damage, damaged caulk, and needed exterior maintenance.",
  },
  {
    q: "Should I sell my house before Thanksgiving?",
    a: "There is no single answer for every seller. Consider your local market, your home's readiness, buyer demand, and your own moving timeline before choosing when to list.",
  },
  {
    q: "How can I sell my house faster in the fall?",
    a: "There is no guaranteed timeline, but you can make the process easier by pricing your home based on current market data, presenting it well, using strong photography, and making showings convenient for qualified buyers.",
  },
];

const PROS: [string, string][] = [
  ["Less competition:", "There may be fewer homes for sale than during the spring and summer."],
  [
    "Motivated buyers:",
    "Some fall buyers may have a specific reason to move before winter or the end of the year.",
  ],
  [
    "Strong curb appeal:",
    "Fall colors, clean landscaping, and a welcoming entry can make a home feel inviting.",
  ],
  [
    "Cozy presentation:",
    "Features such as fireplaces, good heating, and comfortable living spaces can stand out.",
  ],
  [
    "Potentially quicker decisions:",
    "Buyers with a firm moving timeline may be ready to act when they find the right home.",
  ],
  [
    "Good time to highlight efficiency:",
    "Updated windows, insulation, HVAC, and other features can be useful selling points.",
  ],
];

const CONS: [string, string][] = [
  ["Fewer buyers:", "Buyer activity may slow compared with the peak spring and summer seasons."],
  [
    "Shorter days:",
    "Less daylight can make evening showings and outdoor areas harder to showcase.",
  ],
  [
    "More outdoor maintenance:",
    "Leaves, rain, and changing weather can require extra yard and exterior upkeep.",
  ],
  [
    "Holiday schedules:",
    "Thanksgiving and other seasonal plans can make some buyers less available.",
  ],
  [
    "Weather can affect showings:",
    "Rain, cold weather, or storms may reduce buyer visits.",
  ],
  [
    "Home may need seasonal preparation:",
    "Sellers may need to clean gutters, rake leaves, check heating, and improve lighting.",
  ],
];

export default function TipsToSellYourHomeInTheFall() {
  return (
    <>
      <p>
        Yes, you can sell your home successfully in the fall. The key is to prepare for shorter
        days, cooler weather, changing curb appeal, and buyers who may have less time for
        showings.
      </p>
      <p>
        Start with a strong price, clean presentation, good photos, and a simple plan for
        showings.
      </p>

      <h2>Is Fall a Good Time to Sell a House?</h2>
      <p>
        Fall can still be a good time to sell, but the market can feel different from spring and
        summer. Inventory is often lower, while buyers who are still looking may have a clear
        reason to move. Local market conditions matter more than the season alone.
      </p>
      <p>Before you list, consider:</p>
      <ul>
        <li>Current home prices in your area</li>
        <li>Recent comparable sales</li>
        <li>The number of competing homes</li>
        <li>How long similar homes are taking to sell</li>
        <li>Your ideal moving date</li>
        <li>Weather and holiday schedules</li>
      </ul>
      <p>Your local market should guide your pricing and selling plan.</p>

      <h2>Pros vs. Cons of Selling a Home in the Fall</h2>
      <ProsCons pros={PROS} cons={CONS} />

      <Cta title="Ready to Make a Plan for Selling This Fall?" label="Book a Free Consultation">
        Every home and local market is different. We can help you review your home&rsquo;s value,
        current market conditions, and the best strategy for your sale.
      </Cta>

      <h2>How to Prepare Your Home for a Fall Sale</h2>
      <p>
        Before you worry about fall decorations, make sure your home is clean, maintained, and
        ready for buyers.
      </p>

      <h3>Fix Small Problems Buyers Will Notice</h3>
      <p>Cooler weather can make some home problems easier to notice. Walk through your home and check:</p>
      <ul>
        <li>Drafts around doors and windows</li>
        <li>Leaky faucets</li>
        <li>Loose handles</li>
        <li>Peeling paint</li>
        <li>Damaged caulk</li>
        <li>Burned-out light bulbs</li>
        <li>HVAC problems</li>
        <li>Visible water damage</li>
        <li>Dirty air filters</li>
      </ul>
      <p>
        You do not need to remodel the entire house. Focus on repairs that improve the condition
        and presentation of your home.
      </p>
      <Figure
        src="/images/blog/how-to-prepare-your-home-for-a-fall-sale.webp"
        alt="A home prepared for a fall sale — raked lawn, clean porch with a simple wreath and seasonal plants, and warm light in the windows"
        width={1513}
        height={1039}
      />

      <h3>Deep Clean Before Listing</h3>
      <p>
        A clean home helps buyers focus on the space instead of the work they may need to do.
      </p>
      <p>Pay special attention to:</p>
      <ul>
        <li>Windows and screens</li>
        <li>Floors and carpets</li>
        <li>Kitchens and bathrooms</li>
        <li>Baseboards</li>
        <li>Light fixtures</li>
        <li>Closets</li>
        <li>Storage areas</li>
        <li>Cobwebs and dust</li>
      </ul>
      <p>
        Zillow also recommends addressing indoor maintenance issues that can become more
        noticeable during cooler months.
      </p>

      <h2>Make Your Fall Curb Appeal Work for You</h2>
      <p>
        Your yard may look different in fall, but your home&rsquo;s exterior still creates the
        first impression.
      </p>

      <h3>Keep the Yard Clean</h3>
      <p>Before each showing:</p>
      <ul>
        <li>Rake leaves</li>
        <li>Mow the lawn when needed</li>
        <li>Trim overgrown branches</li>
        <li>Clear walkways</li>
        <li>Remove dead plants</li>
        <li>Clean the front door</li>
        <li>Empty outdoor trash cans</li>
        <li>Clean gutters</li>
        <li>Add a fresh doormat</li>
      </ul>
      <p>
        Keep the exterior simple and well cared for. Buyers should notice the house, not a pile
        of leaves or outdoor maintenance.
      </p>

      <h3>Add Simple Seasonal Touches</h3>
      <p>A few fall details can make the home feel welcoming.</p>
      <p>Consider:</p>
      <ul>
        <li>A simple wreath</li>
        <li>Seasonal flowers</li>
        <li>A clean porch</li>
        <li>A few neutral fall accents</li>
      </ul>
      <p>
        Avoid covering the home in Halloween or Thanksgiving decorations. Buyers need to picture
        the property as their future home, not as a holiday display. Zillow recommends keeping
        seasonal decor modest.
      </p>

      <h2>Brighten Your Home for Shorter Fall Days</h2>
      <p>Fall brings shorter days, so natural light becomes even more important.</p>

      <h3>Let in More Natural Light</h3>
      <p>Before a showing:</p>
      <ul>
        <li>Open blinds and curtains</li>
        <li>Clean windows</li>
        <li>Remove items blocking windows</li>
        <li>Turn on lights in darker rooms</li>
        <li>Add lamps where needed</li>
      </ul>
      <p>A bright home can feel more open and welcoming during a showing.</p>

      <h3>Check Your Evening Lighting</h3>
      <p>If buyers may visit after work, walk through your home after sunset.</p>
      <p>Turn on:</p>
      <ul>
        <li>Entry lights</li>
        <li>Porch lights</li>
        <li>Hallway lights</li>
        <li>Kitchen lights</li>
        <li>Living room lamps</li>
        <li>Exterior lights</li>
      </ul>
      <p>Make sure every important area feels safe and easy to see.</p>

      <h3>Keep Your Home Comfortable</h3>
      <p>
        Fall weather can change quickly. A home that feels too cold or too warm can distract
        buyers during a showing.
      </p>
      <p>
        Set the thermostat to a comfortable temperature based on the weather. Also make sure your
        heating system works properly before colder days arrive.
      </p>
      <p>
        If your home has a fireplace, make sure it is clean and safe to use. Only use it during
        showings when appropriate and safe.
      </p>

      <h2>Stage Your Home for Fall Without Overdoing It</h2>
      <p>
        Fall staging should make your home feel comfortable without making it look seasonal for
        only a few weeks.
      </p>

      <h3>Use Warm, Simple Details</h3>
      <p>You can add:</p>
      <ul>
        <li>Neutral blankets</li>
        <li>Simple pillows</li>
        <li>Warm lighting</li>
        <li>Clean rugs</li>
        <li>Fresh flowers</li>
        <li>A few natural fall accents</li>
      </ul>
      <p>
        Keep colors and decorations simple. The goal is to help buyers imagine living in the home
        all year.
      </p>

      <h3>Keep Rooms Easy to Understand</h3>
      <p>Remove furniture or decorations that make rooms feel crowded.</p>
      <p>Buyers should be able to see:</p>
      <ul>
        <li>How large each room is</li>
        <li>How furniture fits</li>
        <li>Where they can walk</li>
        <li>How the space could be used</li>
      </ul>

      <h3>Highlight Features That Matter in Fall</h3>
      <p>
        Fall is a good time to show features that become more useful as the weather gets cooler.
      </p>
      <p>Depending on your home, highlight:</p>
      <ul>
        <li>A fireplace</li>
        <li>Energy-efficient windows</li>
        <li>Updated insulation</li>
        <li>A newer HVAC system</li>
        <li>A covered patio</li>
        <li>An enclosed porch</li>
        <li>A heated garage</li>
        <li>A finished basement</li>
        <li>Good storage</li>
        <li>A comfortable home office</li>
      </ul>
      <p>
        If you have records for recent upgrades or maintenance, keep them organized so your agent
        can share useful information with buyers.
      </p>

      <h2>Take Listing Photos Before Fall Light Fades</h2>
      <p>
        Good photos matter because many buyers will see your home online before they schedule a
        showing.
      </p>
      <p>Try to photograph the home while:</p>
      <ul>
        <li>Outdoor areas still look fresh</li>
        <li>Natural light is strong</li>
        <li>The yard is clean</li>
        <li>Trees and landscaping look attractive</li>
      </ul>
      <p>
        Use professional real estate photography when possible. Zillow recommends taking photos
        early in the fall because natural light and outdoor spaces can become less favorable as
        the season progresses.
      </p>
      <p>If your home has a strong seasonal exterior, make sure the photos show it at its best.</p>

      <h2>Price Your Home for the Current Market</h2>
      <p>
        Do not choose your asking price based only on what you paid for the house or what you
        hope to make.
      </p>
      <p>A good pricing plan should consider:</p>
      <ul>
        <li>Recent comparable sales</li>
        <li>Current competition</li>
        <li>Location</li>
        <li>Home condition</li>
        <li>Features and upgrades</li>
        <li>Buyer demand</li>
        <li>How quickly you want to sell</li>
      </ul>
      <p>
        Fall pricing should reflect your local market, not a simple &ldquo;fall discount.&rdquo;
        Zillow recommends using comparable sales and local market knowledge when setting the list
        price.
      </p>

      <Cta title="Need Help Pricing Your Home?" label="Get a Selling Strategy">
        A strong sale starts with the right pricing strategy. We review recent sales, current
        competition, your home&rsquo;s condition, and local market trends to help you set a price
        based on real market data.
      </Cta>

      <h2>Make Showings Easy for Fall Buyers</h2>
      <p>
        Fall schedules can become busy with work, school, holidays, and changing daylight hours.
      </p>
      <p>Try to be flexible when possible.</p>

      <h3>Before Each Showing</h3>
      <p>Use this quick checklist:</p>
      <ul>
        <li>Turn on lights</li>
        <li>Open blinds</li>
        <li>Set a comfortable temperature</li>
        <li>Clean the kitchen</li>
        <li>Clean the bathrooms</li>
        <li>Put away clutter</li>
        <li>Remove pet items</li>
        <li>Empty trash</li>
        <li>Secure valuables</li>
        <li>Tidy the entry</li>
        <li>Clear walkways</li>
      </ul>
      <p>A buyer should be able to enter, feel comfortable, and focus on the home.</p>
      <Figure
        src="/images/blog/home-showing-preparation.webp"
        alt="A living room being prepared for a showing — blinds opened, lamps switched on, cushions straightened and surfaces cleared"
        width={1513}
        height={1039}
      />

      <h2>What Should You Avoid When Selling in the Fall?</h2>
      <p>
        Some sellers spend too much time or money on changes that do not address the main selling
        problems.
      </p>
      <p>Avoid:</p>
      <ul>
        <li>Overdecorating for fall</li>
        <li>Using strong seasonal scents</li>
        <li>Ignoring basic repairs</li>
        <li>Letting leaves pile up</li>
        <li>Leaving outdoor areas messy</li>
        <li>Keeping rooms too dark</li>
        <li>Making major upgrades without a clear reason</li>
        <li>Pricing based only on last season&rsquo;s market</li>
        <li>Making showings difficult to schedule</li>
      </ul>
      <p>
        Focus your time and budget on improvements that help buyers see the home&rsquo;s
        condition, value, and best features.
      </p>

      <h2>Should You Sell Before the Holidays?</h2>
      <p>
        If you are ready to sell, waiting for spring is not always necessary. Your decision should
        depend on your goals, local market, home condition, and timing.
      </p>
      <p>
        Selling earlier in the fall can also give you more time before winter weather and holiday
        schedules become bigger factors.
      </p>
      <p>Ask yourself:</p>
      <ul>
        <li>Do I need to move soon?</li>
        <li>Is my home ready to list?</li>
        <li>What homes will I compete with?</li>
        <li>What does the local market look like?</li>
        <li>Can I keep my home ready for showings?</li>
        <li>What price makes sense based on current sales?</li>
      </ul>

      <h2>A Simple Fall Home-Selling Checklist</h2>
      <p>Before your home goes live, make sure you have:</p>
      <ul>
        <li>Completed important repairs</li>
        <li>Deep cleaned the home</li>
        <li>Decluttered each room</li>
        <li>Cleaned windows</li>
        <li>Checked the HVAC system</li>
        <li>Cleaned gutters and walkways</li>
        <li>Raked leaves</li>
        <li>Improved the entry and porch</li>
        <li>Added simple seasonal touches</li>
        <li>Checked interior and exterior lighting</li>
        <li>Taken professional listing photos</li>
        <li>Reviewed recent comparable sales</li>
        <li>Set a market-based asking price</li>
        <li>Created a showing plan</li>
      </ul>

      <Cta title="Ready to Sell Your Home This Fall?" label="Book a Strategy Call">
        A strong fall sale starts with the right plan. From market research and pricing to
        marketing, negotiations, and closing, each step should work toward your selling goals.
      </Cta>

      <h2>Frequently Asked Questions</h2>
      {/* Fragment, not a wrapper div: `.ar-body .ar-narrow > p` is a direct-child
          selector, so a wrapper would strip the answers of their body styling. */}
      {FAQS.map((item) => (
        <Fragment key={item.q}>
          <h3>{item.q}</h3>
          <p>{item.a}</p>
        </Fragment>
      ))}
    </>
  );
}
