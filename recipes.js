/* Cookbook — recipe data. Copied from the "Instant Pot Fall & Winter Recipes" page. */

const CATS = {
  soup:   {label:"Soups"},
  sausage:{label:"Italian sausage"},
  stew:   {label:"Stews & bowls"},
  curry:  {label:"Curries"},
  noodle: {label:"Noodle soups"},
  salad:  {label:"Roasted salads"}
};
const ORDER = ["soup","sausage","stew","curry","noodle","salad"];

const BASICS = [
  ["Deglaze after sautéing.","Add a splash of broth and scrape up every browned bit before sealing. This prevents the Burn notice."],
  ["Layer thick things on top.","Tomatoes, tomato paste, and curry sauces go in last and stay unstirred until after cooking."],
  ["Add dairy, coconut milk, miso, roux, and greens after.","Stir them in on Sauté or with the heat off so they don't curdle or scorch."],
  ["NR and QR.","NR (natural release) means letting the pressure drop on its own, best for meat and beans. QR (quick release) means opening the valve, best for vegetables."],
  ["Cook noodles and pasta separately.","Under pressure they turn gummy and soak up the broth in leftovers."],
  ["Adjust for altitude.","These times are for sea level. Above 2,000 ft, add about 5% for every 1,000 ft. In Denver (about 5,300 ft) that's roughly 15% more, which matters most for meat, beans, and lentils."]
];

