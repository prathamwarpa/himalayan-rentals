export interface ItineraryStep {
  day: number;
  title: string;
  description: string;
  photos?: { src: string; alt: string }[];
}

export interface TourData {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  duration: string;
  start: string;
  end: string;
  groupSize: string;
  price: number;
  itinerary: ItineraryStep[];
  inclusions: string[];
  exclusions: string[];
}

export const TOURS: TourData[] = [
  {
    slug: "leh-ladakh",
    name: "Leh-Ladakh Expedition",
    tagline: "Conquer the roof of the world on two wheels.",
    heroImage: "https://images.pexels.com/photos/34998312/pexels-photo-34998312.jpeg",
    duration: "7 Days / 6 Nights",
    start: "Manali",
    end: "Leh",
    groupSize: "Max 12 Riders",
    price: 42000,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        description: "Begin your journey with a traditional welcome ceremony and orientation session. Check-in to your guesthouse, meet your fellow riders, and enjoy a group briefing dinner.",
        photos: [
          { src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80", alt: "Manali town" },
          { src: "https://images.pexels.com/photos/5205541/pexels-photo-5205541.jpeg", alt: "Mountains around Manali" },
          { src: "https://images.pexels.com/photos/5205652/pexels-photo-5205652.jpeg", alt: "Himalayas view" },
        ],
      },
      {
        day: 2,
        title: "Manali to Jispa via Rohtang Pass",
        description: "Ride through the Kullu Valley and cross the mighty Rohtang Pass (3,978m). The landscape transforms dramatically as you leave the lush valleys and enter the stark, raw beauty of Lahaul.",
        photos: [
          { src: "https://images.pexels.com/photos/35077792/pexels-photo-35077792.jpeg", alt: "Rohtang Pass road" },
          { src: "https://images.pexels.com/photos/32905344/pexels-photo-32905344.jpeg", alt: "Mountain road" },
          { src: "https://images.pexels.com/photos/2591408/pexels-photo-2591408.jpeg", alt: "High altitude landscape" },
        ],
      },
      {
        day: 3,
        title: "Jispa to Sarchu via Baralacha La",
        description: "One of the toughest days. Cross Baralacha La (4,890m) and camp in the raw, flat plains of Sarchu. The altitude will test you, but the scenery is unlike anything you have ever seen.",
        photos: [
          { src: "https://images.pexels.com/photos/11200663/pexels-photo-11200663.jpeg", alt: "Baralacha La pass" },
          { src: "https://images.pexels.com/photos/11108128/pexels-photo-11108128.jpeg", alt: "High mountain pass" },
          { src: "https://images.pexels.com/photos/15804646/pexels-photo-15804646.jpeg", alt: "Rocky landscape" },
        ],
      },
      {
        day: 4,
        title: "Sarchu to Pang via Gata Loops",
        description: "Navigate the iconic 21 hairpin Gata Loops — a legendary stretch of road that demands every ounce of your riding skill. Descend into the windswept plains of Pang for the night.",
        photos: [
          { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uyarry1zG3hEwiguC-_XFoaWW8ykKM5HOQ&s", alt: "Gata loops" },
          { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBwRmCxdNqD9kHztzdtzudMFMg7-Szv-fTQ&s", alt: "Desert plains" },
          { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvk-_9x83x0LQVhdqJjinzd_4UBWZOuiWLtA&s", alt: "Rider on mountain pass" },
        ],
      },
      {
        day: 5,
        title: "Pang to Leh via Tanglang La",
        description: "Cross Tanglang La (5,328m), the second highest motorable pass in the world. The descent into the Indus Valley marks your triumphant arrival into Leh city.",
        photos: [
          { src: "https://media3.thrillophilia.com/filestore/od87u3rp9hthb6sv0qxzah3bbb50_1578747616_Pang.jpg?w=400&dpr=2", alt: "Leh city view" },
          { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvC8OMd7ccqUaN4x2K7q4bov1GzbXjQKA4w&s", alt: "High altitude road" },
          { src: "https://images.pexels.com/photos/12064459/pexels-photo-12064459.jpeg", alt: "Valley view" },
        ],
      },
      {
        day: 6,
        title: "Leh Exploration",
        description: "A rest day well-earned. Explore Leh Palace, Shanti Stupa, and the bustling local market. Ride out to Khardung La if you are feeling adventurous — the highest motorable road in the world.",
        photos: [
          { src: "https://images.pexels.com/photos/6619115/pexels-photo-6619115.jpeg", alt: "Leh Palace" },
          { src: "https://images.pexels.com/photos/10841375/pexels-photo-10841375.jpeg", alt: "Shanti Stupa" },
          { src: "https://images.pexels.com/photos/6619114/pexels-photo-6619114.jpeg", alt: "Leh streets" },
        ],
      },
      {
        day: 7,
        title: "Farewell at Leh",
        description: "A farewell breakfast with the group at a local café. Transfer to Leh airport or the bus stand. The journey ends, but the Himalayas stay with you forever.",
        photos: [
          { src: "https://images.pexels.com/photos/4846377/pexels-photo-4846377.jpeg", alt: "Group farewell" },
          { src: "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg", alt: "Leh airport area" },
        ],
      },
    ],
    inclusions: [
      "Royal Enfield Himalayan 450 rental",
      "Accommodation (6 nights)",
      "All meals on-route",
      "Experienced local guide & sweep rider",
      "Inner-line permits (ILP)",
      "Mechanical support vehicle",
    ],
    exclusions: [
      "Flights to and from Leh/Manali",
      "Personal travel insurance",
      "Alcoholic beverages",
      "Tips for guide and support staff",
    ],
  },
  {
    slug: "spiti-valley",
    name: "Spiti Valley Circuit",
    tagline: "Where the mountains reveal their most ancient secrets.",
    heroImage: "https://images.unsplash.com/photo-1596704174391-7290d1fba50a?w=1600&q=80",
    duration: "8 Days / 7 Nights",
    start: "Shimla",
    end: "Manali",
    groupSize: "Max 10 Riders",
    price: 38000,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla",
        description: "Check-in and team orientation. Brief ride prep and gear fitting for the journey ahead. An evening walk through Mall Road sets the tone for the adventure.",
        photos: [
          { src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80", alt: "Shimla hills" },
          { src: "https://images.unsplash.com/photo-1527377667-83c6c76f960f?w=600&q=80", alt: "Mountain town" },
        ],
      },
      {
        day: 2,
        title: "Shimla to Narkanda",
        description: "Traverse the famous apple orchards of Himachal Pradesh. The road is smooth and scenic, slowly gaining altitude toward Narkanda and the promise of what lies ahead.",
        photos: [
          { src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&q=80", alt: "Apple orchard roads" },
          { src: "https://images.unsplash.com/photo-1512805147242-25b76d7f8292?w=600&q=80", alt: "Forest mountain road" },
          { src: "https://images.unsplash.com/photo-1519981593452-668ccfc71598?w=600&q=80", alt: "Himalayan foothills" },
        ],
      },
      {
        day: 3,
        title: "Narkanda to Kalpa",
        description: "Breathtaking views of Kinnaur Kailash as you wind along the Sutlej River gorge. The road narrows dramatically and so does your breath as you reach Kalpa and its views of the silver peaks.",
        photos: [
          { src: "https://images.unsplash.com/photo-1549726880-99e7dcb46a78?w=600&q=80", alt: "Kinnaur valley" },
          { src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80", alt: "River gorge road" },
          { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80", alt: "Kalpa village" },
        ],
      },
      {
        day: 4,
        title: "Kalpa to Tabo",
        description: "Enter the Spiti Valley proper through the dramatic Maling Nallah. Reach the ancient Tabo monastery — one of the oldest continuously functioning Buddhist monasteries in India.",
        photos: [
          { src: "https://images.unsplash.com/photo-1596704174391-7290d1fba50a?w=600&q=80", alt: "Spiti valley view" },
          { src: "https://images.unsplash.com/photo-1598369072834-9e8c1f5f0cf7?w=600&q=80", alt: "Desert monastery" },
          { src: "https://images.unsplash.com/photo-1527377667-83c6c76f960f?w=600&q=80", alt: "Rock formations" },
        ],
      },
      {
        day: 5,
        title: "Tabo to Kaza",
        description: "Explore the Tabo monastery in the morning before riding to Kaza, the administrative hub of the Spiti Valley. Stop at Pin Valley National Park on the way.",
        photos: [
          { src: "https://images.unsplash.com/photo-1566837497312-7be4a5301a6c?w=600&q=80", alt: "Kaza town" },
          { src: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=600&q=80", alt: "Spiti river" },
          { src: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80", alt: "Mountain rider" },
        ],
      },
      {
        day: 6,
        title: "Kaza Excursions — Key, Hikkim, Komic",
        description: "Day rides to Hikkim (world's highest post office at 4,440m), Komic village, and the stunning Key Monastery perched on a dramatic hilltop. The air is thin but the views are infinite.",
        photos: [
          { src: "https://images.unsplash.com/photo-1568038479111-87bf80659645?w=600&q=80", alt: "Key Monastery" },
          { src: "https://images.unsplash.com/photo-1513271786226-fbc944f2434f?w=600&q=80", alt: "High altitude village" },
          { src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&q=80", alt: "Snow mountain road" },
        ],
      },
      {
        day: 7,
        title: "Kaza to Kunzum La to Gramphu",
        description: "Cross the dramatic Kunzum La (4,590m) — the gateway between Spiti and the Lahaul valley. The road beyond is soft and sandy, demanding every ounce of your riding focus.",
        photos: [
          { src: "https://images.unsplash.com/photo-1549726880-99e7dcb46a78?w=600&q=80", alt: "Kunzum La pass" },
          { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80", alt: "Sandy high-altitude road" },
          { src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80", alt: "Lahaul valley" },
        ],
      },
      {
        day: 8,
        title: "Gramphu to Manali — Farewell",
        description: "The final leg. Ride through the increasingly lush Kullu Valley back to Manali. The contrast with Spiti is striking. Farewell dinner with the group to celebrate completing the circuit.",
        photos: [
          { src: "https://images.unsplash.com/photo-1519981593452-668ccfc71598?w=600&q=80", alt: "Green valley" },
          { src: "https://images.unsplash.com/photo-1512805147242-25b76d7f8292?w=600&q=80", alt: "Manali valley" },
        ],
      },
    ],
    inclusions: [
      "KTM 390 Adventure rental",
      "Accommodation (7 nights)",
      "All meals on-route",
      "Certified ride leader",
      "Permit assistance",
      "First-aid kit & oxygen cylinder",
    ],
    exclusions: [
      "Bus/flight to Shimla and from Manali",
      "Personal travel insurance",
      "Any personal expenses",
      "Tips for the team",
    ],
  },
  {
    slug: "zanskar-valley",
    name: "Zanskar Valley Adventure",
    tagline: "The last frontier. Ride where few have dared.",
    heroImage: "https://images.pexels.com/photos/18646445/pexels-photo-18646445.jpeg",
    duration: "9 Days / 8 Nights",
    start: "Srinagar",
    end: "Leh",
    groupSize: "Max 8 Riders",
    price: 55000,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar — Dal Lake Houseboat",
        description: "A leisurely arrival on a houseboat on Dal Lake. Gear check and route briefing over dinner on the water. A peaceful beginning before the road demands everything you have.",
        photos: [
          { src: "https://images.unsplash.com/photo-1598369072834-9e8c1f5f0cf7?w=600&q=80", alt: "Dal Lake" },
          { src: "https://images.unsplash.com/photo-1527377667-83c6c76f960f?w=600&q=80", alt: "Srinagar landscape" },
        ],
      },
      {
        day: 2,
        title: "Srinagar to Kargil via Zoji La",
        description: "Ride through the awe-inspiring Zoji La pass (3,529m) and leave the Kashmir valley behind. The terrain shifts dramatically into the raw, rocky landscapes of Kargil.",
        photos: [
          { src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&q=80", alt: "Zoji La pass road" },
          { src: "https://images.unsplash.com/photo-1549726880-99e7dcb46a78?w=600&q=80", alt: "Kargil region" },
          { src: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=600&q=80", alt: "Mountain canyon" },
        ],
      },
      {
        day: 3,
        title: "Kargil to Padum",
        description: "The road drops into the Suru Valley and begins the long, challenging approach into remote Zanskar. Cross Penzi La (4,401m) and feel the isolation of one of India's most remote districts.",
        photos: [
          { src: "https://images.unsplash.com/photo-1621319349818-1c469273cba3?w=600&q=80", alt: "Zanskar gorge" },
          { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80", alt: "Remote valley road" },
          { src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80", alt: "Suru river valley" },
        ],
      },
      {
        day: 4,
        title: "Padum Acclimatisation & Monasteries",
        description: "Explore Padum on foot. Visit the Stongde and Karsha monasteries perched on dramatic cliff faces overlooking the valley. An essential day to acclimatise before the hard off-road sections.",
        photos: [
          { src: "https://images.unsplash.com/photo-1566837497312-7be4a5301a6c?w=600&q=80", alt: "Mountain monastery" },
          { src: "https://images.unsplash.com/photo-1598369072834-9e8c1f5f0cf7?w=600&q=80", alt: "Cliff monastery" },
          { src: "https://images.unsplash.com/photo-1513271786226-fbc944f2434f?w=600&q=80", alt: "Ancient monastery" },
        ],
      },
      {
        day: 5,
        title: "Padum to Phugtal Monastery",
        description: "A challenging off-road section leads to the spectacular Phugtal Monastery — carved directly into a cave on a cliff face. One of the most dramatic destinations in the Himalayas.",
        photos: [
          { src: "https://images.unsplash.com/photo-1568038479111-87bf80659645?w=600&q=80", alt: "Phugtal monastery" },
          { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80", alt: "Off-road trail" },
          { src: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80", alt: "Remote riding" },
        ],
      },
      {
        day: 6,
        title: "Zangla Castle Scenic Loop",
        description: "Ride the scenic loop around Zanskar including the ancient Zangla Castle. Camp by the riverside and spend the evening under a sky full of stars, completely cut off from the modern world.",
        photos: [
          { src: "https://images.unsplash.com/photo-1549726880-99e7dcb46a78?w=600&q=80", alt: "River camp" },
          { src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&q=80", alt: "Zanskar river" },
          { src: "https://images.unsplash.com/photo-1512805147242-25b76d7f8292?w=600&q=80", alt: "Remote desert camp" },
        ],
      },
      {
        day: 7,
        title: "Padum to Nimmu via Penzi La",
        description: "Cross the Penzi La pass once more and descend to the spectacular confluence of the Zanskar and Indus rivers at Nimmu. This is one of the most photographed spots in all of Ladakh.",
        photos: [
          { src: "https://images.unsplash.com/photo-1619134778706-7015533a629f?w=600&q=80", alt: "River confluence" },
          { src: "https://images.unsplash.com/photo-1621319349818-1c469273cba3?w=600&q=80", alt: "Zanskar river" },
          { src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80", alt: "Road to Nimmu" },
        ],
      },
      {
        day: 8,
        title: "Nimmu to Leh — Triumphant Arrival",
        description: "The final leg. Ride along the Indus River to Leh for a triumphant arrival. Group celebration dinner at one of Leh's finest restaurants. You have earned every bite.",
        photos: [
          { src: "https://images.unsplash.com/photo-1566837497312-7be4a5301a6c?w=600&q=80", alt: "Leh arrival" },
          { src: "https://images.unsplash.com/photo-1598369072834-9e8c1f5f0cf7?w=600&q=80", alt: "Leh panorama" },
          { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80", alt: "Indus valley" },
        ],
      },
      {
        day: 9,
        title: "Farewell at Leh",
        description: "Morning at leisure. Visit the local market, pick up some keepsakes. Transfers to Leh airport or your onward journey. Until next time, the mountains will be waiting.",
        photos: [
          { src: "https://images.unsplash.com/photo-1519981593452-668ccfc71598?w=600&q=80", alt: "Final morning" },
          { src: "https://images.unsplash.com/photo-1527377667-83c6c76f960f?w=600&q=80", alt: "Leh farewell" },
        ],
      },
    ],
    inclusions: [
      "Royal Enfield Himalayan 450 or equivalent",
      "Accommodation (8 nights, mix of guesthouses & camps)",
      "All meals throughout",
      "Expert local guide with Zanskar experience",
      "All permits (Inner Line + Zanskar area)",
      "Emergency satellite communication device",
    ],
    exclusions: [
      "Flights to Srinagar and from Leh",
      "Personal insurance (mandatory)",
      "Alcoholic beverages",
      "Tips and personal expenses",
    ],
  },
];

export function getTourBySlug(slug: string): TourData | undefined {
  return TOURS.find((t) => t.slug === slug);
}