const R = [
/* ---------- SOUPS ---------- */
{id:"caldo-verde",cat:"soup",name:"Caldo verde",time:"45 min",protein:"Chouriço",freeze:"Yes",
 blurb:"Portuguese potato-and-greens soup with smoky chouriço.",
 p:"High 8 · NR 5",
 ing:["1 tbsp olive oil, plus more to finish","8 oz Portuguese chouriço or linguiça, sliced (kielbasa in a pinch)","1 onion, diced","4 garlic cloves, minced","2 lb Yukon Gold potatoes, peeled and chunked","6 cups chicken broth","1 tsp salt","1 bunch collard greens or lacinato kale, stems removed, sliced very thin"],
 steps:["Sauté the chouriço 3–4 min until browned; set aside.","Sauté the onion 4 min, add garlic for 30 sec, then deglaze with a splash of broth.","Add potatoes, the rest of the broth, and salt. High pressure 8 min, natural release 5 min, then quick release.","Blend with an immersion blender until mostly smooth.","On Sauté, stir in the greens and chouriço and simmer 3–5 min.","Finish each bowl with a drizzle of good olive oil."],
 tip:"Stack the leaves, roll them like a cigar, and slice into thin ribbons for the classic texture."},

{id:"canja",cat:"soup",name:"Canja de galinha",time:"50 min",protein:"Chicken",freeze:"Best fresh",
 blurb:"Portuguese chicken and rice soup with lemon and mint.",
 p:"High 12 · NR 10",
 ing:["2 lb bone-in, skinless chicken thighs","1 onion, diced","2 carrots, diced","1 bay leaf","8 cups chicken broth","1 tsp salt","½ cup short-grain rice (Arborio works)","1 lemon and a handful of fresh mint"],
 steps:["Add chicken, onion, carrots, bay leaf, broth, and salt. High pressure 12 min, natural release 10 min.","Lift out the chicken, shred it, and discard the bones and bay leaf.","On Sauté, add the rice and simmer 12–15 min until tender.","Return the chicken, then finish with lemon juice and torn mint."],
 tip:"The rice keeps drinking broth, so add a splash more when reheating."},

{id:"lentil-sweet-potato",cat:"soup",name:"Red lentil & sweet potato soup",time:"35 min",protein:"Lentils",freeze:"Yes",
 blurb:"Vegetarian and warmly spiced, finished with lemon and a cool spoonful of skyr.",
 p:"High 8 · NR 10",
 ing:["1 tbsp olive oil","1 onion, diced","3 garlic cloves and 1 tbsp ginger, minced","2 tsp cumin, 1 tsp smoked paprika, ½ tsp turmeric","1½ cups red lentils, rinsed","1 large sweet potato (about 1 lb), cubed","6 cups vegetable broth","1 can (14 oz) diced tomatoes","1 lemon, a few handfuls of spinach, and plain skyr or yogurt"],
 steps:["Sauté onion 4 min, then garlic, ginger, and spices for 1 min.","Deglaze with 1 cup broth, then add lentils, sweet potato, and the remaining broth.","Pour tomatoes on top and don't stir. High pressure 8 min, natural release 10 min.","Blend partway, leaving some texture. Stir in spinach until wilted.","Finish with lemon juice and a spoonful of skyr or yogurt."]},

{id:"wild-rice",cat:"soup",name:"Chicken & wild rice soup",time:"1 hr",protein:"Chicken",freeze:"Yes",
 blurb:"Hearty and earthy, with mushrooms and a creamy option.",
 p:"High 28 · NR 15",
 ing:["1 tbsp butter","1 onion, 2 carrots, and 2 celery stalks, diced","8 oz cremini mushrooms, sliced","3 garlic cloves, minced","1 tsp dried thyme and 1 bay leaf","1½ lb boneless chicken thighs","1 cup wild rice, rinsed (true wild rice, not a blend)","7 cups chicken broth","Optional: ½ cup milk whisked with 2 tbsp flour","Lemon and parsley to serve"],
 steps:["Sauté the vegetables and mushrooms 5 min, then garlic and thyme for 30 sec.","Deglaze, then add chicken, rice, broth, and bay leaf. High pressure 28 min, natural release 15 min.","Shred the chicken in the pot.","For a creamier soup, stir in the milk-flour mix on Sauté and simmer 3 min.","Finish with lemon juice and parsley."]},

{id:"tortilla-soup",cat:"soup",name:"Chicken tortilla soup",time:"40 min",protein:"Chicken + black beans",freeze:"Yes",
 blurb:"Smoky, brothy, and all about the toppings.",
 p:"High 10 · NR 10",
 ing:["1 tbsp olive oil","1 onion and 1 jalapeño, diced","3 garlic cloves, minced","2 tsp cumin, 2 tsp chili powder, 1 tsp oregano","1½ lb boneless chicken breasts or thighs","1 can (15 oz) black beans, drained","1 can (4 oz) diced green chiles","5 cups chicken broth","1 can (14.5 oz) fire-roasted diced tomatoes","1 cup frozen corn","Lime, cilantro, avocado, tortilla strips, and cotija to serve"],
 steps:["Sauté onion and jalapeño 4 min, then garlic and spices for 1 min.","Deglaze, then add chicken, beans, chiles, and broth.","Pour tomatoes on top and don't stir. High pressure 10 min, natural release 10 min.","Shred the chicken. On Sauté, stir in the corn for 2 min.","Finish with lime and pile on the toppings."]},

{id:"lemon-orzo",cat:"soup",name:"Lemony chicken orzo soup",time:"40 min",protein:"Chicken",freeze:"Broth only",
 blurb:"Greek-ish and bright, with spinach, dill, and plenty of lemon.",
 p:"High 8 · NR 10",
 ing:["1 tbsp olive oil","1 onion, 2 carrots, and 2 celery stalks, diced","3 garlic cloves, minced","1 tsp dried oregano","1½ lb boneless chicken thighs","7 cups chicken broth","1 cup orzo","2 cups baby spinach","1–2 lemons, zested and juiced","Fresh dill or parsley, and crumbled feta (optional)"],
 steps:["Sauté the vegetables 5 min, then garlic and oregano for 30 sec.","Deglaze, then add chicken and broth. High pressure 8 min, natural release 10 min.","Lift out and shred the chicken.","On Sauté, bring the broth to a boil, add orzo, and simmer 7–8 min, stirring often.","Stir in spinach, chicken, lemon zest and juice. Finish with dill and feta."],
 tip:"Orzo keeps absorbing broth. If you plan on leftovers, cook it separately and add it to each bowl."},

{id:"butternut-bean",cat:"soup",name:"Butternut squash & white bean soup",time:"40 min",protein:"White beans",freeze:"Yes",
 blurb:"Velvety and sweet-savory, with beans blended in for protein.",
 p:"High 8 · NR 10",
 ing:["1 tbsp butter or olive oil","1 onion, diced","3 garlic cloves, minced","1 tsp dried sage (or 6 fresh leaves) and a pinch of nutmeg","1 butternut squash (about 2½ lb), peeled and cubed","1 apple, cored and chopped","1 can (15 oz) cannellini beans, drained","4 cups vegetable or chicken broth","1 tsp salt","Skyr or yogurt, toasted pepitas, and apple cider vinegar to serve"],
 steps:["Sauté onion 4 min, then garlic, sage, and nutmeg for 30 sec.","Deglaze, then add squash, apple, beans, broth, and salt. High pressure 8 min, natural release 10 min.","Blend until completely smooth.","Finish with a splash of vinegar, a swirl of skyr, and pepitas."]},

{id:"split-pea",cat:"soup",name:"Split pea soup with ham",time:"1 hr",protein:"Ham + split peas",freeze:"Yes",
 blurb:"A thick, smoky, deeply wintry classic.",
 p:"High 15 · NR 20",
 ing:["1 tbsp olive oil","1 onion, 2 carrots, and 2 celery stalks, diced","3 garlic cloves, minced","1 lb dried green split peas, rinsed","1 smoked ham hock, or 2 cups diced ham","7 cups water or low-sodium broth","1 bay leaf and 1 tsp dried thyme","Apple cider vinegar and black pepper to finish"],
 steps:["Sauté the vegetables 5 min, then garlic for 30 sec.","Deglaze, then add split peas, ham, water, bay leaf, and thyme.","High pressure 15 min, natural release 20 min (split peas foam, so let it release fully).","Pull the meat off the ham hock and return it. Stir well; the soup thickens as it sits.","Season with pepper and a splash of vinegar. Salt only at the end, since ham is salty."]},

{id:"zuppa-toscana",cat:"sausage",name:"Lighter zuppa toscana",time:"35 min",protein:"Italian sausage",freeze:"Best fresh",
 blurb:"Sausage, potato, and kale in a peppery broth. Creamy from mashed potato alone, or with a splash of half-and-half.",
 p:"High 5 · QR",
 ing:["1 lb Italian sausage (pork, turkey, or chicken), casings removed","1 onion, diced","4 garlic cloves, minced","½ tsp red pepper flakes","6 cups chicken broth, or 6 cups water + about 4½ tsp Knorr chicken powder","2 lb Yukon Gold or russet potatoes, in ½-inch cubes","6–7 oz chopped kale (about ⅔ of a 10 oz bag, thick stems picked out)","½ cup half-and-half or evaporated milk (optional)","Black pepper, plus Parmesan if you like"],
 steps:["Brown the sausage 5–6 min, breaking it up. Add onion for 3 min, then garlic and pepper flakes for 30 sec.","Deglaze with a splash of broth, then add the potatoes and the rest of the broth.","High pressure 5 min (6 min in Denver), quick release.","On Sauté, stir in the kale and simmer 2–3 min until tender (4–5 min for curly kale).","Mash a handful of potato cubes against the side of the pot to thicken the broth. Turn the pot off and stir in the half-and-half if using.","Taste for salt, then finish with lots of black pepper and Parmesan if you like."],
 tip:"Leftovers thicken as the potatoes soak up the broth, so add a splash of water when reheating."},

{id:"tomato-basil",cat:"soup",name:"Tomato basil & white bean soup",time:"35 min",protein:"White beans",freeze:"Yes",
 blurb:"Silky tomato soup with beans blended in for body and protein.",
 p:"High 10 · NR 10",
 ing:["2 tbsp olive oil","1 onion and 1 carrot, diced","4 garlic cloves, minced","1 tsp dried oregano and a pinch of red pepper flakes","2 cups vegetable or chicken broth","1 can (15 oz) cannellini beans, drained","1 tsp salt and 1 tsp sugar or honey","2 cans (28 oz each) whole San Marzano tomatoes","A big handful of fresh basil","¼ cup grated Parmesan, plus a splash of balsamic to finish"],
 steps:["Sauté onion and carrot 5 min, then garlic, oregano, and pepper flakes for 30 sec.","Deglaze with the broth and add the beans, salt, and sugar.","Pour the tomatoes on top and don't stir. High pressure 10 min, natural release 10 min.","Add the basil and blend until smooth.","Stir in the Parmesan and finish with a few drops of balsamic."],
 tip:"Grilled cheese on sourdough is the obvious partner. A Parmesan rind dropped in before cooking adds depth."},

{id:"tom-kha",cat:"soup",name:"Tom kha gai",time:"30 min",protein:"Chicken",freeze:"Best fresh",
 blurb:"Thai coconut chicken soup: sour, gingery, and fragrant with lemongrass.",
 p:"High 6 · NR 5",
 ing:["1½ lb boneless chicken thighs, thinly sliced","2 stalks lemongrass, cut in 3-inch pieces and smashed","A 2-inch piece of galangal or ginger, thinly sliced","4 makrut lime leaves, torn (optional)","2–3 Thai chiles, smashed (optional)","4 cups chicken broth","8 oz oyster or cremini mushrooms, sliced","1 can (13.5 oz) coconut milk","3 tbsp fish sauce and 1 tsp sugar","Juice of 2 limes, cilantro, and chili oil to serve"],
 steps:["Add chicken, lemongrass, galangal, lime leaves, chiles, and broth.","High pressure 6 min, natural release 5 min.","On Sauté, add the mushrooms and simmer 3 min.","Stir in the coconut milk, fish sauce, and sugar and heat through without boiling.","Turn the pot off, add the lime juice, and taste for balance. Fish out the lemongrass and galangal before serving."]},

{id:"minestrone",cat:"soup",name:"Minestrone",time:"30 min",protein:"Beans",freeze:"Yes (no pasta)",
 blurb:"A vegetable-packed Italian soup finished with pesto.",
 p:"High 4 · QR",
 ing:["2 tbsp olive oil","1 onion, 2 carrots, and 2 celery stalks, diced","4 garlic cloves, minced","1 tbsp tomato paste and 2 tsp Italian seasoning","6 cups vegetable or chicken broth","1 can (15 oz) kidney or cannellini beans, drained","1 zucchini, diced, and 1 cup green beans in 1-inch pieces","1 Parmesan rind (optional)","1 can (14.5 oz) diced tomatoes","3 cups baby spinach or chopped kale","1 cup ditalini or other small pasta","Pesto and grated Parmesan to serve"],
 steps:["Sauté onion, carrots, and celery 5 min, then garlic, tomato paste, and seasoning for 1 min.","Deglaze with a cup of broth, then add the rest of the broth, beans, zucchini, green beans, and the Parmesan rind.","Pour the tomatoes on top and don't stir. High pressure 4 min, quick release.","On Sauté, stir in the greens until wilted.","Cook the pasta separately, add a scoop to each bowl, and ladle the soup over. Top with pesto and Parmesan."]},

{id:"harira",cat:"soup",name:"Harira",time:"45 min",protein:"Lentils + chickpeas",freeze:"Yes",
 blurb:"Moroccan lentil, chickpea, and tomato soup, warm with cinnamon and bright with lemon.",
 p:"High 12 · NR 10",
 ing:["2 tbsp olive oil","1 onion and 2 celery stalks, diced","4 garlic cloves and 1 tbsp ginger, minced","1 tsp each turmeric, cumin, and smoked paprika, plus ½ tsp cinnamon","2 tbsp tomato paste","7 cups vegetable or chicken broth","1 cup brown or green lentils, rinsed","1 can (15 oz) chickpeas, drained","Optional: 1 lb boneless chicken thighs for extra protein","1 can (14.5 oz) crushed tomatoes","1 lemon, plus a big handful each of cilantro and parsley"],
 steps:["Sauté onion and celery 4 min, then garlic, ginger, spices, and tomato paste for 1 min.","Deglaze with a cup of broth, then add the rest of the broth, lentils, chickpeas, and chicken if using.","Pour the tomatoes on top and don't stir. High pressure 12 min, natural release 10 min.","Shred the chicken if using, then stir in the chopped herbs.","Finish each bowl with a generous squeeze of lemon."]},

{id:"sopa-de-grao",cat:"soup",name:"Sopa de grão",time:"35 min",protein:"Chickpeas",freeze:"Yes",
 blurb:"Portuguese chickpea and spinach soup, half blended so it's creamy without cream.",
 p:"High 8 · NR 5",
 ing:["2 tbsp olive oil, plus more to finish","4 oz chouriço, sliced (optional)","1 onion, diced","3 garlic cloves, minced","2 carrots, chopped","1 medium potato, peeled and cubed","2 cans (15 oz each) chickpeas, drained","6 cups chicken or vegetable broth","1 tsp salt and ½ tsp smoked paprika","5 oz baby spinach"],
 steps:["Sauté the chouriço 3 min if using; set aside. Sauté the onion 4 min, then garlic for 30 sec.","Deglaze, then add carrots, potato, chickpeas, broth, salt, and paprika. High pressure 8 min, natural release 5 min.","Blend about half the soup, leaving plenty of whole chickpeas.","On Sauté, stir in the spinach and chouriço until the spinach wilts.","Finish with a drizzle of good olive oil."]},

{id:"stuffed-pepper",cat:"soup",name:"Stuffed pepper soup",time:"35 min",protein:"Beef",freeze:"Yes",
 blurb:"Everything you love about stuffed peppers, in a bowl.",
 p:"High 5 · NR 5",
 ing:["1 tbsp olive oil","1 lb lean ground beef or turkey","1 onion, diced","3 bell peppers (mixed colors), diced","3 garlic cloves, minced","2 tsp Italian seasoning and 1 tsp smoked paprika","4 cups beef broth","1 can (14.5 oz) diced tomatoes and 1 can (15 oz) tomato sauce","2 cups cooked rice (white, brown, or cauliflower rice)","Parsley and shredded mozzarella or Parmesan to serve"],
 steps:["Brown the beef 5–6 min. Add onion and peppers for 3 min, then garlic and spices for 30 sec.","Deglaze with a cup of broth, then add the rest of the broth.","Pour the tomatoes and tomato sauce on top and don't stir. High pressure 5 min, natural release 5 min.","Stir in the cooked rice and let it warm through.","Top with parsley and a little cheese."],
 tip:"If you plan on leftovers, keep the rice separate so it doesn't swell and soak up the broth."},

{id:"broccoli-cheddar",cat:"soup",name:"Broccoli cheddar soup",time:"30 min",protein:"Cheddar + white beans",freeze:"Best fresh",
 blurb:"Cozy and cheesy, thickened with potato and white beans instead of flour.",
 p:"High 3 · QR",
 ing:["2 tbsp butter","1 onion and 2 carrots, diced","3 garlic cloves, minced","4 cups chicken or vegetable broth","1½ lb broccoli, florets and peeled stems chopped","1 Yukon Gold potato, cubed","1 can (15 oz) cannellini beans, drained","½ tsp mustard powder","1 cup milk","8 oz sharp cheddar, freshly grated","A pinch of nutmeg, salt, and pepper"],
 steps:["Sauté onion and carrots in the butter 5 min, then garlic for 30 sec.","Deglaze, then add broth, broccoli, potato, beans, and mustard powder. High pressure 3 min, quick release.","Blend about two-thirds of the soup, keeping some broccoli pieces.","Turn the pot off. Stir in the milk, then the cheddar a handful at a time until melted.","Season with nutmeg, salt, and pepper."],
 tip:"Grate the cheese yourself. Pre-shredded cheese is coated in starch that makes the soup grainy."},

/* ---------- ITALIAN SAUSAGE ---------- */
{id:"roasted-tomato-pasta",cat:"sausage",name:"Roasted tomato & sausage pasta",time:"40 min",protein:"Sausage + Parmesan",keeps:"3 days",
 blurb:"The lighter version: jammy roasted tomatoes and zucchini, crumbled sausage, spinach, and just enough pasta, finished with lemon and basil.",
 p:"Oven 425°F · 30 min",
 ing:["6 medium tomatoes, halved (quartered if large), or 2 pints cherry tomatoes","2 medium zucchini, in 1-inch chunks","4 garlic cloves, peeled and smashed","2 tbsp olive oil","1 tsp kosher salt, ½ tsp black pepper, and ½ tsp red pepper flakes","12 oz Italian sausage (mild or hot), casings removed","8 oz rigatoni or penne","5 oz baby spinach","1 cup fresh basil leaves, torn","⅓ cup grated Parmesan","1 lemon, zested and juiced"],
 steps:["Heat the oven to 425°F. Spread the tomatoes cut-side up on a sheet pan with the zucchini and garlic. Drizzle with the oil and sprinkle with salt, pepper, and pepper flakes.","Roast about 30 min, stirring the zucchini once, until the tomatoes collapse and the zucchini browns at the edges.","Meanwhile, brown the sausage in a large dry skillet over medium-high, breaking it into crumbles, about 9 min. Spoon off most of the fat, leaving about 1 tbsp. Turn off the heat.","Cook the pasta in well-salted water until just shy of al dente. Save 1 cup of pasta water, then drain.","Scrape the roasted vegetables, garlic, and all the pan juices into the skillet. Mash the garlic and break up the tomatoes a bit. Simmer over medium heat with a splash of pasta water until saucy, about 3 min.","Stir in the spinach a handful at a time until wilted. Add the pasta, Parmesan, lemon zest and juice, and most of the basil. Toss, adding pasta water a little at a time until everything is lightly coated.","Taste for salt and lemon, and top with the rest of the basil."],
 tip:"In fall and winter, use cherry tomatoes. They roast up much sweeter than out-of-season big tomatoes. Reheat leftovers with a splash of water and a fresh squeeze of lemon."},

{id:"sausage-tortellini",cat:"sausage",name:"Sausage tortellini soup",time:"30 min",protein:"Sausage + cheese tortellini",freeze:"Broth only",
 blurb:"Tomatoey and lightly creamy, with cheese tortellini and spinach.",
 p:"High 3 · QR",
 ing:["1 lb Italian sausage, casings removed","1 onion and 2 carrots, diced","4 garlic cloves, minced","2 tsp Italian seasoning and ¼ tsp red pepper flakes","2 tbsp tomato paste","5 cups chicken broth","1 can (28 oz) crushed tomatoes","9 oz fresh cheese tortellini","4 cups baby spinach","½ cup half-and-half (optional)","Parmesan and basil to serve"],
 steps:["Brown the sausage 5–6 min. Add onion and carrots for 4 min, then garlic, seasoning, pepper flakes, and tomato paste for 1 min.","Deglaze with a splash of broth, then add the rest of the broth.","Pour the tomatoes on top and don't stir. High pressure 3 min, quick release.","On Sauté, bring to a simmer, add the tortellini, and cook 3–4 min (or per the package).","Stir in the spinach until wilted. Turn the pot off and stir in the half-and-half if using.","Top with Parmesan and basil."],
 tip:"Tortellini swell overnight. If you're cooking for leftovers, boil them separately and add them to each bowl."},

{id:"wedding-soup",cat:"sausage",name:"Italian wedding soup",time:"45 min",protein:"Sausage meatballs",freeze:"Yes (no pasta)",
 blurb:"Little sausage-and-Parmesan meatballs in a lemony broth with greens.",
 p:"High 4 · QR",
 ing:["1 lb Italian sausage, casings removed","⅓ cup panko","1 egg","¼ cup grated Parmesan, plus more to serve","1 tbsp olive oil","1 onion, 2 carrots, and 2 celery stalks, diced","3 garlic cloves, minced","8 cups chicken broth","1 head escarole, chopped, or 5 oz baby spinach","¾ cup acini de pepe or orzo","1 lemon"],
 steps:["Mix the sausage, panko, egg, and Parmesan. With wet hands, roll into 1-inch meatballs (about 30).","On Sauté, brown the meatballs in the oil in two batches, 3–4 min each. They don't need to cook through. Set aside.","Sauté the vegetables 4 min, then garlic for 30 sec. Deglaze with a splash of broth.","Add the rest of the broth and the meatballs. High pressure 4 min, quick release.","On Sauté, stir in the greens and simmer 3 min.","Cook the pasta separately and add a scoop to each bowl. Finish with lemon juice and Parmesan."]},

{id:"sausage-lentil",cat:"sausage",name:"Sausage, lentil & escarole soup",time:"50 min",protein:"Sausage + lentils",freeze:"Yes",
 blurb:"A hearty Italian classic that's even better the next day.",
 p:"High 12 · NR 10",
 ing:["1 tbsp olive oil","1 lb Italian sausage, casings removed","1 onion, 2 carrots, and 2 celery stalks, diced","4 garlic cloves, minced","1 tsp Italian seasoning","2 tbsp tomato paste","7 cups chicken broth","1½ cups brown or green lentils, rinsed","1 Parmesan rind (optional)","1 can (14.5 oz) diced tomatoes","1 head escarole or 1 bunch kale, chopped","1 tbsp red wine vinegar"],
 steps:["Brown the sausage 5–6 min. Add the vegetables for 4 min, then garlic, seasoning, and tomato paste for 1 min.","Deglaze with a cup of broth, then add the rest of the broth, lentils, and Parmesan rind.","Pour the tomatoes on top and don't stir. High pressure 12 min, natural release 10 min.","On Sauté, stir in the greens and simmer 3–4 min.","Finish with the vinegar and taste for salt."]},

{id:"sheet-pan-sausage",cat:"sausage",name:"Sheet pan sausage, peppers & potatoes",time:"45 min",protein:"Sausage",keeps:"4 days",
 blurb:"One pan, almost no dishes, and crispy potatoes soaking up the sausage drippings.",
 p:"Oven 425°F · 40 min",
 ing:["1¼ lb Italian sausage links","1½ lb baby potatoes, halved","3 bell peppers, in thick strips","1 red onion, in wedges","2 tbsp olive oil","1 tsp Italian seasoning, ½ tsp salt, and black pepper","1 tbsp balsamic vinegar","Parsley, and grainy mustard for dipping"],
 steps:["Heat the oven to 425°F. Toss the potatoes with half the oil and seasoning and roast 15 min.","Add the peppers and onion tossed with the rest of the oil and seasoning. Nestle the sausages in between.","Roast 20–25 min, flipping the sausages once, until they reach 160°F and the potatoes are crisp.","Drizzle with balsamic and scatter parsley over the top. Slice the sausages and serve with mustard."],
 tip:"Use two pans if everything is crowded, or the vegetables will steam instead of brown."},

{id:"orecchiette",cat:"sausage",name:"Orecchiette with sausage & broccolini",time:"30 min",protein:"Sausage + Parmesan",keeps:"3 days",
 blurb:"A Puglian-style pasta with garlicky greens, chili, and lemon.",
 p:"Stovetop · 20 min",
 ing:["1 lb orecchiette","1 lb Italian sausage, casings removed","2 bunches broccolini or broccoli rabe, cut in 1-inch pieces","2 tbsp olive oil","5 garlic cloves, thinly sliced","½ tsp red pepper flakes","1 lemon, zested and juiced","½ cup grated Parmesan or Pecorino","About 1 cup reserved pasta water"],
 steps:["Bring a big pot of salted water to a boil and cook the pasta, adding the broccolini for the last 3 min. Reserve 1 cup of the water, then drain.","Meanwhile, brown the sausage in the oil in a large skillet, breaking it up, 6–8 min.","Add the garlic and pepper flakes and cook 1 min.","Add the pasta, broccolini, Parmesan, lemon zest, and ½ cup pasta water. Toss until glossy, adding more water as needed.","Finish with lemon juice and more cheese."]},

{id:"sausage-ragu",cat:"sausage",name:"Sausage & mushroom ragù with polenta",time:"50 min",protein:"Sausage",freeze:"Yes (ragù)",
 blurb:"A rich, slow-tasting sauce made fast, over creamy polenta.",
 p:"High 10 · NR 10",
 ing:["1 tbsp olive oil","1 lb Italian sausage, casings removed","8 oz cremini mushrooms, finely chopped","1 onion, 1 carrot, and 1 celery stalk, finely diced","4 garlic cloves, minced","2 tbsp tomato paste","½ cup red wine and ½ cup chicken broth","1 tsp dried oregano and 1 bay leaf","1 can (28 oz) crushed tomatoes","Basil and Parmesan to serve","Polenta: 1 cup quick-cooking polenta, 4 cups water or broth, 1 tsp salt, 2 tbsp butter, ¼ cup Parmesan"],
 steps:["Brown the sausage 5 min. Add the mushrooms and cook until their liquid cooks off, about 5 min.","Add the onion, carrot, and celery for 4 min, then garlic and tomato paste for 1 min.","Deglaze with the wine and broth, scraping well. Add the oregano and bay leaf.","Pour the tomatoes on top and don't stir. High pressure 10 min, natural release 10 min.","On Sauté, simmer 5 min to thicken. Remove the bay leaf and stir in torn basil.","For the polenta, bring the salted water to a boil, whisk in the polenta, and stir 5 min until thick. Stir in the butter and Parmesan.","Spoon the ragù over the polenta and top with Parmesan."],
 tip:"The ragù is also great over rigatoni or gnocchi."},

{id:"stuffed-squash",cat:"sausage",name:"Sausage & apple stuffed acorn squash",time:"55 min",protein:"Sausage",keeps:"4 days",
 blurb:"Roasted squash halves filled with sausage, apple, grains, and pecans.",
 p:"Oven 400°F · 45 min",
 ing:["2 acorn squash, halved and seeded","1 tbsp olive oil and a pinch of salt","1 lb sweet Italian sausage, casings removed","1 onion and 2 celery stalks, diced","1 apple, diced","2 garlic cloves, minced","1 tsp dried sage","1 cup cooked farro, quinoa, or wild rice","2 cups baby spinach","⅓ cup dried cranberries and ⅓ cup chopped pecans","⅓ cup grated Parmesan or crumbled goat cheese"],
 steps:["Heat the oven to 400°F. Brush the cut sides of the squash with oil, salt them, and roast cut-side down 30–35 min until tender.","Meanwhile, brown the sausage 5 min. Add the onion, celery, and apple for 5 min, then garlic and sage for 30 sec.","Stir in the grains, spinach, cranberries, and pecans until the spinach wilts.","Flip the squash, pile in the filling, and top with cheese.","Roast 10 min more until the cheese melts."],
 tip:"Quinoa in the Instant Pot: 1 cup quinoa and 1¼ cups water, High 1 min, NR 10. That makes plenty for this."},

{id:"tuscan-gnocchi",cat:"sausage",name:"Tuscan sausage gnocchi skillet",time:"30 min",protein:"Sausage",keeps:"3 days",
 blurb:"Crispy gnocchi in a garlicky sun-dried tomato sauce with spinach.",
 p:"Stovetop · 25 min",
 ing:["1 lb potato gnocchi (shelf-stable or refrigerated)","2 tbsp olive oil","1 lb Italian sausage, casings removed","1 shallot or ½ onion, diced","3 garlic cloves, minced","⅓ cup oil-packed sun-dried tomatoes, chopped","1 cup chicken broth","½ cup half-and-half, or ½ cup skyr stirred in off the heat","3 cups baby spinach","⅓ cup grated Parmesan","Basil to serve"],
 steps:["In a large skillet, crisp the gnocchi in the oil over medium-high heat, 5–6 min, turning once, until golden. Set aside.","Brown the sausage 5–6 min. Add the shallot for 2 min, then garlic and sun-dried tomatoes for 1 min.","Add the broth and simmer 3 min, scraping up the browned bits.","Lower the heat and stir in the half-and-half, Parmesan, and spinach until the spinach wilts.","Return the gnocchi, toss, and top with basil."],
 tip:"If using skyr, take the pan off the heat first and whisk a little of the hot sauce into the skyr before stirring it in."},

{id:"breakfast-skillet",cat:"sausage",name:"Italian sausage breakfast skillet",time:"35 min",protein:"Sausage + eggs",freeze:"Best fresh",
 blurb:"Crispy potatoes, sausage, and peppers with jammy eggs, all in one pan. Serves 2.",
 p:"Stovetop · 30 min",
 ing:["2 Yukon Gold potatoes, in ½-inch cubes","2 tbsp olive oil","8 oz Italian sausage, casings removed","1 small yellow onion and 1 bell pepper, diced","2 garlic cloves, minced","½ tsp smoked paprika, ¾ tsp salt, and ¼ tsp black pepper","4 large eggs","½ cup shredded cheddar or mozzarella","1 tbsp chopped chives or parsley","Toast or warm tortillas, and hot sauce to serve"],
 steps:["Microwave the potatoes, covered, with a splash of water for 5 min until just tender. Drain and pat dry.","Heat the oil in a large oven-safe skillet (cast iron is ideal) over medium-high. Add the potatoes in one layer with half the salt and let them brown before flipping, about 10 min total. Set aside.","Brown the sausage in the same pan, breaking it into crumbles, 5–6 min.","Add the onion and pepper and cook 4–5 min until soft. Stir in the garlic, paprika, the rest of the salt, and the pepper for 1 min.","Return the potatoes, stir, and lower the heat to medium-low. Make 4 wells and crack an egg into each.","Sprinkle the cheese over the top, cover, and cook about 5 min, until the whites are set and the yolks are still runny.","Finish with the herbs and a crack of pepper. Serve from the skillet with toast and hot sauce."],
 tip:"Dice the potatoes, onion, and pepper the night before. Keep the potatoes covered in water in the fridge so they don't brown."},

/* ---------- STEWS & BOWLS ---------- */
{id:"turkey-chili",cat:"stew",name:"Turkey & white bean chili",time:"40 min",protein:"Turkey",freeze:"Yes",
 blurb:"A lighter green chili with lime and avocado.",
 p:"High 10 · NR 10",
 ing:["1 tbsp olive oil","1½ lb ground turkey","1 onion and 1 poblano or green bell pepper, diced","4 garlic cloves, minced","1 tbsp chili powder, 2 tsp cumin, 1 tsp oregano","2 cans (15 oz each) cannellini or Great Northern beans, drained","1 can (4 oz) diced green chiles","3 cups chicken broth","1 cup frozen corn","Lime, cilantro, avocado, and skyr or yogurt to serve"],
 steps:["Brown the turkey 5–6 min. Add onion, pepper, garlic, and spices and cook 3 min.","Deglaze with a splash of broth, then add beans, chiles, and the rest of the broth.","High pressure 10 min, natural release 10 min.","On Sauté, stir in the corn and mash some beans against the side to thicken.","Finish with lime, cilantro, avocado, and skyr in place of sour cream."]},

{id:"beef-stew",cat:"stew",name:"Beef & root vegetable stew",time:"1 hr 15 min",protein:"Beef",freeze:"Yes",
 blurb:"The classic Sunday stew, with vegetables that hold their shape.",
 p:"High 30 · NR 10, then High 4 · QR",
 ing:["2 lb beef chuck, in 1½-inch cubes, salted and peppered","2 tbsp olive oil","1 onion, diced, and 3 garlic cloves, minced","2 tbsp tomato paste","1 cup red wine or beef broth","2 cups beef broth","1 tbsp Worcestershire, 1 tsp dried thyme, 2 bay leaves","1 lb Yukon Golds, 3 carrots, and 2 parsnips, in large chunks","2 tbsp cornstarch mixed with 2 tbsp water","1 cup frozen peas and a splash of red wine vinegar"],
 steps:["Brown the beef in two batches so it sears instead of steams; set aside.","Sauté onion, garlic, and tomato paste 2 min, then deglaze with the wine.","Add broth, Worcestershire, herbs, and beef. High pressure 30 min, natural release 10 min.","Add the vegetables on top. High pressure 4 min, quick release.","On Sauté, stir in the cornstarch slurry and peas and simmer 2–3 min.","Finish with a splash of vinegar to brighten it."]},

{id:"feijoada",cat:"stew",name:"Portuguese pork & bean stew",time:"1 hr 20 min",protein:"Pork + beans",freeze:"Yes",
 blurb:"A weeknight take on feijoada à portuguesa, with chouriço, cabbage, and paprika.",
 p:"High 30 · NR 10, then High 3 · QR",
 ing:["2 lb boneless pork shoulder, in 1½-inch cubes, salted","1 tbsp olive oil","6 oz chouriço, sliced","1 onion, diced, and 4 garlic cloves, minced","1 tbsp sweet paprika and 1 bay leaf","2 tbsp tomato paste","½ cup dry white wine","1 cup chicken broth","2 cans (15 oz each) red kidney beans, drained","2 carrots, in chunks","¼ head green cabbage, roughly chopped","Parsley and white rice to serve"],
 steps:["Brown the pork in two batches; set aside. Sauté the chouriço 2 min.","Add onion, garlic, paprika, and tomato paste and cook 2 min. Deglaze with the wine.","Add broth, pork, and bay leaf. High pressure 30 min, natural release 10 min.","Add beans, carrots, and cabbage on top. High pressure 3 min, quick release.","Finish with parsley and serve over rice."]},

{id:"gochujang-beef",cat:"stew",name:"Gochujang beef & sweet potato bowls",time:"1 hr 10 min",protein:"Beef",freeze:"Yes",
 blurb:"Sticky, spicy-sweet beef over rice with crunchy pickled things.",
 p:"High 30 · NR 10, then High 3 · QR",
 ing:["2 lb beef chuck, in 1½-inch cubes","1 tbsp neutral oil","4 garlic cloves and 1 tbsp ginger, minced","3 tbsp gochujang","¼ cup soy sauce and 2 tbsp honey","¾ cup water or broth","2 medium sweet potatoes, in 1½-inch cubes","1 tbsp cornstarch mixed with 1 tbsp water","1 tbsp rice vinegar and 1 tsp sesame oil","Rice, kimchi or quick-pickled cucumber, scallions, and sesame seeds to serve"],
 steps:["Brown the beef in two batches; set aside.","Sauté garlic and ginger 30 sec, then stir in gochujang, soy sauce, honey, and water, scraping the bottom.","Return the beef. High pressure 30 min, natural release 10 min.","Add sweet potatoes on top. High pressure 3 min, quick release.","On Sauté, stir in the cornstarch slurry and simmer 1–2 min. Add vinegar and sesame oil.","Spoon over rice and top with kimchi, scallions, and sesame seeds."]},

{id:"carnitas",cat:"stew",name:"Citrus pork carnitas",time:"1 hr 30 min",protein:"Pork",freeze:"Yes",
 blurb:"Tender, crispy-edged pork for tacos or rice bowls all week.",
 p:"High 35 · NR 15",
 ing:["3 lb boneless pork shoulder, in 2-inch chunks","2 tsp salt, 2 tsp cumin, 1 tsp oregano, 1 tsp chili powder","1 onion, quartered, and 5 garlic cloves, smashed","Juice of 1 orange (about ½ cup) and 2 limes","½ cup chicken broth","2 bay leaves","Tortillas or rice, black beans, slaw, pickled onions, and avocado to serve"],
 steps:["Toss the pork with the salt and spices.","Add pork, onion, garlic, citrus juice, broth, and bay leaves. High pressure 35 min, natural release 15 min.","Shred the pork and toss it with a few spoonfuls of the cooking liquid.","Spread on a sheet pan and broil 4–5 min until the edges crisp.","Serve in tortillas or bowls with your toppings."],
 tip:"Freeze it with a little of the cooking liquid so it stays juicy, then re-crisp it in a hot skillet."},

/* ---------- CURRIES ---------- */
{id:"butter-chicken",cat:"curry",name:"Lighter butter chicken",time:"40 min",protein:"Chicken",freeze:"Yes",
 blurb:"Creamy and mild, with skyr standing in for heavy cream.",
 p:"High 8 · NR 10",
 ing:["1 tbsp butter and 1 tbsp oil","1 onion, diced","4 garlic cloves and 1 tbsp ginger, minced","2 tsp garam masala, 1 tsp cumin, 1 tsp Kashmiri chili powder or paprika, ½ tsp turmeric","½ cup chicken broth","2 lb boneless chicken thighs, in bite-size chunks","1 can (15 oz) tomato sauce or crushed tomatoes","1 cup plain skyr or Greek yogurt","Cilantro, lime, and rice to serve"],
 steps:["Sauté onion in the butter and oil 4 min, then garlic, ginger, and spices for 1 min.","Deglaze with the broth and add the chicken.","Pour the tomatoes on top and don't stir. High pressure 8 min, natural release 10 min.","Turn the pot off. Whisk a ladle of hot sauce into the skyr, then stir it all back in.","Finish with cilantro and a squeeze of lime."],
 tip:"Warming the skyr with a little sauce first keeps it from curdling."},

{id:"thai-red-curry",cat:"curry",name:"Thai red curry",time:"35 min",protein:"Chicken or shrimp",freeze:"Yes (sauce)",
 blurb:"Fast and bright, with crisp-tender vegetables.",
 p:"High 5 · QR",
 ing:["1 tbsp oil","1 shallot or small onion, sliced","3 garlic cloves and 1 tbsp ginger, minced","3–4 tbsp red curry paste","1 cup chicken broth","1½ lb boneless chicken thighs, thinly sliced","1 tbsp fish sauce and 1 tsp brown sugar","1 can (13.5 oz) coconut milk","1 red bell pepper, sliced, and 1 head broccoli in florets","Lime, basil, and rice to serve"],
 steps:["Sauté shallot, garlic, ginger, and curry paste 1–2 min until fragrant.","Deglaze with the broth, then add chicken and fish sauce. High pressure 5 min, quick release.","On Sauté, stir in the coconut milk, sugar, and vegetables. Simmer 3–4 min.","Finish with lime juice and basil."],
 tip:"Shrimp version: skip the pressure step. Simmer the sauce on Sauté, add peeled shrimp with the vegetables, and cook 3–4 min until pink."},

{id:"chickpea-curry",cat:"curry",name:"Chickpea & spinach curry",time:"30 min",protein:"Chickpeas",freeze:"Yes",
 blurb:"A pantry-friendly vegetarian curry.",
 p:"High 4 · NR 5",
 ing:["1 tbsp oil","1 onion, diced, and 1 jalapeño, minced","4 garlic cloves and 1 tbsp ginger, minced","2 tsp garam masala, 1 tsp cumin, 1 tsp coriander, ½ tsp turmeric","½ cup vegetable broth","2 cans (15 oz each) chickpeas, drained","1 can (14 oz) diced tomatoes","5 oz baby spinach","½ can coconut milk (optional)","Lemon, cilantro, and rice to serve"],
 steps:["Sauté onion and jalapeño 4 min, then garlic, ginger, and spices for 1 min.","Deglaze with the broth and add the chickpeas.","Pour tomatoes on top and don't stir. High pressure 4 min, natural release 5 min.","On Sauté, stir in the spinach and coconut milk until wilted.","Finish with lemon juice and cilantro."],
 tip:"Add cubed paneer or a dollop of skyr on top for more protein."},

{id:"japanese-curry",cat:"curry",name:"Japanese chicken curry",time:"40 min",protein:"Chicken",freeze:"Yes",
 blurb:"Thick, glossy, gently sweet curry with potatoes and carrots.",
 p:"High 5 · NR 5",
 ing:["1 tbsp neutral oil","1 large onion, sliced","1½ lb boneless chicken thighs, bite-size","2 carrots, in chunks","2 Yukon Gold potatoes, in 1½-inch chunks","2½ cups water","1 tbsp honey or ½ grated apple","1 package (3.5 oz) Japanese curry roux, such as S&B Golden Curry or Vermont","Rice to serve"],
 steps:["Sauté the onion 5 min until soft, then add the chicken for 2 min.","Add carrots, potatoes, water, and honey. High pressure 5 min, natural release 5 min.","Turn the pot off. Break the roux into pieces and stir until dissolved.","On Sauté, simmer 2–3 min, stirring, until thick.","Serve over rice."],
 tip:"Never put the roux in before pressure cooking. It thickens on the bottom and triggers the Burn notice."},

/* ---------- NOODLE SOUPS ---------- */
{id:"miso-ramen",cat:"noodle",name:"Miso chicken ramen",time:"45 min",protein:"Chicken + eggs",freeze:"Broth only",
 blurb:"Rich, savory broth with jammy eggs and all the toppings.",
 p:"High 8 · NR 10",
 ing:["1 tbsp sesame oil","4 garlic cloves and 2 tbsp ginger, minced","4 scallions, whites and greens separated","8 oz shiitake mushrooms, sliced","1½ lb boneless chicken thighs","8 cups low-sodium chicken broth","3 tbsp soy sauce and 1 tbsp mirin","3–4 tbsp white miso","4 baby bok choy, halved","4 portions ramen noodles (fresh, dried, or instant with the packets tossed)","Jammy eggs, corn, nori, sesame seeds, and chili crisp to serve"],
 steps:["Sauté garlic, ginger, scallion whites, and mushrooms 2–3 min.","Deglaze, then add chicken, broth, soy sauce, and mirin. High pressure 8 min, natural release 10 min.","Lift out the chicken and slice or shred it.","On Sauté, add the bok choy for 2 min, then turn the pot off.","Whisk the miso into a ladle of broth and stir it back in. Don't let it boil after this.","Meanwhile, cook the noodles on the stove according to the package.","Build bowls: noodles, broth, chicken, bok choy, a halved egg, and toppings."],
 sub:{title:"Jammy ramen eggs",p:"High 3 · QR",steps:["Make these first. Add 1 cup water and the steamer rack, then set up to 8 eggs on the rack.","High pressure 3 min for jammy yolks (5 min for firm), then quick release.","Move the eggs to an ice bath for 5 min, then peel.","Optional: marinate 2+ hours in equal parts soy sauce, mirin, and water."]}},

{id:"pho",cat:"noodle",name:"Chicken pho",time:"1 hr",protein:"Chicken",freeze:"Broth only",
 blurb:"Fragrant spiced broth with fresh herbs at the table.",
 p:"High 15 · NR 15",
 ing:["1 large onion, halved, and a 3-inch piece of ginger, halved lengthwise","3 star anise, 1 cinnamon stick, 4 cloves, 1 tbsp coriander seeds, 1 tsp fennel seeds","2½ lb bone-in, skin-on chicken thighs","8 cups water","3 tbsp fish sauce, 1 tbsp sugar, 1 tsp salt","8 oz flat rice noodles","Bean sprouts, Thai basil, cilantro, sliced onion, jalapeño, lime, hoisin, and sriracha to serve"],
 steps:["On Sauté, char the onion and ginger cut-side down in the dry pot for 5 min.","Add the spices and toast 1 min until fragrant.","Add chicken, water, fish sauce, sugar, and salt. High pressure 15 min, natural release 15 min.","Lift out the chicken and shred it, discarding skin and bones.","Strain the broth through a fine-mesh sieve and taste for fish sauce and salt.","Meanwhile, soak or cook the rice noodles according to the package.","Build bowls: noodles, chicken, hot broth, then fresh toppings at the table."],
 tip:"Leftover broth freezes well. Store noodles and toppings separately and assemble fresh."},

{id:"khao-soi",cat:"noodle",name:"Khao soi",time:"40 min",protein:"Chicken",freeze:"Broth only",
 blurb:"Northern Thai coconut curry noodle soup, rich and tangy.",
 p:"High 8 · NR 5",
 ing:["1 tbsp neutral oil","3 shallots, sliced","4 garlic cloves and 1 tbsp ginger, minced","3 tbsp red curry paste (or khao soi paste), 1 tbsp curry powder, 1 tsp turmeric","2 cups chicken broth","1½ lb boneless chicken thighs","2 tbsp fish sauce and 1 tbsp brown sugar","1 can (13.5 oz) coconut milk","12 oz fresh egg noodles","Lime, sliced shallots, cilantro, chili oil, and pickled mustard greens to serve"],
 steps:["Sauté shallots 3 min, then garlic, ginger, curry paste, curry powder, and turmeric for 1 min.","Deglaze with the broth, then add chicken and fish sauce. High pressure 8 min, natural release 5 min.","Lift out the chicken and slice or shred it.","On Sauté, stir in the coconut milk and sugar and simmer 3 min. Return the chicken.","Cook the noodles separately and divide among bowls. Ladle the curry over and add toppings."],
 tip:"For the classic crunch, fry a small handful of the noodles in oil until crisp and pile them on top."},

{id:"beef-noodle",cat:"noodle",name:"Taiwanese beef noodle soup",time:"1 hr 20 min",protein:"Beef",freeze:"Yes (broth + beef)",
 blurb:"Spiced, savory broth with fall-apart beef and chewy wheat noodles.",
 p:"High 40 · NR 15",
 ing:["2 lb beef shank or chuck, in 2-inch chunks","1 tbsp neutral oil","5 garlic cloves, a 2-inch piece of ginger (sliced), and 4 scallions (cut in pieces)","2 tbsp doubanjiang (spicy bean paste) and 1 tbsp tomato paste","2 tbsp Shaoxing wine","⅓ cup soy sauce and 1 tbsp sugar","2 star anise and 1 cinnamon stick","6 cups water","1 lb wheat noodles and 4 baby bok choy","Scallions, cilantro, chili oil, and pickled mustard greens to serve"],
 steps:["Brown the beef in two batches; set aside.","Sauté garlic, ginger, and scallions 1 min, then stir in doubanjiang and tomato paste for 1 min.","Deglaze with the wine, then add soy sauce, sugar, spices, water, and the beef.","High pressure 40 min, natural release 15 min.","Skim the fat and fish out the whole spices.","Boil the noodles and bok choy separately, then build bowls with beef, broth, and toppings."]},

/* ---------- ROASTED SALADS ---------- */
{id:"sweet-potato-chickpea",cat:"salad",name:"Roasted sweet potato & chickpea salad",time:"40 min",protein:"Chickpeas + feta",keeps:"4 days, dressed just before eating",
 blurb:"Caramelized sweet potato, crispy chickpeas, and massaged kale with lemon-tahini dressing.",
 p:"Oven 425°F · 30 min",
 ing:["2 medium sweet potatoes, in ¾-inch cubes","1 can (15 oz) chickpeas, drained and patted dry","2 tbsp olive oil","1 tsp smoked paprika, 1 tsp cumin, ¾ tsp salt","1 bunch lacinato kale, stems removed, thinly sliced","¼ red onion, thinly sliced","¼ cup crumbled feta and 2 tbsp toasted pepitas","Dressing: 3 tbsp tahini, juice of 1 lemon, 1 small garlic clove (grated), 1 tsp maple syrup, salt, and 3–4 tbsp water"],
 steps:["Heat the oven to 425°F. Toss the sweet potatoes and chickpeas with the oil and spices on a sheet pan.","Roast 25–30 min, flipping halfway, until the potatoes are browned and the chickpeas are crisp.","Meanwhile, whisk the dressing, adding water until it's pourable.","Massage the kale with a spoonful of the dressing for 1 min until it softens.","Toss everything together and top with onion, feta, and pepitas."]},

{id:"squash-farro",cat:"salad",name:"Butternut squash & farro salad",time:"45 min",protein:"Farro + feta",keeps:"4 days, arugula added fresh",
 blurb:"Sweet roasted squash, chewy farro, and peppery arugula with pomegranate.",
 p:"Oven 425°F · 25 min",
 ing:["1 small butternut squash (about 2 lb), peeled and cubed","1 red onion, in wedges","2 tbsp olive oil, salt, and pepper","1 cup pearled farro","4 cups arugula","½ cup pomegranate seeds","⅓ cup toasted pecans or walnuts","3 oz feta or goat cheese","Dressing: 3 tbsp olive oil, 2 tbsp apple cider vinegar, 1 tsp Dijon, 1 tsp maple syrup, salt and pepper"],
 steps:["Heat the oven to 425°F. Toss the squash and onion with oil, salt, and pepper and roast 25 min, flipping once.","Meanwhile, cook the farro in salted boiling water 20–25 min until chewy-tender, then drain. Or pressure cook it: 1 cup farro and 3 cups water, High 10 min, NR 10.","Whisk the dressing.","Toss the warm farro with half the dressing, then fold in the squash and onion.","Add the arugula, pomegranate, nuts, and cheese, and drizzle with the rest of the dressing."]},

{id:"beet-lentil",cat:"salad",name:"Roasted beet, orange & lentil salad",time:"1 hr",protein:"Lentils + goat cheese",keeps:"4 days",
 blurb:"Earthy beets and lentils with juicy citrus and a sharp shallot vinaigrette.",
 p:"Oven 400°F · 45 min",
 ing:["1½ lb beets, scrubbed","1 cup black (beluga) or French green lentils","2 oranges or blood oranges","2 cups baby spinach or mixed greens","3 oz goat cheese, crumbled","⅓ cup toasted walnuts","A handful of fresh mint or dill","Dressing: 1 minced shallot, 2 tbsp red wine vinegar, 1 tsp Dijon, 3 tbsp olive oil, salt and pepper"],
 steps:["Heat the oven to 400°F. Wrap the beets in foil and roast 45–60 min, until a knife slides in easily.","Meanwhile, simmer the lentils in salted water 20–25 min until tender but intact, then drain. Or pressure cook them: 1 cup lentils and 2 cups water, High 9 min, NR 10.","Whisk the dressing and toss half of it with the warm lentils.","Rub the skins off the cooled beets and cut them into wedges. Peel the oranges and slice into rounds.","Arrange the greens, lentils, beets, and oranges. Top with goat cheese, walnuts, herbs, and the rest of the dressing."],
 tip:"Rub the beet skins off with a paper towel so your hands don't turn pink."},

{id:"broccoli-white-bean",cat:"salad",name:"Charred broccoli & white bean salad",time:"30 min",protein:"White beans + Parmesan",keeps:"3 days",
 blurb:"Crispy-edged broccoli with creamy beans, lemon, and lots of Parmesan.",
 p:"Oven 450°F · 20 min",
 ing:["2 large heads broccoli, cut into florets with long stems","1 can (15 oz) cannellini beans, drained and patted dry","3 tbsp olive oil, ½ tsp salt, and ¼ tsp red pepper flakes","1 lemon, zested and juiced","1 small garlic clove, grated","1 tsp honey","⅓ cup shaved Parmesan","¼ cup toasted sliced almonds"],
 steps:["Heat the oven to 450°F. Toss the broccoli and beans with 2 tbsp oil, the salt, and the pepper flakes.","Roast 18–20 min without stirring, until the broccoli edges are dark and crisp.","Whisk the lemon zest and juice, garlic, honey, and the remaining 1 tbsp oil.","Toss the hot broccoli and beans with the dressing.","Top with Parmesan and almonds. Good warm or at room temperature."]},

{id:"shawarma-cauliflower",cat:"salad",name:"Shawarma cauliflower & chicken salad",time:"40 min",protein:"Chicken",keeps:"4 days, sauce kept separate",
 blurb:"Warm-spiced cauliflower and chicken over crunchy vegetables with a garlicky skyr sauce.",
 p:"Oven 425°F · 25 min",
 ing:["1 head cauliflower, in florets","1½ lb boneless chicken thighs","3 tbsp olive oil","2 tsp cumin; 1 tsp each paprika, coriander, and garlic powder; ½ tsp each turmeric and cinnamon; 1 tsp salt","4 cups chopped romaine","1 English cucumber, diced, and 1 cup cherry tomatoes, halved","¼ red onion, thinly sliced, and a handful of parsley","Sauce: ¾ cup skyr or Greek yogurt, 1 grated garlic clove, juice of ½ lemon, 1 tbsp tahini, salt, and a splash of water"],
 steps:["Heat the oven to 425°F. Stir the spices into the oil.","Toss the cauliflower and chicken with the spiced oil and spread them on a large sheet pan (use two if crowded).","Roast 22–25 min, until the chicken reaches 165°F and the cauliflower is browned. Slice the chicken.","Whisk the sauce, thinning it with water until it drizzles.","Pile romaine, cucumber, tomatoes, and onion into bowls. Top with the cauliflower, chicken, parsley, and sauce."]},

{id:"brussels-quinoa",cat:"salad",name:"Brussels sprout, apple & quinoa salad",time:"35 min",protein:"Quinoa + chicken sausage",keeps:"4 days",
 blurb:"Crispy sprouts, sweet apple, and toasty pecans in a mustardy maple dressing.",
 p:"Oven 425°F · 22 min",
 ing:["1½ lb Brussels sprouts, trimmed and halved","2 precooked chicken-apple sausages, sliced (optional)","2 tbsp olive oil, salt, and pepper","1 cup quinoa, rinsed","1 crisp apple (Honeycrisp or Pink Lady), diced","⅓ cup dried cranberries","⅓ cup toasted pecans","2 oz sharp white cheddar or Parmesan, shaved","Dressing: 3 tbsp olive oil, 2 tbsp apple cider vinegar, 1 tbsp whole-grain mustard, 2 tsp maple syrup, salt and pepper"],
 steps:["Heat the oven to 425°F. Toss the sprouts (and sausage, if using) with oil, salt, and pepper. Turn the sprouts cut-side down.","Roast 20–22 min, until deeply browned and crisp at the edges.","Meanwhile, cook the quinoa. Or pressure cook it: 1 cup quinoa and 1¼ cups water, High 1 min, NR 10. Fluff and let it cool slightly.","Whisk the dressing and toss it with the quinoa.","Fold in the sprouts, sausage, apple, cranberries, and pecans. Top with the cheese."],
 tip:"Cut-side down on a hot pan is what makes the sprouts crispy instead of steamed."}
];
