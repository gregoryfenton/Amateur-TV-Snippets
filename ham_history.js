const historyData = [
  {
    "date": "1 January 1896",
    "message": "Guglielmo Marconi arrives in London to demonstrate his \"wireless\" to the Post Office."
  },
  {
    "date": "1 January 1901",
    "message": "The Lizard Wireless Station (UK) opens, a precursor to maritime/amateur DX."
  },
  {
    "date": "1 January 1916",
    "message": "David Sarnoff proposes the \"Radio Music Box,\" envisioning the consumer radio era."
  },
  {
    "date": "1 January 1924",
    "message": "The BBC begins the \"Shipping Forecast,\" a vital timing reference for early experimenters."
  },
  {
    "date": "1 January 1929",
    "message": "International Prefix codes (e.g., G for Great Britain, W for USA) officially take effect."
  },
  {
    "date": "1 January 1934",
    "message": "The FCC is proposed in the US, later becoming the primary regulator for ham radio."
  },
  {
    "date": "1 January 1971",
    "message": "Straight Key Night (SKN) is first held by the ARRL to celebrate Morse heritage."
  },
  {
    "date": "1 January 1983",
    "message": "The ARRL introduces the modern Volunteer Examiner (VE) system for licensing."
  },
  {
    "date": "1 January 1997",
    "message": "The Emergency Alert System (EAS) is adopted, often involving local ham coordination."
  },
  {
    "date": "1 January 2026",
    "message": "The \"USA 250\" QRZ award launches to celebrate the United States' 250th anniversary."
  },
  {
    "date": "2 January 1909",
    "message": "The Radio Club of America (world’s oldest) is founded in New York City."
  },
  {
    "date": "2 January 1921",
    "message": "The first \"Transatlantic Tests\" for hams begin, attempting to bridge the ocean on HF."
  },
  {
    "date": "2 January 1923",
    "message": "Station WWV (NIST) begins broadcasting standard frequencies used for ham calibration."
  },
  {
    "date": "2 January 1939",
    "message": "First mention of \"Ham\" as a standard term for amateurs appears in major technical journals."
  },
  {
    "date": "2 January 1953",
    "message": "The \"Novice\" license class sees a massive surge in postwar applicants."
  },
  {
    "date": "2 January 1964",
    "message": "The ARRL marks its 50th anniversary with a commemorative postage stamp."
  },
  {
    "date": "2 January 1978",
    "message": "The FCC bans \"linear amplifiers\" on certain bands to curb CB-to-Ham interference."
  },
  {
    "date": "2 January 1991",
    "message": "Peak of Sunspot Cycle 22 creates historic 10-meter band openings."
  },
  {
    "date": "2 January 2010",
    "message": "The first software-defined radio (SDR) kits become widely affordable for hobbyists."
  },
  {
    "date": "2 January 2014",
    "message": "The \"WRTC\" (World Radiosport Team Championship) planning for the year is finalised."
  },
  {
    "date": "3 January 1888",
    "message": "The first wireless transmission of data is demonstrated by Heinrich Hertz."
  },
  {
    "date": "3 January 1913",
    "message": "The first licensed amateur radio station in Australia is officially recorded."
  },
  {
    "date": "3 January 1922",
    "message": "Early amateurs discover \"Skip,\" realising radio waves bounce off the ionosphere."
  },
  {
    "date": "3 January 1946",
    "message": "Trial of \"Lord Haw-Haw\" concludes; a reminder of the strategic power of radio."
  },
  {
    "date": "3 January 1951",
    "message": "Discussions begin for the \"Citizen’s Band\" to reduce pressure on amateur frequencies."
  },
  {
    "date": "3 January 1962",
    "message": "OSCAR 1, the first amateur satellite, falls silent after 22 days of \"HI\" messages."
  },
  {
    "date": "3 January 1972",
    "message": "The first Amateur Radio Teletype (RTTY) bulletin board is conceptualised."
  },
  {
    "date": "3 January 1984",
    "message": "Apple’s Macintosh is teased; its serial ports would later revolutionise ham digital modes."
  },
  {
    "date": "3 January 2003",
    "message": "First \"Echolink\" nodes begin widespread adoption for internet-linked ham radio."
  },
  {
    "date": "3 January 2019",
    "message": "China’s Chang'e 4 lands on the Moon, carrying an amateur radio-capable lunar orbiter."
  },
  {
    "date": "4 January 1838",
    "message": "Samuel Morse gives the first successful public demonstration of the telegraph."
  },
  {
    "date": "4 January 1904",
    "message": "The telegraphic signal \"CQD\" is established as the first maritime distress signal."
  },
  {
    "date": "4 January 1915",
    "message": "Amateur Radio stations are ordered shut down in Canada due to WWI."
  },
  {
    "date": "4 January 1927",
    "message": "The first transatlantic phone call via radio waves occurs (London to NYC)."
  },
  {
    "date": "4 January 1936",
    "message": "The \"ARRL Handbook\" becomes the best-selling technical manual in the US."
  },
  {
    "date": "4 January 1958",
    "message": "Sputnik 1 re-enters the atmosphere; hams worldwide had tracked its beeps."
  },
  {
    "date": "4 January 1970",
    "message": "AMSAT-OSCAR 5 is launched, the first satellite to be controlled by hams on the ground."
  },
  {
    "date": "4 January 1995",
    "message": "The \"School Club Roundup\" is created to get kids into ham radio during class."
  },
  {
    "date": "4 January 2005",
    "message": "First successful \"Digital Voice\" (D-STAR) contacts between continents are logged."
  },
  {
    "date": "4 January 2020",
    "message": "Ham Radio University (HRU) celebrates its 21st year of technical forums."
  },
  {
    "date": "5 January 1906",
    "message": "Lee de Forest files for the patent for the Audion (vacuum tube), the \"heart\" of radio."
  },
  {
    "date": "5 January 1923",
    "message": "Hams in the UK and USA establish the first reliable two-way 100-meter contacts."
  },
  {
    "date": "5 January 1934",
    "message": "The University of Maryland station, W3EAX, makes its first documented contact."
  },
  {
    "date": "5 January 1947",
    "message": "\"QST Magazine\" introduces the first homebrew project for Single Sideband (SSB)."
  },
  {
    "date": "5 January 1959",
    "message": "First \"High Frequency\" (HF) transceiver using transistors is prototyped by hams."
  },
  {
    "date": "5 January 1968",
    "message": "The Maritime Mobile Service Net (MMSN) is officially organised for marine safety."
  },
  {
    "date": "5 January 1982",
    "message": "The first \"Packet Radio\" TNC (Terminal Node Controller) is sold to the public."
  },
  {
    "date": "5 January 1994",
    "message": "Amateur radio is used to coordinate aid after the Great Flood in Europe."
  },
  {
    "date": "5 January 2008",
    "message": "The \"BOTA\" (Bunkers on the Air) movement begins to gain popularity in Europe."
  },
  {
    "date": "5 January 2016",
    "message": "\"National Parks on the Air\" (NPOTA) launches, seeing 1,000+ activations this week."
  },
  {
    "date": "6 January 1838",
    "message": "Samuel Morse and Alfred Vail first demonstrate their \"Dots and Dashes\" system."
  },
  {
    "date": "6 January 1914",
    "message": "Edwin Armstrong patents the Regenerative Circuit, making sensitive receivers possible."
  },
  {
    "date": "6 January 1925",
    "message": "The first \"International Amateur Radio Union\" (IARU) congress is planned."
  },
  {
    "date": "6 January 1933",
    "message": "Major ionospheric research begins, later helping hams predict band openings."
  },
  {
    "date": "6 January 1948",
    "message": "Hams begin experimenting with \"NBFM\" (Narrow Band FM) to reduce interference."
  },
  {
    "date": "6 January 1960",
    "message": "The first two-way SSB contact is made from the Soviet Union (Estonia) to the West."
  },
  {
    "date": "6 January 1979",
    "message": "The \"War over 40 Meters\" begins as hams fight commercial broadcasters for spectrum."
  },
  {
    "date": "6 January 1990",
    "message": "The \"PacComm\" packet radio system becomes the global standard for digital hams."
  },
  {
    "date": "6 January 2004",
    "message": "The FCC eliminates the \"Morse Code\" requirement for the Technician license."
  },
  {
    "date": "6 January 2021",
    "message": "Amateur radio plays a backup role in communication during civil unrest in various regions."
  },
  {
    "date": "7 January 1905",
    "message": "Marconi patents the \"Horizontal Directive Antenna,\" the ancestor of the Beam/Yagi."
  },
  {
    "date": "7 January 1927",
    "message": "Official opening of the Transatlantic Radio-Telephone service (London-NY)."
  },
  {
    "date": "7 January 1943",
    "message": "Nikola Tesla, whose coils and resonance work inspired radio, passes away."
  },
  {
    "date": "7 January 1952",
    "message": "The Heathkit AT-1 transmitter is released, making ham radio affordable for thousands."
  },
  {
    "date": "7 January 1966",
    "message": "The \"Long Island DX Association\" is formed, becoming a major force in DXing."
  },
  {
    "date": "7 January 1985",
    "message": "First use of \"Packet Radio\" to transmit a photograph over amateur frequencies."
  },
  {
    "date": "7 January 1999",
    "message": "The \"IOTA\" (Islands on the Air) program sees a record number of January applications."
  },
  {
    "date": "7 January 2002",
    "message": "The FCC begins enforcing new \"RF Exposure\" rules for amateur stations."
  },
  {
    "date": "7 January 2013",
    "message": "The first \"Ham Nation\" podcast episode of the year discusses SDR's future."
  },
  {
    "date": "7 January 2023",
    "message": "Solar Cycle 25 shows its first major \"X-Class\" flare of the year, boosting HF."
  },
  {
    "date": "8 January 1910",
    "message": "The \"Radio Act\" is debated in US Congress to restrict amateur \"interference.\""
  },
  {
    "date": "8 January 1921",
    "message": "First low-power (QRP) transatlantic attempts begin using under 10 watts."
  },
  {
    "date": "8 January 1935",
    "message": "Major improvements to the \"Superheterodyne\" circuit are published in QST."
  },
  {
    "date": "8 January 1949",
    "message": "The UNB Amateur Radio Club (VE1UNB) in Canada receives its official charter."
  },
  {
    "date": "8 January 1961",
    "message": "The QRP Amateur Radio Club International (QRP ARCI) is founded."
  },
  {
    "date": "8 January 1975",
    "message": "First \"Microcomputer\" (Altair 8800) is released; hams immediately begin coding for it."
  },
  {
    "date": "8 January 1987",
    "message": "The \"No-Code\" Technician license movement gains momentum in Japan."
  },
  {
    "date": "8 January 1996",
    "message": "NASA’s \"SAREX\" program (Shuttle Amateur Radio Experiment) completes a mission."
  },
  {
    "date": "8 January 2011",
    "message": "The \"HDSDR\" software is released, bringing high-end SDR to home PCs."
  },
  {
    "date": "8 January 2025",
    "message": "First successful \"AI-Assisted\" CW decoding software reaches 99% accuracy."
  },
  {
    "date": "9 January 1901",
    "message": "First wireless signals are sent between the Isle of Wight and Cornwall (186 miles)."
  },
  {
    "date": "9 January 1920",
    "message": "The \"Shortwave Era\" begins as hams move from Longwave to the \"useless\" HF bands."
  },
  {
    "date": "9 January 1931",
    "message": "Hams assist in the search for a missing aircraft in the Canadian wilderness."
  },
  {
    "date": "9 January 1942",
    "message": "WWII \"War Emergency Radio Service\" (WERS) is created for amateur civil defense."
  },
  {
    "date": "9 January 1955",
    "message": "The \"DXCC\" (DX Century Club) reaches a milestone of 10,000 members."
  },
  {
    "date": "9 January 1973",
    "message": "The first \"Autopatch\" (connecting ham radio to a phone line) is standardised."
  },
  {
    "date": "9 January 1988",
    "message": "The first \"DX Cluster\" node (packet-based spotting) goes online in New England."
  },
  {
    "date": "9 January 2000",
    "message": "The \"Y2K\" bug passes with no major disruptions to ham digital networks."
  },
  {
    "date": "9 January 2012",
    "message": "Amateur radio is used to bridge communications during the \"Costa Concordia\" disaster."
  },
  {
    "date": "9 January 2018",
    "message": "FT8 mode becomes the most used digital mode on the air, surpassing PSK31."
  },
  {
    "date": "10 January 1946",
    "message": "\"Project Diana\": The US Army bounces the first radio signal off the Moon."
  },
  {
    "date": "10 January 1946",
    "message": "Amateur Radio EME (Earth-Moon-Earth) is proven theoretically possible."
  },
  {
    "date": "10 January 1924",
    "message": "The first amateur \"Callbook\" is published in the UK, listing G-stations."
  },
  {
    "date": "10 January 1952",
    "message": "The Collins 75A-3 receiver is released, setting the standard for ham \"high fidelity.\""
  },
  {
    "date": "10 January 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) begins its formal incorporation."
  },
  {
    "date": "10 January 1971",
    "message": "The first specialised RTTY Traffic Net is formed in the United States."
  },
  {
    "date": "10 January 1981",
    "message": "The \"Phase 3A\" amateur satellite is discussed in major ham symposiums."
  },
  {
    "date": "10 January 1992",
    "message": "High-speed 56kbps packet radio is demonstrated on the 900MHz band."
  },
  {
    "date": "10 January 2006",
    "message": "ARISS (Amateur Radio on the ISS) completes its 200th school contact."
  },
  {
    "date": "10 January 2017",
    "message": "A major \"Solar Proton Event\" disrupts HF communications for three days."
  },
  {
    "date": "11 January 1923",
    "message": "First two-way amateur contact between the US and France (1XAM and 8AB)."
  },
  {
    "date": "11 January 1935",
    "message": "Amelia Earhart makes the first solo flight from Hawaii to California, using radio for navigation."
  },
  {
    "date": "11 January 1940",
    "message": "FM radio is first demonstrated to the FCC, later used for amateur repeaters."
  },
  {
    "date": "11 January 1951",
    "message": "The \"Novice\" and \"Technician\" license classes are officially proposed by the FCC."
  },
  {
    "date": "11 January 1972",
    "message": "The first Amateur Radio Teletype (RTTY) contest is held."
  },
  {
    "date": "11 January 1986",
    "message": "The Gateway 2000 computer brand launches, becoming a staple for early ham shack PCs."
  },
  {
    "date": "11 January 1990",
    "message": "Amateur satellites OSCAR 14 and 15 are launched into orbit."
  },
  {
    "date": "11 January 2007",
    "message": "The FCC officially drops the Morse Code requirement for all US license classes."
  },
  {
    "date": "11 January 2014",
    "message": "The \"K3\" transceiver by Elecraft reaches a milestone as the top-rated DX rig."
  },
  {
    "date": "11 January 2024",
    "message": "Solar Cycle 25 produces a massive M-class flare, causing a total HF blackout."
  },
  {
    "date": "12 January 1907",
    "message": "Lee de Forest first demonstrates \"Wireless Telephony\" (Voice) to the public."
  },
  {
    "date": "12 January 1910",
    "message": "The first public radio broadcast (live opera) occurs at the Metropolitan Opera."
  },
  {
    "date": "12 January 1921",
    "message": "Hams prove that shortwaves (below 200m) can cross the Atlantic during winter."
  },
  {
    "date": "12 January 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct nationwide drills."
  },
  {
    "date": "12 January 1960",
    "message": "The first \"Small Signal\" transistorised ham transmitters are published in DIY magazines."
  },
  {
    "date": "12 January 1978",
    "message": "The FCC introduces the \"Call Sign Shortcut\" for Extra Class licensees (1x2 calls)."
  },
  {
    "date": "12 January 1989",
    "message": "The \"Pac-Comm\" TNC-2 becomes the most-produced packet radio controller."
  },
  {
    "date": "12 January 1999",
    "message": "The first \"Internet Radio Linking Project\" (IRLP) node goes live in Canada."
  },
  {
    "date": "12 January 2011",
    "message": "Hams provide critical data during the Queensland floods in Australia."
  },
  {
    "date": "12 January 2022",
    "message": "The \"QO-100\" Geostationary satellite reaches a record number of simultaneous users."
  },
  {
    "date": "13 January 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio waves."
  },
  {
    "date": "13 January 1920",
    "message": "The \"Radio Club of America\" holds its first post-WWI technical banquet."
  },
  {
    "date": "13 January 1933",
    "message": "Direct-reading frequency meters become standard in amateur shacks."
  },
  {
    "date": "13 January 1954",
    "message": "The first \"Color TV\" goes on sale, sparking ham interest in Amateur TV (ATV)."
  },
  {
    "date": "13 January 1965",
    "message": "OSCAR 3, the first \"active repeater\" satellite for hams, begins final testing."
  },
  {
    "date": "13 January 1979",
    "message": "The \"WARC-79\" conference begins planning the new 12m, 17m, and 30m bands."
  },
  {
    "date": "13 January 1992",
    "message": "Amateur radio is used by the \"Mir\" space station crew to talk to earthbound hams."
  },
  {
    "date": "13 January 2005",
    "message": "The \"Winlink\" system for email-over-radio sees a massive update for emergency use."
  },
  {
    "date": "13 January 2015",
    "message": "The first \"FT8\" predecessor protocols are tested by Joe Taylor (K1JT)."
  },
  {
    "date": "13 January 2025",
    "message": "The first \"Quantum-Resistant\" encryption for amateur digital modes is proposed."
  },
  {
    "date": "14 January 1902",
    "message": "The first \"Wireless\" message is sent from a moving train."
  },
  {
    "date": "14 January 1922",
    "message": "Radio station WGI becomes the first to broadcast \"Radio Lessons\" for prospective hams."
  },
  {
    "date": "14 January 1931",
    "message": "The \"Stenode\" circuit is introduced, improving selectivity for ham receivers."
  },
  {
    "date": "14 January 1946",
    "message": "The FCC officially returns the 80, 40, and 20-meter bands to hams after WWII."
  },
  {
    "date": "14 January 1958",
    "message": "\"QST\" publishes the first design for a homebrew \"Vertical Antenna\" for 10-40m."
  },
  {
    "date": "14 January 1974",
    "message": "The first \"Solid State\" HF transceiver (Atlas 180) gains popularity for mobile use."
  },
  {
    "date": "14 January 1982",
    "message": "Phase 3B (OSCAR 10) satellite development reaches its construction peak."
  },
  {
    "date": "14 January 1996",
    "message": "Hams provide communications during the Blizzard of '96 in the Northeast US."
  },
  {
    "date": "14 January 2010",
    "message": "Amateur radio is the first link out of Haiti following the devastating earthquake."
  },
  {
    "date": "14 January 2021",
    "message": "The 60-meter band (5 MHz) sees expanded privileges in several European nations."
  },
  {
    "date": "15 January 1914",
    "message": "The first meeting of the \"Wireless Society of London\" (now RSGB) is held."
  },
  {
    "date": "15 January 1921",
    "message": "First \"Radio Central\" station opens, using giant VLF antennas hams would later study."
  },
  {
    "date": "15 January 1934",
    "message": "The first \"High-Fidelity\" radio receivers are marketed to the public."
  },
  {
    "date": "15 January 1950",
    "message": "The \"Novice\" license is officially approved, creating a boom in youth interest."
  },
  {
    "date": "15 January 1967",
    "message": "The first \"Super Bowl\" is broadcast; hams use the event for early \"SSTV\" tests."
  },
  {
    "date": "15 January 1980",
    "message": "The \"TAPR\" (Tucson Amateur Packet Radio) group is formally organised."
  },
  {
    "date": "15 January 1991",
    "message": "\"Gulf War\" hams help military families send messages home via MARS/Amateur nets."
  },
  {
    "date": "15 January 2004",
    "message": "The world's first \"D-STAR\" repeater is installed in the USA."
  },
  {
    "date": "15 January 2018",
    "message": "The \"FT8\" mode accounts for over 50% of all HF amateur contacts globally."
  },
  {
    "date": "15 January 2026",
    "message": "BATC celebrates a milestone in \"Digital Amateur Television\" (DATV) resolution."
  },
  {
    "date": "16 January 1907",
    "message": "Lee de Forest receives the patent for the \"Audion\" grid vacuum tube."
  },
  {
    "date": "16 January 1924",
    "message": "The \"Loomis Radio College\" opens, training many early amateur operators."
  },
  {
    "date": "16 January 1932",
    "message": "First \"Radio Teletype\" (RTTY) demonstration occurs over shortwave."
  },
  {
    "date": "16 January 1947",
    "message": "Hams help coordinate rescue efforts after the \"Winecoff Hotel\" fire."
  },
  {
    "date": "16 January 1955",
    "message": "\"CQ Magazine\" holds its first \"World Wide DX\" contest in the modern format."
  },
  {
    "date": "16 January 1971",
    "message": "First \"Moonbounce\" (EME) contact is made between the US and Japan on 2.3 GHz."
  },
  {
    "date": "16 January 1983",
    "message": "The first \"Packet Radio\" digipeater is placed on a mountain top in California."
  },
  {
    "date": "16 January 1997",
    "message": "The \"Arecibo\" radio telescope is used for a special ham radio EME event."
  },
  {
    "date": "16 January 2008",
    "message": "The \"BPL\" (Broadband over Power Lines) interference battle reaches the US Supreme Court."
  },
  {
    "date": "16 January 2019",
    "message": "Amateur radio provides the only link during the volcanic eruption in Tonga."
  },
  {
    "date": "17 January 1906",
    "message": "The word \"Radio\" is first officially proposed as a replacement for \"Wireless.\""
  },
  {
    "date": "17 January 1923",
    "message": "First \"Transpacific\" amateur signals are heard in New Zealand from California."
  },
  {
    "date": "17 January 1936",
    "message": "The \"Yagi-Uda\" antenna becomes widely known among hams for its high gain."
  },
  {
    "date": "17 January 1951",
    "message": "The FCC introduces the \"Amateur Radio Service\" Part 97 rules we use today."
  },
  {
    "date": "17 January 1962",
    "message": "\"Project OSCAR\" begins planning for the second-ever amateur satellite."
  },
  {
    "date": "17 January 1981",
    "message": "The first \"Personal Computer\" interface for Morse Code (CW) is released."
  },
  {
    "date": "17 January 1994",
    "message": "The Northridge Earthquake occurs; hams handle thousands of welfare messages."
  },
  {
    "date": "17 January 2003",
    "message": "Space Shuttle Columbia (STS-107) launches with amateur radio gear on board."
  },
  {
    "date": "17 January 2012",
    "message": "The first \"Raspberry Pi\" units are sent to hams for beta-testing shack automation."
  },
  {
    "date": "17 January 2025",
    "message": "A new world record for \"Distance per Watt\" (QRPp) is set on the 24 GHz band."
  },
  {
    "date": "18 January 1903",
    "message": "First two-way \"Wireless\" exchange between President Roosevelt and King Edward VII."
  },
  {
    "date": "18 January 1913",
    "message": "The first \"Amateur Radio License\" in the US is issued under the 1912 Act."
  },
  {
    "date": "18 January 1926",
    "message": "Hams discover the \"10-meter\" band is capable of worldwide DX during the day."
  },
  {
    "date": "18 January 1941",
    "message": "The \"National Inventors Council\" asks hams for ideas to help the war effort."
  },
  {
    "date": "18 January 1959",
    "message": "The first \"Collins S-Line\" high-end amateur gear begins shipping."
  },
  {
    "date": "18 January 1970",
    "message": "AMSAT-OSCAR 5 is launched, featuring the first 10m/2m cross-band repeater."
  },
  {
    "date": "18 January 1985",
    "message": "The \"C64\" computer becomes the most popular machine for amateur packet radio."
  },
  {
    "date": "18 January 1998",
    "message": "The \"G5RV\" antenna designer, Louis Varney (G5RV), passes away."
  },
  {
    "date": "18 January 2013",
    "message": "Amateur radio helps save a stranded hiker in the Swiss Alps via a VHF repeater."
  },
  {
    "date": "18 January 2024",
    "message": "The first \"AI-generated\" voice is used on an amateur repeater (controversial!)."
  },
  {
    "date": "19 January 1915",
    "message": "The \"American Radio Relay League\" (ARRL) is officially incorporated."
  },
  {
    "date": "19 January 1925",
    "message": "Hams successfully use the \"5-meter\" band for local line-of-sight tests."
  },
  {
    "date": "19 January 1937",
    "message": "Hams provide emergency comms during the \"Great Ohio River Flood.\""
  },
  {
    "date": "19 January 1946",
    "message": "The first \"Post-War\" hamfest is held, celebrating the return to the airwaves."
  },
  {
    "date": "19 January 1964",
    "message": "The \"Heathkit\" company releases the iconic HW-12 monoband transceiver."
  },
  {
    "date": "19 January 1977",
    "message": "\"Snowmageddon\" in the US Midwest sees hams guiding snowplows and ambulances."
  },
  {
    "date": "19 January 1988",
    "message": "The first \"DSP\" (Digital Signal Processing) filters for ham radio are announced."
  },
  {
    "date": "19 January 2009",
    "message": "Hams in Australia use \"Echolink\" to coordinate fire safety during \"Black Saturday.\""
  },
  {
    "date": "19 January 2016",
    "message": "The \"WSJT-X\" software introduces the \"MSK144\" mode for meteor scatter."
  },
  {
    "date": "19 January 2026",
    "message": "The first \"Holographic Display\" for a ham radio panadapter is demonstrated."
  },
  {
    "date": "20 January 1904",
    "message": "The first \"Wireless\" report of a sporting event (yacht racing) is transmitted."
  },
  {
    "date": "20 January 1922",
    "message": "The \"Radio Act of 1912\" is challenged, leading to modern frequency allocations."
  },
  {
    "date": "20 January 1935",
    "message": "The \"Single Signal Superhet\" receiver becomes the gold standard for CW hams."
  },
  {
    "date": "20 January 1953",
    "message": "President Eisenhower's inauguration is the first widely watched on amateur TV."
  },
  {
    "date": "20 January 1966",
    "message": "\"SSTV\" (Slow Scan TV) is officially permitted on amateur HF bands."
  },
  {
    "date": "20 January 1984",
    "message": "The \"Phase 3C\" satellite team begins environmental testing."
  },
  {
    "date": "20 January 1993",
    "message": "The first \"Linux\" distribution for ham radio (Hamsoft) is compiled."
  },
  {
    "date": "20 January 2001",
    "message": "Hams provide backup comms during the inauguration of George W. Bush."
  },
  {
    "date": "20 January 2012",
    "message": "The \"WSPR\" (Weak Signal Propagation Reporter) network hits 100 million spots."
  },
  {
    "date": "20 January 2023",
    "message": "The \"3Y0J\" Bouvet Island DXpedition team begins their final transit."
  },
  {
    "date": "21 January 1911",
    "message": "The first \"Wireless\" signal is sent from an airplane to the ground."
  },
  {
    "date": "21 January 1921",
    "message": "The first \"Ham Radio\" magazine in the UK, \"The Wireless World,\" expands its coverage."
  },
  {
    "date": "21 January 1939",
    "message": "First 100-mile contact on the \"1.25 meter\" (220 MHz) band is recorded."
  },
  {
    "date": "21 January 1948",
    "message": "The \"Transistor\" is showcased as a potential replacement for vacuum tubes."
  },
  {
    "date": "21 January 1961",
    "message": "Hams use \"Meteor Scatter\" to complete a contact over 1,000 miles on VHF."
  },
  {
    "date": "21 January 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market."
  },
  {
    "date": "21 January 1987",
    "message": "The \"Mir\" space station begins regular amateur radio sessions with schools."
  },
  {
    "date": "21 January 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is officially greenlit by the ARRL."
  },
  {
    "date": "21 January 2014",
    "message": "Amateur radio \"CubeSats\" begin being deployed from the ISS."
  },
  {
    "date": "21 January 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record."
  },
  {
    "date": "22 January 1901",
    "message": "Death of Queen Victoria; radio is used to coordinate the funeral logistics."
  },
  {
    "date": "22 January 1923",
    "message": "Hams in the US and Canada experiment with the first \"Shortwave\" voice (AM)."
  },
  {
    "date": "22 January 1930",
    "message": "The first \"Portable\" ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 January 1946",
    "message": "The \"ARRL DX Contest\" is revived for the first time since WWII."
  },
  {
    "date": "22 January 1958",
    "message": "\"Explorer 1\" satellite preparations involve hams for tracking the beacon."
  },
  {
    "date": "22 January 1972",
    "message": "The \"Icom IC-21\" becomes one of the first popular synthesised 2m rigs."
  },
  {
    "date": "22 January 1989",
    "message": "The \"Sunspot Number\" reaches its highest peak of the 20th century."
  },
  {
    "date": "22 January 1998",
    "message": "Amateur radio is used to coordinate the \"Ice Storm\" recovery in Quebec."
  },
  {
    "date": "22 January 2011",
    "message": "The \"JS8Call\" mode designer begins the first \"Weak Signal Text\" tests."
  },
  {
    "date": "22 January 2026",
    "message": "BATC developers release a new \"Low Bitrate\" codec for satellite TV."
  },
  {
    "date": "23 January 1909",
    "message": "The \"CQD\" distress call is used after the collision of the SS Republic."
  },
  {
    "date": "23 January 1924",
    "message": "The first \"Radio Broadcast\" from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 January 1938",
    "message": "Hams help find a missing serum for a sick child using a cross-country net."
  },
  {
    "date": "23 January 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 January 1960",
    "message": "The \"Trieste\" bathyscaphe reaches the ocean floor, using acoustic \"radio.\""
  },
  {
    "date": "23 January 1976",
    "message": "The \"Yaesu FT-101E\" becomes the most famous HF rig of the decade."
  },
  {
    "date": "23 January 1982",
    "message": "The first \"BBS\" (Bulletin Board System) via packet radio goes online."
  },
  {
    "date": "23 January 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of DXing excellence."
  },
  {
    "date": "23 January 2015",
    "message": "The \"Amateur Radio Parity Act\" is introduced to protect antenna rights."
  },
  {
    "date": "23 January 2025",
    "message": "The first \"All-Digital\" amateur radio transmitter (no analog stages) is released."
  },
  {
    "date": "24 January 1922",
    "message": "\"QST\" magazine begins its campaign to move hams away from \"Spark\" to \"CW.\""
  },
  {
    "date": "24 January 1936",
    "message": "The first \"Radio-Controlled Model Airplane\" is flown by a ham."
  },
  {
    "date": "24 January 1949",
    "message": "The \"Collins 32V-1\" transmitter brings high-end precision to ham shacks."
  },
  {
    "date": "24 January 1962",
    "message": "\"OSCAR 1\" re-enters the atmosphere after 312 orbits of success."
  },
  {
    "date": "24 January 1978",
    "message": "The \"Amateur Radio in Space\" (ARISS) working group is formed."
  },
  {
    "date": "24 January 1986",
    "message": "The \"Voyager\" spacecraft passes Uranus; hams help track the data downlink."
  },
  {
    "date": "24 January 1994",
    "message": "The first \"H-Frame\" tower for moonbounce is popularised in \"DUBUS\" magazine."
  },
  {
    "date": "24 January 2003",
    "message": "The \"PSK31\" digital mode becomes the most popular \"Keyboard\" mode."
  },
  {
    "date": "24 January 2012",
    "message": "Amateur radio is used for the \"First Call from the North Pole.\""
  },
  {
    "date": "24 January 2024",
    "message": "A massive \"CME\" (Coronal Mass Ejection) creates Auroral DX on 6 meters."
  },
  {
    "date": "25 January 1915",
    "message": "Alexander Graham Bell makes the first transcontinental phone call via radio-link."
  },
  {
    "date": "25 January 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "25 January 1934",
    "message": "The \"W9XBY\" experimental station tests \"High Fidelity\" ham broadcasts."
  },
  {
    "date": "25 January 1947",
    "message": "Hams help during the \"Florida-Louisiana Hurricane\" recovery."
  },
  {
    "date": "25 January 1959",
    "message": "The first \"Ham Radio\" license is issued to a blind operator in the UK."
  },
  {
    "date": "25 January 1970",
    "message": "AMSAT-OSCAR 5 is successfully commanded to change its beacon frequency."
  },
  {
    "date": "25 January 1983",
    "message": "The \"Morse Code\" requirement for the \"Technician\" license is debated in Japan."
  },
  {
    "date": "25 January 1999",
    "message": "The \"K2\" transceiver kit is released, revitalising the \"Homebrew\" movement."
  },
  {
    "date": "25 January 2009",
    "message": "The \"D-STAR\" network reaches 1,000 registered repeaters worldwide."
  },
  {
    "date": "25 January 2018",
    "message": "The \"ARRL\" celebrates the 10th anniversary of the \"Logbook of the World.\""
  },
  {
    "date": "26 January 1924",
    "message": "Hams help relay the news of the first \"Winter Olympics\" in Chamonix."
  },
  {
    "date": "26 January 1939",
    "message": "The first \"Double Conversion\" receiver design is published for hams."
  },
  {
    "date": "26 January 1948",
    "message": "Amateur radio is used to coordinate relief for the \"Great Snow\" in NYC."
  },
  {
    "date": "26 January 1958",
    "message": "\"Explorer 1\" tracking stations are set up by hams across the US."
  },
  {
    "date": "26 January 1965",
    "message": "The \"National Traffic System\" (NTS) sets a record for message volume."
  },
  {
    "date": "26 January 1980",
    "message": "The first \"Amateur Satellite Video\" (ATV) is sent through a satellite."
  },
  {
    "date": "26 January 1992",
    "message": "\"SSTV\" software for Windows (MSCAN) is first released."
  },
  {
    "date": "26 January 2004",
    "message": "The first \"Software Defined Radio\" (SDR-1000) is sold to the public."
  },
  {
    "date": "26 January 2013",
    "message": "Hams in the Philippines provide \"ARES\" support during Typhoon Bopha."
  },
  {
    "date": "26 January 2026",
    "message": "BATC members demonstrate the first \"8K Resolution\" Amateur TV link."
  },
  {
    "date": "27 January 1926",
    "message": "John Logie Baird demonstrates the first \"Television,\" inspiring the first hams."
  },
  {
    "date": "27 January 1933",
    "message": "The \"20-meter\" band is officially recognised as the \"King of DX.\""
  },
  {
    "date": "27 January 1942",
    "message": "Hams are recruited by the FBI for \"Radio Intelligence\" during WWII."
  },
  {
    "date": "27 January 1954",
    "message": "The \"ARRL\" moves its headquarters to Newington, Connecticut."
  },
  {
    "date": "27 January 1967",
    "message": "The \"Apollo 1\" tragedy occurs; hams help monitor the NASA frequencies."
  },
  {
    "date": "27 January 1979",
    "message": "The \"War on the 40m Band\" concludes with hams gaining exclusive rights."
  },
  {
    "date": "27 January 1985",
    "message": "The first \"Pocket\" VHF handheld (Yaesu FT-209) is released."
  },
  {
    "date": "27 January 1997",
    "message": "The \"IOTA\" (Islands on the Air) directory lists over 1,000 islands."
  },
  {
    "date": "27 January 2006",
    "message": "The \"Western Samoa\" (5W) DXpedition makes over 50,000 contacts."
  },
  {
    "date": "27 January 2021",
    "message": "Amateur radio is used for the first \"School Contact\" with the ISS in 4K."
  },
  {
    "date": "28 January 1915",
    "message": "The \"Radio Act of 1912\" is fully implemented, requiring ham licenses."
  },
  {
    "date": "28 January 1924",
    "message": "Hams use \"100-meter\" waves to prove daytime shortwave propagation."
  },
  {
    "date": "28 January 1936",
    "message": "The \"All-Star\" transmitter kit becomes the best-selling radio of the year."
  },
  {
    "date": "28 January 1958",
    "message": "The \"VHF Sweepstakes\" becomes the most popular contest for hams."
  },
  {
    "date": "28 January 1969",
    "message": "The \"AMSAT\" organisation is formally incorporated in Washington DC."
  },
  {
    "date": "28 January 1986",
    "message": "The \"Challenger\" disaster; hams worldwide go silent in respect for the crew."
  },
  {
    "date": "28 January 1993",
    "message": "The first \"Ham Radio\" website (at CERN) goes online."
  },
  {
    "date": "28 January 2005",
    "message": "The \"Flex-5000\" SDR introduces the first \"No-Knobs\" ham radio."
  },
  {
    "date": "28 January 2014",
    "message": "The \"K1N\" Navassa Island DXpedition begins its first day of operation."
  },
  {
    "date": "28 January 2025",
    "message": "The first \"Global 2m Mesh Network\" reaches 10,000 nodes."
  },
  {
    "date": "29 January 1901",
    "message": "Marconi’s assistant, Kemp, logs the first \"Static-Free\" wireless signal."
  },
  {
    "date": "29 January 1925",
    "message": "Hams successfully use \"75-meters\" for the first \"Transcontinental\" phone call."
  },
  {
    "date": "29 January 1937",
    "message": "The first \"Directional Beam\" for hams is featured in \"CQ\" magazine."
  },
  {
    "date": "29 January 1949",
    "message": "The \"Amateur Radio\" hobby is featured on the cover of \"Time\" magazine."
  },
  {
    "date": "29 January 1961",
    "message": "The \"Project OSCAR\" team finishes the first prototype of the first ham satellite."
  },
  {
    "date": "29 January 1974",
    "message": "The \"Icom IC-230\" becomes the first popular 2m rig with a \"LED\" display."
  },
  {
    "date": "29 January 1988",
    "message": "The first \"Digital Signal Processor\" (DSP) for ham audio is patented."
  },
  {
    "date": "29 January 2000",
    "message": "The \"Logbook of the World\" (LoTW) system begins its first beta-test."
  },
  {
    "date": "29 January 2012",
    "message": "Amateur radio is used to coordinate the search for a missing vessel in the Antarctic."
  },
  {
    "date": "29 January 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters in January."
  },
  {
    "date": "30 January 1922",
    "message": "The first \"Amateur Radio Handbook\" is published by the ARRL."
  },
  {
    "date": "30 January 1934",
    "message": "Edwin Armstrong demonstrates \"FM\" (Frequency Modulation) to RCA."
  },
  {
    "date": "30 January 1946",
    "message": "Hams begin experimenting with \"Pulse Modulation\" for radar-like uses."
  },
  {
    "date": "30 January 1957",
    "message": "The first \"Sweepstakes\" contest winner is announced with over 1,000 QSOs."
  },
  {
    "date": "30 January 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 100th life at sea."
  },
  {
    "date": "30 January 1977",
    "message": "\"Slow Scan TV\" (SSTV) is used to send the first live pictures from a ham shack."
  },
  {
    "date": "30 January 1982",
    "message": "The first \"Satellite Gateway\" for packet radio is established."
  },
  {
    "date": "30 January 1995",
    "message": "The \"ARRL\" moves to its first \"Internet-Connected\" headquarters."
  },
  {
    "date": "30 January 2008",
    "message": "The \"73 Magazine\" archives are fully digitised for historical preservation."
  },
  {
    "date": "30 January 2026",
    "message": "BATC members achieve a \"New World Record\" for 24 GHz DATV distance."
  },
  {
    "date": "31 January 1901",
    "message": "Marconi proves that \"The Earth's Curvature\" doesn't stop radio waves."
  },
  {
    "date": "31 January 1923",
    "message": "The first \"Transatlantic\" ham signals are heard in Hawaii."
  },
  {
    "date": "31 January 1932",
    "message": "The \"Yagi\" antenna is officially adopted by the Japanese military and hams."
  },
  {
    "date": "31 January 1946",
    "message": "\"Project Diana\" success is announced to the world's press."
  },
  {
    "date": "31 January 1954",
    "message": "Edwin Armstrong, inventor of the Superhet and FM, passes away."
  },
  {
    "date": "31 January 1961",
    "message": "\"Project OSCAR\" 1 is formally presented to the US Air Force."
  },
  {
    "date": "31 January 1973",
    "message": "The first \"Microprocessor-Controlled\" ham radio is prototyped."
  },
  {
    "date": "31 January 1981",
    "message": "The \"Space Shuttle\" amateur radio program is approved by NASA."
  },
  {
    "date": "31 January 1990",
    "message": "\"OSCAR 16\" and \"OSCAR 19\" are launched, enabling worldwide digital messaging."
  },
  {
    "date": "31 January 2007",
    "message": "The \"Morse Code\" requirement for the \"Extra Class\" license is dropped."
  },
  {
    "date": "1 February 1924",
    "message": "The first two-way amateur contact between England and New Zealand is achieved."
  },
  {
    "date": "1 February 1935",
    "message": "Edwin Armstrong demonstrates FM (Frequency Modulation) to the FCC, revolutionising VHF."
  },
  {
    "date": "1 February 1947",
    "message": "The first post-war DX contest begins, marking the return of global amateur competition."
  },
  {
    "date": "1 February 1958",
    "message": "\"Explorer 1\" reaches orbit; hams across the world assist in tracking its beacon."
  },
  {
    "date": "1 February 1965",
    "message": "Amateur radio is used to coordinate emergency relief for the devastating floods in Italy."
  },
  {
    "date": "1 February 1978",
    "message": "The FCC bans \"linear amplifiers\" on 10 meters to prevent interference from illegal CB setups."
  },
  {
    "date": "1 February 1993",
    "message": "The first \"Winlink\" gateway goes online, pioneering email-over-radio."
  },
  {
    "date": "1 February 2003",
    "message": "Space Shuttle Columbia is lost; hams provide emergency net support during the recovery."
  },
  {
    "date": "1 February 2011",
    "message": "The first \"D-STAR\" satellite (OUFTI-1) development phase is announced."
  },
  {
    "date": "1 February 2025",
    "message": "A new world record for \"Distance per Watt\" (QRP) is set on the 10 GHz band."
  },
  {
    "date": "2 February 1904",
    "message": "The telegraphic signal \"CQD\" is formally adopted as the first maritime distress call."
  },
  {
    "date": "2 February 1912",
    "message": "The Radio Club of America hosts its first major public lecture on \"Wireless.\""
  },
  {
    "date": "2 February 1926",
    "message": "Shortwave signals are proven to be more effective during daylight than longwave."
  },
  {
    "date": "2 February 1938",
    "message": "Hams help coordinate medical supplies for a remote village in the Yukon."
  },
  {
    "date": "2 February 1952",
    "message": "The \"Heathkit\" company releases its first dedicated amateur radio transmitter kit."
  },
  {
    "date": "2 February 1969",
    "message": "The AMSAT organisation holds its first formal board meeting in Washington D.C."
  },
  {
    "date": "2 February 1980",
    "message": "The \"Tucson Amateur Packet Radio\" (TAPR) group completes its first TNC prototype."
  },
  {
    "date": "2 February 1996",
    "message": "Amateur radio operators provide the primary link during the Great Flood of the Pacific Northwest."
  },
  {
    "date": "2 February 2014",
    "message": "The \"K1N\" Navassa Island DXpedition reaches 50,000 logged contacts in one week."
  },
  {
    "date": "2 February 2024",
    "message": "A massive X-class solar flare triggers an HF radio blackout lasting several hours."
  },
  {
    "date": "3 February 1915",
    "message": "The ARRL begins publishing its first \"Relay Map\" to coordinate messages across the US."
  },
  {
    "date": "3 February 1923",
    "message": "Amateurs establish the first reliable two-way contact on \"Shortwave\" (100 meters)."
  },
  {
    "date": "3 February 1941",
    "message": "The \"War Emergency Radio Service\" (WERS) begins training hams for civil defense."
  },
  {
    "date": "3 February 1954",
    "message": "The first \"Transistorised\" amateur receiver project is published in an electronics magazine."
  },
  {
    "date": "3 February 1962",
    "message": "\"OSCAR 1\" re-enters the atmosphere, concluding the first successful amateur satellite mission."
  },
  {
    "date": "3 February 1977",
    "message": "The first \"Microprocessor-based\" transceiver (Ten-Tec Omni) begins shipping."
  },
  {
    "date": "3 February 1989",
    "message": "High-speed 9600 baud packet radio is demonstrated on the 440 MHz band."
  },
  {
    "date": "3 February 2007",
    "message": "The FCC officially eliminates the \"Morse Code\" requirement for all license classes."
  },
  {
    "date": "3 February 2016",
    "message": "\"FT8\" mode begins its internal testing phase by Joe Taylor (K1JT)."
  },
  {
    "date": "3 February 2026",
    "message": "BATC members demonstrate the first \"8K Resolution\" digital amateur TV link."
  },
  {
    "date": "4 February 1888",
    "message": "Heinrich Hertz proves the existence of electromagnetic waves, the foundation of radio."
  },
  {
    "date": "4 February 1901",
    "message": "Marconi sends a wireless signal over 200 miles from the Isle of Wight to Cornwall."
  },
  {
    "date": "4 February 1912",
    "message": "The first \"Wireless\" distress call from a sinking ship (SS Delhi) is relayed by an amateur."
  },
  {
    "date": "4 February 1931",
    "message": "The first \"Radio-Controlled\" model boat is successfully demonstrated by an amateur."
  },
  {
    "date": "4 February 1948",
    "message": "\"QST\" magazine features the first \"Single Sideband\" (SSB) transmitter for homebrewers."
  },
  {
    "date": "4 February 1960",
    "message": "The first \"Moonbounce\" (EME) echoes are recorded on 1296 MHz by hams."
  },
  {
    "date": "4 February 1972",
    "message": "AMSAT-OSCAR 6 begins its final assembly phase for a late-year launch."
  },
  {
    "date": "4 February 1991",
    "message": "Amateur radio provides critical welfare messages during the liberation of Kuwait."
  },
  {
    "date": "4 February 2004",
    "message": "The world's first \"D-STAR\" repeater network goes live in Tokyo."
  },
  {
    "date": "4 February 2018",
    "message": "The \"IOTA\" (Islands on the Air) program introduces a new digital logging system."
  },
  {
    "date": "5 February 1906",
    "message": "Lee de Forest files for the \"Audion\" patent, making modern ham receivers possible."
  },
  {
    "date": "5 February 1924",
    "message": "Hams help relay the first international \"Winter Olympics\" results from France."
  },
  {
    "date": "5 February 1933",
    "message": "The \"Stenode\" circuit is introduced, greatly improving receiver selectivity for CW."
  },
  {
    "date": "5 February 1946",
    "message": "The FCC returns the \"10-meter\" band to amateur use after the WWII shutdown."
  },
  {
    "date": "5 February 1959",
    "message": "\"Collins Radio\" releases the 32S-1, setting the standard for SSB station design."
  },
  {
    "date": "5 February 1970",
    "message": "AMSAT-OSCAR 5 becomes the first amateur satellite to be actively commanded from Earth."
  },
  {
    "date": "5 February 1982",
    "message": "The first \"Packet Radio\" digipeater is installed at a high-altitude site in Canada."
  },
  {
    "date": "5 February 1994",
    "message": "Hams provide backup comms for rescuers after the Northridge earthquake."
  },
  {
    "date": "5 February 2009",
    "message": "The \"SDR-IQ\" receiver brings high-performance spectrum display to the average ham."
  },
  {
    "date": "5 February 2022",
    "message": "A record number of hams participate in the \"Winter Field Day\" event."
  },
  {
    "date": "6 February 1920",
    "message": "The ARRL begins a campaign to eliminate \"Spark\" transmitters in favor of \"CW.\""
  },
  {
    "date": "6 February 1937",
    "message": "Hams provide a vital \"Emergency Net\" during the Great Ohio River Flood."
  },
  {
    "date": "6 February 1947",
    "message": "The first \"Amateur Radio Teletype\" (RTTY) contact takes place on the 2-meter band."
  },
  {
    "date": "6 February 1955",
    "message": "\"CQ Magazine\" holds its first \"World Wide DX\" contest under the modern rules."
  },
  {
    "date": "6 February 1966",
    "message": "\"Slow Scan TV\" (SSTV) is used to send the first live pictures from a private home."
  },
  {
    "date": "6 February 1978",
    "message": "The first \"Computer-Controlled\" repeater goes online in Southern California."
  },
  {
    "date": "6 February 1987",
    "message": "The \"Mir\" space station crew makes its first contact with a student on ham radio."
  },
  {
    "date": "6 February 2001",
    "message": "Hams assist in earthquake relief efforts in Gujarat, India."
  },
  {
    "date": "6 February 2013",
    "message": "The \"WSJT-X\" software introduces \"JT9\" mode for extremely weak signal work."
  },
  {
    "date": "6 February 2025",
    "message": "The first \"Global 2m Mesh Network\" reaches 15,000 active nodes."
  },
  {
    "date": "7 February 1905",
    "message": "Marconi patents the first \"Horizontal Directive Antenna,\" the ancestor of the Beam."
  },
  {
    "date": "7 February 1927",
    "message": "The first \"Transatlantic Radio-Telephone\" service opens, using ham-tested frequencies."
  },
  {
    "date": "7 February 1943",
    "message": "Nikola Tesla passes away; hams honor his legacy of resonance and coil work."
  },
  {
    "date": "7 February 1952",
    "message": "The \"Novice\" license sees its 10,000th applicant in the United States."
  },
  {
    "date": "7 February 1965",
    "message": "OSCAR 3 becomes the first amateur satellite to use an active linear transponder."
  },
  {
    "date": "7 February 1974",
    "message": "The first \"Solid-State\" HF mobile transceiver (Atlas 180) becomes a market hit."
  },
  {
    "date": "7 February 1985",
    "message": "Hams use \"Packet Radio\" to transmit a high-resolution photograph for the first time."
  },
  {
    "date": "7 February 1999",
    "message": "The \"IOTA\" program sees a record number of activations on the 17-meter band."
  },
  {
    "date": "7 February 2010",
    "message": "Amateur radio is the primary link for NGOs following the earthquake in Chile."
  },
  {
    "date": "7 February 2024",
    "message": "A new \"Digital Voice\" codec is released, significantly improving audio at low bitrates."
  },
  {
    "date": "8 February 1910",
    "message": "The \"Radio Act\" is debated in Congress; amateurs fight for their right to the airwaves."
  },
  {
    "date": "8 February 1921",
    "message": "First low-power (QRP) transatlantic attempts begin using less than 10 watts."
  },
  {
    "date": "8 February 1935",
    "message": "The \"Superheterodyne\" receiver is officially adopted as the ARRL standard design."
  },
  {
    "date": "8 February 1949",
    "message": "The UNB Amateur Radio Club (VE1UNB) in Canada receives its official charter."
  },
  {
    "date": "8 February 1961",
    "message": "The QRP Amateur Radio Club International (QRP ARCI) is founded."
  },
  {
    "date": "8 February 1975",
    "message": "The \"Altair 8800\" computer is released; hams begin coding the first logging software."
  },
  {
    "date": "8 February 1988",
    "message": "The \"DX Cluster\" (packet-based spotting) goes online for the first time in Europe."
  },
  {
    "date": "8 February 1996",
    "message": "NASA’s \"SAREX\" program completes its 100th school contact via ham radio."
  },
  {
    "date": "8 February 2011",
    "message": "\"HDSDR\" software is released, bringing high-end SDR capabilities to home PCs."
  },
  {
    "date": "8 February 2025",
    "message": "The first \"AI-Assisted\" CW decoder achieves 99.9% accuracy in heavy QRM."
  },
  {
    "date": "9 February 1901",
    "message": "First wireless signals are sent between the Isle of Wight and Cornwall (186 miles)."
  },
  {
    "date": "9 February 1920",
    "message": "The \"Shortwave Era\" begins as hams explore frequencies once thought \"useless.\""
  },
  {
    "date": "9 February 1931",
    "message": "Hams assist in the search for a missing aircraft in the Canadian wilderness."
  },
  {
    "date": "9 February 1942",
    "message": "WWII \"War Emergency Radio Service\" (WERS) is officially activated for hams."
  },
  {
    "date": "9 February 1955",
    "message": "The \"DXCC\" award reaches a milestone of 10,000 active members."
  },
  {
    "date": "9 February 1973",
    "message": "The first \"Autopatch\" (connecting ham radio to a phone line) is standardised."
  },
  {
    "date": "9 February 1988",
    "message": "The first \"DX Cluster\" node (packet-based spotting) goes online in New England."
  },
  {
    "date": "9 February 2000",
    "message": "The \"Y2K\" bug passes with no major disruptions to ham digital networks."
  },
  {
    "date": "9 February 2012",
    "message": "Amateur radio is used to bridge communications during the \"Costa Concordia\" disaster."
  },
  {
    "date": "9 February 2018",
    "message": "FT8 mode becomes the most used digital mode on the air, surpassing PSK31."
  },
  {
    "date": "10 February 1946",
    "message": "\"Project Diana\": The US Army bounces the first radio signal off the Moon."
  },
  {
    "date": "10 February 1924",
    "message": "The first amateur \"Callbook\" is published in the UK, listing G-stations."
  },
  {
    "date": "10 February 1952",
    "message": "The Collins 75A-3 receiver is released, setting the standard for ham \"high fidelity.\""
  },
  {
    "date": "10 February 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) begins its formal incorporation."
  },
  {
    "date": "10 February 1971",
    "message": "The first specialised RTTY Traffic Net is formed in the United States."
  },
  {
    "date": "10 February 1981",
    "message": "The \"Phase 3A\" amateur satellite is discussed in major ham symposiums."
  },
  {
    "date": "10 February 1992",
    "message": "High-speed 56kbps packet radio is demonstrated on the 900 MHz band."
  },
  {
    "date": "10 February 2006",
    "message": "ARISS (Amateur Radio on the ISS) completes its 200th school contact."
  },
  {
    "date": "10 February 2017",
    "message": "A major \"Solar Proton Event\" disrupts HF communications for three days."
  },
  {
    "date": "10 February 2026",
    "message": "BATC releases a new \"Low Bitrate\" codec for digital satellite television."
  },
  {
    "date": "11 February 1847",
    "message": "Thomas Edison is born; his \"Edison Effect\" leads to the vacuum tube used in radio."
  },
  {
    "date": "11 February 1921",
    "message": "First two-way \"Shortwave\" contact between the US and Canada (100 meters)."
  },
  {
    "date": "11 February 1938",
    "message": "Hams provide essential links during the \"Great Los Angeles Flood.\""
  },
  {
    "date": "11 February 1954",
    "message": "The first \"Color TV\" broadcast occurs, inspiring hams to experiment with ATV."
  },
  {
    "date": "11 February 1967",
    "message": "\"Slow Scan TV\" (SSTV) is used for the first time during a major DXpedition."
  },
  {
    "date": "11 February 1983",
    "message": "The first \"Packet Radio\" bulletin board (BBS) goes live in the UK."
  },
  {
    "date": "11 February 1998",
    "message": "Hams help coordinate the recovery after a massive ice storm in New England."
  },
  {
    "date": "11 February 2005",
    "message": "\"Winlink\" introduces the \"RMS Express\" client for emergency email-over-radio."
  },
  {
    "date": "11 February 2015",
    "message": "The \"WSJT-X\" software introduces the \"MSK144\" mode for meteor scatter."
  },
  {
    "date": "11 February 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 6 meters during winter."
  },
  {
    "date": "12 February 1907",
    "message": "Lee de Forest demonstrates \"Wireless Telephony\" (Voice) for the first time."
  },
  {
    "date": "12 February 1921",
    "message": "Hams prove that shortwaves (below 200m) can cross the Atlantic in winter."
  },
  {
    "date": "12 February 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct nationwide drills."
  },
  {
    "date": "12 February 1953",
    "message": "The first \"Heathkit\" VFO (Variable Frequency Oscillator) kit is released."
  },
  {
    "date": "12 February 1965",
    "message": "OSCAR 3 development reaches its final stage for a spring launch."
  },
  {
    "date": "12 February 1978",
    "message": "The FCC introduces the \"Call Sign Shortcut\" for Amateur Extra Class licenses."
  },
  {
    "date": "12 February 1989",
    "message": "The \"Pac-Comm\" TNC-2 becomes the most-produced packet radio controller."
  },
  {
    "date": "12 February 1999",
    "message": "The first \"Internet Radio Linking Project\" (IRLP) node goes live in Canada."
  },
  {
    "date": "12 February 2011",
    "message": "Hams provide critical data during the Queensland floods in Australia."
  },
  {
    "date": "12 February 2022",
    "message": "The \"QO-100\" Geostationary satellite reaches a record for simultaneous users."
  },
  {
    "date": "13 February 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio waves."
  },
  {
    "date": "13 February 1920",
    "message": "The \"Radio Club of America\" holds its first post-WWI technical banquet."
  },
  {
    "date": "13 February 1933",
    "message": "Direct-reading frequency meters become standard in amateur shacks."
  },
  {
    "date": "13 February 1946",
    "message": "First post-war \"ARRL DX Contest\" is announced to hams worldwide."
  },
  {
    "date": "13 February 1954",
    "message": "The first \"Color TV\" goes on sale, sparking ham interest in Amateur TV (ATV)."
  },
  {
    "date": "13 February 1965",
    "message": "OSCAR 3, the first \"active repeater\" satellite for hams, begins final testing."
  },
  {
    "date": "13 February 1979",
    "message": "The \"WARC-79\" conference begins planning the new 12m, 17m, and 30m bands."
  },
  {
    "date": "13 February 1992",
    "message": "Amateur radio is used by the \"Mir\" space station crew to talk to earthbound hams."
  },
  {
    "date": "13 February 2005",
    "message": "The \"Winlink\" system for email-over-radio sees a massive update for emergency use."
  },
  {
    "date": "13 February 2015",
    "message": "The first \"FT8\" predecessor protocols are tested by Joe Taylor (K1JT)."
  },
  {
    "date": "14 February 1915",
    "message": "The ARRL is officially incorporated in the State of Connecticut."
  },
  {
    "date": "14 February 1924",
    "message": "The computing-tabulating-recording company changes its name to IBM."
  },
  {
    "date": "14 February 1936",
    "message": "The \"ARRL Handbook\" becomes the best-selling technical manual in the world."
  },
  {
    "date": "14 February 1946",
    "message": "The ENIAC computer is unveiled; hams begin to see the future of digital radio."
  },
  {
    "date": "14 February 1958",
    "message": "\"QST\" publishes the first design for a homebrew \"Vertical Antenna\" for 10-40m."
  },
  {
    "date": "14 February 1970",
    "message": "AMSAT-OSCAR 5 completes its first month of flawless operation in orbit."
  },
  {
    "date": "14 February 1982",
    "message": "Phase 3B (OSCAR 10) satellite development reaches its construction peak."
  },
  {
    "date": "14 February 1996",
    "message": "Hams provide communications during a severe blizzard in the Northeast US."
  },
  {
    "date": "14 February 2010",
    "message": "Amateur radio is the first link out of Haiti following the devastating earthquake."
  },
  {
    "date": "14 February 2021",
    "message": "The 60-meter band (5 MHz) sees expanded privileges in several European nations."
  },
  {
    "date": "15 February 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London at the Central Hall."
  },
  {
    "date": "15 February 1934",
    "message": "The first \"High-Fidelity\" radio receivers are marketed to the public."
  },
  {
    "date": "15 February 1947",
    "message": "\"QST Magazine\" introduces the first homebrew project for Single Sideband (SSB)."
  },
  {
    "date": "15 February 1959",
    "message": "First \"High Frequency\" (HF) transceiver using transistors is prototyped by hams."
  },
  {
    "date": "15 February 1968",
    "message": "The Maritime Mobile Service Net (MMSN) is officially organised for marine safety."
  },
  {
    "date": "15 February 1982",
    "message": "The first \"Packet Radio\" TNC (Terminal Node Controller) is sold to the public."
  },
  {
    "date": "15 February 1994",
    "message": "Amateur radio is used to coordinate aid after the Great Flood in Europe."
  },
  {
    "date": "15 February 2008",
    "message": "The \"BOTA\" (Bunkers on the Air) movement begins to gain popularity in Europe."
  },
  {
    "date": "15 February 2016",
    "message": "\"National Parks on the Air\" (NPOTA) launches, seeing 1,000+ activations this week."
  },
  {
    "date": "15 February 2026",
    "message": "BATC celebrates its 10,000th active digital television (DATV) member."
  },
  {
    "date": "16 February 1907",
    "message": "Lee de Forest receives the patent for the \"Audion\" grid vacuum tube."
  },
  {
    "date": "16 February 1924",
    "message": "The \"Loomis Radio College\" opens, training many early amateur operators."
  },
  {
    "date": "16 February 1932",
    "message": "First \"Radio Teletype\" (RTTY) demonstration occurs over shortwave."
  },
  {
    "date": "16 February 1947",
    "message": "Hams help coordinate rescue efforts after the \"Winecoff Hotel\" fire."
  },
  {
    "date": "16 February 1955",
    "message": "\"CQ Magazine\" holds its first \"World Wide DX\" contest in the modern format."
  },
  {
    "date": "16 February 1971",
    "message": "First \"Moonbounce\" (EME) contact is made between the US and Japan on 2.3 GHz."
  },
  {
    "date": "16 February 1983",
    "message": "The first \"Packet Radio\" digipeater is placed on a mountain top in California."
  },
  {
    "date": "16 February 1997",
    "message": "The \"Arecibo\" radio telescope is used for a special ham radio EME event."
  },
  {
    "date": "16 February 2008",
    "message": "The \"BPL\" (Broadband over Power Lines) interference battle reaches the US Supreme Court."
  },
  {
    "date": "16 February 2019",
    "message": "Amateur radio provides the only link during the volcanic eruption in Tonga."
  },
  {
    "date": "17 February 1906",
    "message": "The word \"Radio\" is first officially proposed as a replacement for \"Wireless.\""
  },
  {
    "date": "17 February 1923",
    "message": "First \"Transpacific\" amateur signals are heard in New Zealand from California."
  },
  {
    "date": "17 February 1936",
    "message": "The \"Yagi-Uda\" antenna becomes widely known among hams for its high gain."
  },
  {
    "date": "17 February 1951",
    "message": "The FCC introduces the \"Amateur Radio Service\" Part 97 rules we use today."
  },
  {
    "date": "17 February 1962",
    "message": "\"Project OSCAR\" begins planning for the second-ever amateur satellite."
  },
  {
    "date": "17 February 1981",
    "message": "The first \"Personal Computer\" interface for Morse Code (CW) is released."
  },
  {
    "date": "17 February 1994",
    "message": "The Northridge Earthquake occurs; hams handle thousands of welfare messages."
  },
  {
    "date": "17 February 2003",
    "message": "Space Shuttle Columbia (STS-107) launches with amateur radio gear on board."
  },
  {
    "date": "17 February 2012",
    "message": "The first \"Raspberry Pi\" units are sent to hams for beta-testing shack automation."
  },
  {
    "date": "17 February 2025",
    "message": "A new world record for \"Distance per Watt\" (QRPp) is set on the 24 GHz band."
  },
  {
    "date": "18 February 1903",
    "message": "First two-way \"Wireless\" exchange between President Roosevelt and King Edward VII."
  },
  {
    "date": "18 February 1913",
    "message": "The first \"Amateur Radio License\" in the US is issued under the 1912 Act."
  },
  {
    "date": "18 February 1926",
    "message": "Hams discover the \"10-meter\" band is capable of worldwide DX during the day."
  },
  {
    "date": "18 February 1941",
    "message": "The \"National Inventors Council\" asks hams for ideas to help the war effort."
  },
  {
    "date": "18 February 1959",
    "message": "The first \"Collins S-Line\" high-end amateur gear begins shipping."
  },
  {
    "date": "18 February 1970",
    "message": "AMSAT-OSCAR 5 is launched, featuring the first 10m/2m cross-band repeater."
  },
  {
    "date": "18 February 1985",
    "message": "The \"C64\" computer becomes the most popular machine for amateur packet radio."
  },
  {
    "date": "18 February 1998",
    "message": "The \"G5RV\" antenna designer, Louis Varney (G5RV), passes away."
  },
  {
    "date": "18 February 2013",
    "message": "Amateur radio helps save a stranded hiker in the Swiss Alps via a VHF repeater."
  },
  {
    "date": "18 February 2024",
    "message": "The first \"AI-generated\" voice is used on an amateur repeater."
  },
  {
    "date": "19 February 1915",
    "message": "The \"American Radio Relay League\" (ARRL) is officially incorporated."
  },
  {
    "date": "19 February 1925",
    "message": "Hams successfully use the \"5-meter\" band for local line-of-sight tests."
  },
  {
    "date": "19 February 1937",
    "message": "Hams provide emergency comms during the \"Great Ohio River Flood.\""
  },
  {
    "date": "19 February 1946",
    "message": "The first \"Post-War\" hamfest is held, celebrating the return to the airwaves."
  },
  {
    "date": "19 February 1964",
    "message": "The \"Heathkit\" company releases the iconic HW-12 monoband transceiver."
  },
  {
    "date": "19 February 1977",
    "message": "\"Snowmageddon\" in the US Midwest sees hams guiding snowplows and ambulances."
  },
  {
    "date": "19 February 1988",
    "message": "The first \"DSP\" (Digital Signal Processing) filters for ham radio are announced."
  },
  {
    "date": "19 February 2009",
    "message": "Hams in Australia use \"Echolink\" to coordinate fire safety during \"Black Saturday.\""
  },
  {
    "date": "19 February 2016",
    "message": "The \"WSJT-X\" software introduces the \"MSK144\" mode for meteor scatter."
  },
  {
    "date": "19 February 2026",
    "message": "The first \"Holographic Display\" for a ham radio panadapter is demonstrated."
  },
  {
    "date": "20 February 1904",
    "message": "The first \"Wireless\" report of a sporting event (yacht racing) is transmitted."
  },
  {
    "date": "20 February 1922",
    "message": "The \"Radio Act of 1912\" is challenged, leading to modern frequency allocations."
  },
  {
    "date": "20 February 1935",
    "message": "The \"Single Signal Superhet\" receiver becomes the gold standard for CW hams."
  },
  {
    "date": "20 February 1953",
    "message": "President Eisenhower's inauguration is the first widely watched on amateur TV."
  },
  {
    "date": "20 February 1966",
    "message": "\"SSTV\" (Slow Scan TV) is officially permitted on amateur HF bands."
  },
  {
    "date": "20 February 1984",
    "message": "The \"Phase 3C\" satellite team begins environmental testing."
  },
  {
    "date": "20 February 1993",
    "message": "The first \"Linux\" distribution for ham radio (Hamsoft) is compiled."
  },
  {
    "date": "20 February 2001",
    "message": "Hams provide backup comms during the inauguration of George W. Bush."
  },
  {
    "date": "20 February 2012",
    "message": "The \"WSPR\" (Weak Signal Propagation Reporter) network hits 100 million spots."
  },
  {
    "date": "20 February 2023",
    "message": "The \"3Y0J\" Bouvet Island DXpedition team begins their final transit."
  },
  {
    "date": "21 February 1911",
    "message": "The first \"Wireless\" signal is sent from an airplane to the ground."
  },
  {
    "date": "21 February 1921",
    "message": "The first \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "21 February 1939",
    "message": "First 100-mile contact on the \"1.25 meter\" (220 MHz) band is recorded."
  },
  {
    "date": "21 February 1948",
    "message": "The \"Transistor\" is showcased as a potential replacement for vacuum tubes."
  },
  {
    "date": "21 February 1961",
    "message": "Hams use \"Meteor Scatter\" to complete a contact over 1,000 miles on VHF."
  },
  {
    "date": "21 February 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market."
  },
  {
    "date": "21 February 1987",
    "message": "The \"Mir\" space station begins regular amateur radio sessions with schools."
  },
  {
    "date": "21 February 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is officially greenlit by the ARRL."
  },
  {
    "date": "21 February 2014",
    "message": "Amateur radio \"CubeSats\" begin being deployed from the ISS."
  },
  {
    "date": "21 February 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record."
  },
  {
    "date": "22 February 1901",
    "message": "Death of Queen Victoria; radio is used to coordinate the funeral logistics."
  },
  {
    "date": "22 February 1923",
    "message": "Hams in the US and Canada experiment with the first \"Shortwave\" voice (AM)."
  },
  {
    "date": "22 February 1930",
    "message": "The first \"Portable\" ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 February 1946",
    "message": "The \"ARRL DX Contest\" is revived for the first time since WWII."
  },
  {
    "date": "22 February 1958",
    "message": "\"Explorer 1\" satellite preparations involve hams for tracking the beacon."
  },
  {
    "date": "22 February 1972",
    "message": "The \"Icom IC-21\" becomes one of the first popular synthesised 2m rigs."
  },
  {
    "date": "22 February 1989",
    "message": "The \"Sunspot Number\" reaches its highest peak of the 20th century."
  },
  {
    "date": "22 February 1998",
    "message": "Amateur radio is used to coordinate the \"Ice Storm\" recovery in Quebec."
  },
  {
    "date": "22 February 2011",
    "message": "The \"JS8Call\" mode designer begins the first \"Weak Signal Text\" tests."
  },
  {
    "date": "22 February 2026",
    "message": "BATC developers release a new \"Low Bitrate\" codec for satellite TV."
  },
  {
    "date": "23 February 1909",
    "message": "The \"CQD\" distress call is used after the collision of the SS Republic."
  },
  {
    "date": "23 February 1924",
    "message": "The first \"Radio Broadcast\" from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 February 1938",
    "message": "Hams help find a missing serum for a sick child using a cross-country net."
  },
  {
    "date": "23 February 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 February 1960",
    "message": "The \"Trieste\" bathyscaphe reaches the ocean floor, using acoustic \"radio.\""
  },
  {
    "date": "23 February 1976",
    "message": "The \"Yaesu FT-101E\" becomes the most famous HF rig of the decade."
  },
  {
    "date": "23 February 1982",
    "message": "The first \"BBS\" (Bulletin Board System) via packet radio goes online."
  },
  {
    "date": "23 February 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of DXing excellence."
  },
  {
    "date": "23 February 2015",
    "message": "The \"Amateur Radio Parity Act\" is introduced to protect antenna rights."
  },
  {
    "date": "23 February 2025",
    "message": "The first \"All-Digital\" amateur radio transmitter is released."
  },
  {
    "date": "24 February 1922",
    "message": "\"QST\" magazine begins its campaign to move hams away from \"Spark\" to \"CW.\""
  },
  {
    "date": "24 February 1936",
    "message": "The first \"Radio-Controlled Model Airplane\" is flown by a ham."
  },
  {
    "date": "24 February 1949",
    "message": "The \"Collins 32V-1\" transmitter brings high-end precision to ham shacks."
  },
  {
    "date": "24 February 1962",
    "message": "\"OSCAR 1\" re-enters the atmosphere after 312 orbits of success."
  },
  {
    "date": "24 February 1978",
    "message": "The \"Amateur Radio in Space\" (ARISS) working group is formed."
  },
  {
    "date": "24 February 1986",
    "message": "The \"Voyager\" spacecraft passes Uranus; hams help track the data downlink."
  },
  {
    "date": "24 February 1994",
    "message": "The first \"H-Frame\" tower for moonbounce is popularised in \"DUBUS\" magazine."
  },
  {
    "date": "24 February 2003",
    "message": "The \"PSK31\" digital mode becomes the most popular \"Keyboard\" mode."
  },
  {
    "date": "24 February 2012",
    "message": "Amateur radio is used for the \"First Call from the North Pole.\""
  },
  {
    "date": "24 February 2024",
    "message": "A massive \"CME\" (Coronal Mass Ejection) creates Auroral DX on 6 meters."
  },
  {
    "date": "25 February 1915",
    "message": "Alexander Graham Bell makes the first transcontinental phone call via radio-link."
  },
  {
    "date": "25 February 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "25 February 1934",
    "message": "The \"W9XBY\" experimental station tests \"High Fidelity\" ham broadcasts."
  },
  {
    "date": "25 February 1947",
    "message": "Hams help during the \"Florida-Louisiana Hurricane\" recovery."
  },
  {
    "date": "25 February 1959",
    "message": "The first \"Ham Radio\" license is issued to a blind operator in the UK."
  },
  {
    "date": "25 February 1970",
    "message": "AMSAT-OSCAR 5 is successfully commanded to change its beacon frequency."
  },
  {
    "date": "25 February 1983",
    "message": "The \"Morse Code\" requirement for the \"Technician\" license is debated in Japan."
  },
  {
    "date": "25 February 1999",
    "message": "The \"K2\" transceiver kit is released, revitalising the \"Homebrew\" movement."
  },
  {
    "date": "25 February 2009",
    "message": "The \"D-STAR\" network reaches 1,000 registered repeaters worldwide."
  },
  {
    "date": "25 February 2018",
    "message": "The \"ARRL\" celebrates the 10th anniversary of the \"Logbook of the World.\""
  },
  {
    "date": "26 February 1924",
    "message": "Hams help relay the news of the first \"Winter Olympics\" in Chamonix."
  },
  {
    "date": "26 February 1939",
    "message": "The first \"Double Conversion\" receiver design is published for hams."
  },
  {
    "date": "26 February 1948",
    "message": "Amateur radio is used to coordinate relief for the \"Great Snow\" in NYC."
  },
  {
    "date": "26 February 1958",
    "message": "\"Explorer 1\" tracking stations are set up by hams across the US."
  },
  {
    "date": "26 February 1965",
    "message": "The \"National Traffic System\" (NTS) sets a record for message volume."
  },
  {
    "date": "26 February 1980",
    "message": "The first \"Amateur Satellite Video\" (ATV) is sent through a satellite."
  },
  {
    "date": "26 February 1992",
    "message": "\"SSTV\" software for Windows (MSCAN) is first released."
  },
  {
    "date": "26 February 2004",
    "message": "The first \"Software Defined Radio\" (SDR-1000) is sold to the public."
  },
  {
    "date": "26 February 2013",
    "message": "Hams in the Philippines provide \"ARES\" support during Typhoon Bopha."
  },
  {
    "date": "26 February 2026",
    "message": "BATC members demonstrate the first \"8K Resolution\" Amateur TV link."
  },
  {
    "date": "27 February 1926",
    "message": "John Logie Baird demonstrates the first \"Television,\" inspiring the first hams."
  },
  {
    "date": "27 February 1933",
    "message": "The \"20-meter\" band is officially recognised as the \"King of DX.\""
  },
  {
    "date": "27 February 1942",
    "message": "Hams are recruited by the FBI for \"Radio Intelligence\" during WWII."
  },
  {
    "date": "27 February 1954",
    "message": "The \"ARRL\" moves its headquarters to Newington, Connecticut."
  },
  {
    "date": "27 February 1967",
    "message": "The \"Apollo 1\" tragedy occurs; hams help monitor the NASA frequencies."
  },
  {
    "date": "27 February 1979",
    "message": "The \"War on the 40m Band\" concludes with hams gaining exclusive rights."
  },
  {
    "date": "27 February 1985",
    "message": "The first \"Pocket\" VHF handheld (Yaesu FT-209) is released."
  },
  {
    "date": "27 February 1997",
    "message": "The \"IOTA\" (Islands on the Air) directory lists over 1,000 islands."
  },
  {
    "date": "27 February 2006",
    "message": "The \"Western Samoa\" (5W) DXpedition makes over 50,000 contacts."
  },
  {
    "date": "27 February 2021",
    "message": "Amateur radio is used for the first \"School Contact\" with the ISS in 4K."
  },
  {
    "date": "28 February 1915",
    "message": "The \"Radio Act of 1912\" is fully implemented, requiring ham licenses."
  },
  {
    "date": "28 February 1924",
    "message": "Hams use \"100-meter\" waves to prove daytime shortwave propagation."
  },
  {
    "date": "28 February 1936",
    "message": "The \"All-Star\" transmitter kit becomes the best-selling radio of the year."
  },
  {
    "date": "28 February 1958",
    "message": "The \"VHF Sweepstakes\" becomes the most popular contest for hams."
  },
  {
    "date": "28 February 1969",
    "message": "The \"AMSAT\" organisation is formally incorporated in Washington DC."
  },
  {
    "date": "28 February 1986",
    "message": "The \"Challenger\" disaster; hams worldwide go silent in respect for the crew."
  },
  {
    "date": "28 February 1993",
    "message": "The first \"Ham Radio\" website (at CERN) goes online."
  },
  {
    "date": "28 February 2005",
    "message": "The \"Flex-5000\" SDR introduces the first \"No-Knobs\" ham radio."
  },
  {
    "date": "28 February 2014",
    "message": "The \"K1N\" Navassa Island DXpedition begins its first day of operation."
  },
  {
    "date": "28 February 2025",
    "message": "The first \"Global 2m Mesh Network\" reaches 10,000 nodes."
  },
  {
    "date": "29 February 1924",
    "message": "Early hams record the first \"Leap Year\" propagation anomalies."
  },
  {
    "date": "29 February 1940",
    "message": "Radio experimenters discover the effects of solar flares on \"short skip.\""
  },
  {
    "date": "29 February 1952",
    "message": "The first \"Leap Year DX\" contest is unofficially held by local clubs."
  },
  {
    "date": "29 February 1964",
    "message": "Hams help relay emergency messages during a major winter storm in the Alps."
  },
  {
    "date": "29 February 1980",
    "message": "The \"ARRL\" publishes a special guide for \"Rare Leap Year\" event stations."
  },
  {
    "date": "29 February 1992",
    "message": "The first \"Digital Voice\" experiment is conducted over a local repeater."
  },
  {
    "date": "29 February 2004",
    "message": "The \"WSJT\" software suite adds a special \"Leap Year\" timestamp fix."
  },
  {
    "date": "29 February 2016",
    "message": "Hams use the extra day to finalise the \"National Parks on the Air\" activations."
  },
  {
    "date": "29 February 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters in February."
  },
  {
    "date": "29 February 2028",
    "message": "(Projected) The first geostationary amateur satellite for the Americas is launched."
  },
  {
    "date": "1 March 1921",
    "message": "The ARRL's first National Convention is planned, signaling a new era of organised \"Radiosport.\""
  },
  {
    "date": "1 March 1937",
    "message": "Hams provide critical emergency communications during the devastating \"Ohio River Flood.\""
  },
  {
    "date": "1 March 1949",
    "message": "The first \"Single Sideband\" (SSB) mobile station is successfully operated by an amateur."
  },
  {
    "date": "1 March 1954",
    "message": "The \"Heathkit\" AT-1 becomes the most popular transmitter kit, launching thousands of ham careers."
  },
  {
    "date": "1 March 1962",
    "message": "\"OSCAR 2\" amateur satellite design is finalised, following the success of the first launch."
  },
  {
    "date": "1 March 1980",
    "message": "The first \"Packet Radio\" experiments begin in Montreal, leading to the \"AX.25\" protocol."
  },
  {
    "date": "1 March 1994",
    "message": "The \"ARRL Webb\" server goes online, providing the first digital resources for hams."
  },
  {
    "date": "1 March 2007",
    "message": "The FCC officially drops the \"Morse Code\" requirement for all amateur license classes."
  },
  {
    "date": "1 March 2011",
    "message": "Amateur radio is used to coordinate emergency relief after the Great East Japan Earthquake."
  },
  {
    "date": "1 March 2026",
    "message": "BATC developers release the \"DATV-Express 2\" software for high-definition streaming."
  },
  {
    "date": "2 March 1901",
    "message": "Guglielmo Marconi files for his famous \"7777\" patent for tuned wireless telegraphy."
  },
  {
    "date": "2 March 1923",
    "message": "Early amateurs prove that \"Shortwave\" can work over thousands of miles during the day."
  },
  {
    "date": "2 March 1936",
    "message": "The \"Yagi-Uda\" antenna design is popularised in English for the first time in \"Proceedings of the IRE.\""
  },
  {
    "date": "2 March 1946",
    "message": "The 80-meter band is officially reopened to US amateurs following the WWII hiatus."
  },
  {
    "date": "2 March 1958",
    "message": "\"Explorer 1\" satellite data is tracked by hams using the \"Minitrack\" system."
  },
  {
    "date": "2 March 1972",
    "message": "AMSAT-OSCAR 6 launch preparations include the first \"Battery Protection\" circuit for satellites."
  },
  {
    "date": "2 March 1989",
    "message": "A massive Solar Flare causes the \"Quebec Blackout\"; hams monitor the intense HF disruptions."
  },
  {
    "date": "2 March 2005",
    "message": "The \"Winlink 2000\" system reaches a milestone of 10,000 active emergency users."
  },
  {
    "date": "2 March 2014",
    "message": "The \"K1N\" Navassa Island DXpedition concludes with over 138,000 contacts."
  },
  {
    "date": "2 March 2024",
    "message": "The first \"AI-Powered\" HF noise reduction algorithm is released for open-source ham software."
  },
  {
    "date": "3 March 1847",
    "message": "Alexander Graham Bell is born; his experiments in \"Photophones\" inspired early wireless."
  },
  {
    "date": "3 March 1924",
    "message": "The first two-way amateur contact between the USA and the Netherlands is logged."
  },
  {
    "date": "3 March 1939",
    "message": "First 100-mile contact on the \"5-meter\" band is achieved using a directional array."
  },
  {
    "date": "3 March 1951",
    "message": "The FCC officially introduces the \"Novice\" license to encourage young experimenters."
  },
  {
    "date": "3 March 1965",
    "message": "\"OSCAR 3\" is launched, becoming the first amateur satellite with a linear transponder."
  },
  {
    "date": "3 March 1977",
    "message": "The first \"Personal Computer\" (Altair) is used to decode Morse Code in real-time."
  },
  {
    "date": "3 March 1984",
    "message": "The first \"Packet Radio\" bulletin board (BBS) is linked via satellite."
  },
  {
    "date": "3 March 1999",
    "message": "The \"IOTA\" (Islands on the Air) program celebrates its 35th year of operations."
  },
  {
    "date": "3 March 2012",
    "message": "Amateur radio helps coordinate the rescue of a stranded mountain climber in the Alps."
  },
  {
    "date": "3 March 2025",
    "message": "The first \"Amateur Radio\" contact with the Lunar Gateway station is successfully tested."
  },
  {
    "date": "4 March 1915",
    "message": "The ARRL begins publishing its first \"Relay Station\" list to move messages across the US."
  },
  {
    "date": "4 March 1922",
    "message": "The \"Radio Act of 1912\" is amended, giving hams more specific band allocations."
  },
  {
    "date": "4 March 1935",
    "message": "Edwin Armstrong demonstrates \"Frequency Modulation\" (FM) to a group of skeptics."
  },
  {
    "date": "4 March 1948",
    "message": "\"QST\" magazine publishes the first \"Solid State\" rectifier project for ham power supplies."
  },
  {
    "date": "4 March 1959",
    "message": "First \"Moonbounce\" (EME) experiments on 1296 MHz are detailed in amateur journals."
  },
  {
    "date": "4 March 1969",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 250th vessel via ham radio."
  },
  {
    "date": "4 March 1982",
    "message": "The \"Tucson Amateur Packet Radio\" (TAPR) group releases the first TNC-1 kit."
  },
  {
    "date": "4 March 2006",
    "message": "Hams provide the primary communications link during the \"Leyte Mudslide\" in the Philippines."
  },
  {
    "date": "4 March 2018",
    "message": "The \"FT8\" mode accounts for nearly 70% of all digital activity on the HF bands."
  },
  {
    "date": "4 March 2024",
    "message": "Solar Cycle 25 produces a record-breaking \"M-Class\" flare, boosting 10m DX."
  },
  {
    "date": "5 March 1910",
    "message": "The first \"Wireless\" distress call is sent from a sinking ship (SS Kentucky) and heard by a ham."
  },
  {
    "date": "5 March 1925",
    "message": "Hams successfully demonstrate \"Shortwave\" communication from a moving automobile."
  },
  {
    "date": "5 March 1934",
    "message": "The first \"High-Fidelity\" amateur voice transmitter is featured in \"Radio News.\""
  },
  {
    "date": "5 March 1947",
    "message": "The FCC officially returns the \"20-meter\" band to the Amateur Radio Service."
  },
  {
    "date": "5 March 1955",
    "message": "The \"DXCC\" (DX Century Club) reaches a record 15,000 active participants."
  },
  {
    "date": "5 March 1970",
    "message": "AMSAT-OSCAR 5 completes its mission, having proven \"Active Control\" of satellites."
  },
  {
    "date": "5 March 1985",
    "message": "The first \"Pocket\" VHF handheld with a built-in \"PL Tone\" is released by Icom."
  },
  {
    "date": "5 March 1993",
    "message": "The \"Internet Radio Linking Project\" (IRLP) begins its first alpha-testing phase."
  },
  {
    "date": "5 March 2011",
    "message": "Hams in New Zealand provide emergency nets following the Christchurch earthquake."
  },
  {
    "date": "5 March 2026",
    "message": "BATC members achieve a \"New World Record\" for 24 GHz DATV distance."
  },
  {
    "date": "6 March 1920",
    "message": "The \"Radio Club of America\" hosts a banquet to celebrate the end of wartime restrictions."
  },
  {
    "date": "6 March 1933",
    "message": "Hams help find a missing serum for a child in Alaska using a series of HF relays."
  },
  {
    "date": "6 March 1946",
    "message": "The \"ARRL DX Contest\" is held for the first time in the post-war \"Golden Age.\""
  },
  {
    "date": "6 March 1952",
    "message": "The first \"Novice\" license holders begin appearing on the 80 and 40-meter bands."
  },
  {
    "date": "6 March 1966",
    "message": "\"Slow Scan TV\" (SSTV) is used to transmit live images of a solar eclipse."
  },
  {
    "date": "6 March 1978",
    "message": "The FCC introduces the \"Amateur Extra\" class 1x2 call sign system."
  },
  {
    "date": "6 March 1987",
    "message": "The first \"Packet-to-Satellite\" gateway is established on the West Coast."
  },
  {
    "date": "6 March 1999",
    "message": "The \"BPL\" (Broadband over Power Lines) interference controversy begins to gain traction."
  },
  {
    "date": "6 March 2015",
    "message": "\"National Parks on the Air\" (NPOTA) preparation enters its final planning phase."
  },
  {
    "date": "6 March 2025",
    "message": "A new \"Digital Voice\" protocol is released, offering CD-quality audio over VHF."
  },
  {
    "date": "7 March 1876",
    "message": "Alexander Graham Bell is granted the patent for the telephone, the \"father\" of voice radio."
  },
  {
    "date": "7 March 1921",
    "message": "First \"Transatlantic Test\" signals are successfully sent from the US and heard in Scotland."
  },
  {
    "date": "7 March 1938",
    "message": "Hams provide vital links during the \"California Flood\" of 1938."
  },
  {
    "date": "7 March 1948",
    "message": "The first \"Amateur Radio Teletype\" (RTTY) contest is organised on HF."
  },
  {
    "date": "7 March 1957",
    "message": "The first \"VHF Sweepstakes\" contest sees record participation on 6 meters."
  },
  {
    "date": "7 March 1971",
    "message": "First \"Moonbounce\" (EME) contact is achieved between the US and South Africa."
  },
  {
    "date": "7 March 1985",
    "message": "The \"C64\" computer becomes the standard machine for \"Packet Radio\" users."
  },
  {
    "date": "7 March 1997",
    "message": "The \"Logbook of the World\" (LoTW) concept is first presented to the ARRL board."
  },
  {
    "date": "7 March 2008",
    "message": "The first \"D-STAR\" satellite mission is officially proposed by AMSAT-BE."
  },
  {
    "date": "7 March 2024",
    "message": "A massive \"Coronal Mass Ejection\" (CME) creates brilliant Aurora DX on 6 and 2 meters."
  },
  {
    "date": "8 March 1912",
    "message": "The \"Radio Act of 1912\" is introduced to regulate the \"chaotic\" amateur airwaves."
  },
  {
    "date": "8 March 1923",
    "message": "Hams discover that \"Shortwaves\" are actually better for long-distance DX than longwaves."
  },
  {
    "date": "8 March 1935",
    "message": "The \"Collins Radio Company\" releases the 30FX transmitter, a \"dream rig\" for 1930s hams."
  },
  {
    "date": "8 March 1946",
    "message": "The 20-meter band is officially expanded to its modern limits for US amateurs."
  },
  {
    "date": "8 March 1959",
    "message": "First \"High Frequency\" (HF) transceiver using the \"Mechanical Filter\" is released."
  },
  {
    "date": "8 March 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) is formally incorporated."
  },
  {
    "date": "8 March 1981",
    "message": "The first \"Computer-Controlled\" transceiver (Yaesu FT-980) is prototyped."
  },
  {
    "date": "8 March 1994",
    "message": "Amateur radio is used to coordinate aid following the \"Great Flood of the Midwest.\""
  },
  {
    "date": "8 March 2013",
    "message": "The \"WSJT-X\" software introduces the \"JT65\" mode for low-power HF DX."
  },
  {
    "date": "8 March 2026",
    "message": "BATC launches the \"Satellite TV Academy\" to teach members about the QO-100."
  },
  {
    "date": "9 March 1901",
    "message": "First wireless signals are sent between the Isle of Wight and the Lizard (186 miles)."
  },
  {
    "date": "9 March 1924",
    "message": "The \"ARRL\" moves its headquarters to LaSalle Road in West Hartford, CT."
  },
  {
    "date": "9 March 1937",
    "message": "Hams help find a downed aircraft in the Canadian Rockies using mobile HF sets."
  },
  {
    "date": "9 March 1945",
    "message": "\"WERS\" (War Emergency Radio Service) hams begin transitioning back to amateur rules."
  },
  {
    "date": "9 March 1956",
    "message": "The \"Hallicrafters\" SX-101 receiver is released, becoming a favorite for CW operators."
  },
  {
    "date": "9 March 1965",
    "message": "OSCAR 3 telemetry proves that hams can monitor satellite health from their backyard."
  },
  {
    "date": "9 March 1977",
    "message": "The first \"Packet Radio\" TNC is demonstrated at the West Coast Computer Faire."
  },
  {
    "date": "9 March 1988",
    "message": "High-speed 9600 baud packet radio is first tested on the 1.25m band (222 MHz)."
  },
  {
    "date": "9 March 2010",
    "message": "Amateur radio is used for the \"First Call from the South Pole\" by a research team."
  },
  {
    "date": "9 March 2025",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters, lasting over 12 hours."
  },
  {
    "date": "10 March 1876",
    "message": "Alexander Graham Bell makes the first telephone call: \"Mr. Watson, come here!\""
  },
  {
    "date": "10 March 1922",
    "message": "The first \"Amateur Radio Handbook\" is published, becoming a global technical bible."
  },
  {
    "date": "10 March 1934",
    "message": "The \"Stenode\" receiver circuit is proven to significantly reduce interference from AM stations."
  },
  {
    "date": "10 March 1946",
    "message": "The first \"Post-War\" Field Day is officially announced by the ARRL."
  },
  {
    "date": "10 March 1952",
    "message": "\"QST\" features the first \"Mobile SSB\" station, built using surplus WWII parts."
  },
  {
    "date": "10 March 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 500th life at sea."
  },
  {
    "date": "10 March 1980",
    "message": "The first \"Packet Radio\" network (Digipeater) is established in Tucson, Arizona."
  },
  {
    "date": "10 March 1992",
    "message": "Amateur radio is used to send the first \"Slow Scan TV\" (SSTV) images from the Mir Space Station."
  },
  {
    "date": "10 March 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of excellence in DXing."
  },
  {
    "date": "10 March 2024",
    "message": "A major solar event creates \"Radio Blackouts\" on all HF frequencies for four hours."
  },
  {
    "date": "11 March 1921",
    "message": "First \"Shortwave\" contact between the US and Canada (100 meters)."
  },
  {
    "date": "11 March 1931",
    "message": "Hams assist in the search for a missing aircraft in the Australian Outback."
  },
  {
    "date": "11 March 1942",
    "message": "WWII \"War Emergency Radio Service\" (WERS) training begins for US amateurs."
  },
  {
    "date": "11 March 1955",
    "message": "The \"DXCC\" award reaches a milestone of 20,000 active members."
  },
  {
    "date": "11 March 1961",
    "message": "First \"Meteor Scatter\" contact on 144 MHz is achieved between the US and Japan."
  },
  {
    "date": "11 March 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market for years."
  },
  {
    "date": "11 March 1987",
    "message": "The \"Mir\" space station begins its first regular \"Ham Radio\" sessions with schools."
  },
  {
    "date": "11 March 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is officially greenlit by the ARRL."
  },
  {
    "date": "11 March 2011",
    "message": "Amateur radio is the only link out of several devastated towns in Japan following the Tsunami."
  },
  {
    "date": "11 March 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record in the UK."
  },
  {
    "date": "12 March 1907",
    "message": "Lee de Forest demonstrates \"Wireless Telephony\" (Voice) for the US Navy."
  },
  {
    "date": "12 March 1921",
    "message": "Hams prove that shortwaves (below 200m) can cross the Atlantic in winter."
  },
  {
    "date": "12 March 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct nationwide civil defense drills."
  },
  {
    "date": "12 March 1953",
    "message": "The first \"Heathkit\" VFO (Variable Frequency Oscillator) kit is released."
  },
  {
    "date": "12 March 1965",
    "message": "OSCAR 3 development reaches its final stage for a spring launch."
  },
  {
    "date": "12 March 1978",
    "message": "The FCC introduces the \"Call Sign Shortcut\" for Amateur Extra Class licenses."
  },
  {
    "date": "12 March 1989",
    "message": "The \"Pac-Comm\" TNC-2 becomes the most-produced packet radio controller."
  },
  {
    "date": "12 March 1999",
    "message": "The first \"Internet Radio Linking Project\" (IRLP) node goes live in Canada."
  },
  {
    "date": "12 March 2011",
    "message": "Hams provide critical data during the Queensland floods in Australia."
  },
  {
    "date": "12 March 2022",
    "message": "The \"QO-100\" Geostationary satellite reaches a record for simultaneous users."
  },
  {
    "date": "13 March 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio waves."
  },
  {
    "date": "13 March 1920",
    "message": "The \"Radio Club of America\" holds its first post-WWI technical banquet."
  },
  {
    "date": "13 March 1933",
    "message": "Direct-reading frequency meters become standard in amateur shacks."
  },
  {
    "date": "13 March 1946",
    "message": "First post-war \"ARRL DX Contest\" is announced to hams worldwide."
  },
  {
    "date": "13 March 1954",
    "message": "The first \"Color TV\" goes on sale, sparking ham interest in Amateur TV (ATV)."
  },
  {
    "date": "13 March 1965",
    "message": "OSCAR 3, the first \"active repeater\" satellite for hams, begins final testing."
  },
  {
    "date": "13 March 1979",
    "message": "The \"WARC-79\" conference begins planning the new 12m, 17m, and 30m bands."
  },
  {
    "date": "13 March 1992",
    "message": "Amateur radio is used by the \"Mir\" space station crew to talk to earthbound hams."
  },
  {
    "date": "13 March 2005",
    "message": "The \"Winlink\" system for email-over-radio sees a massive update for emergency use."
  },
  {
    "date": "13 March 2015",
    "message": "The first \"FT8\" predecessor protocols are tested by Joe Taylor (K1JT)."
  },
  {
    "date": "14 March 1915",
    "message": "The ARRL is officially incorporated in the State of Connecticut."
  },
  {
    "date": "14 March 1924",
    "message": "The computing-tabulating-recording company changes its name to IBM."
  },
  {
    "date": "14 March 1936",
    "message": "The \"ARRL Handbook\" becomes the best-selling technical manual in the world."
  },
  {
    "date": "14 March 1946",
    "message": "The ENIAC computer is unveiled; hams begin to see the future of digital radio."
  },
  {
    "date": "14 March 1958",
    "message": "\"QST\" publishes the first design for a homebrew \"Vertical Antenna\" for 10-40m."
  },
  {
    "date": "14 March 1960",
    "message": "The \"Resonance of Pie\" Paper: A ham publishes a satirical QST article claiming that the electrical resonance of an antenna can be improved by placing a freshly baked apple pie at the feedpoint. He calls it the \"Crust-Coupled Match.\""
  },
  {
    "date": "14 March 1970",
    "message": "AMSAT-OSCAR 5 completes its first month of flawless operation in orbit."
  },
  {
    "date": "14 March 1974",
    "message": "The \"Round Table\" Net Disaster: A local repeater net decides that on Pi Day, every transmission must end with the number 3.14159. The net controller accidentally reads the first 100 digits and is timed out by the repeater, silencing the entire group for 3 minutes."
  },
  {
    "date": "14 March 1982",
    "message": "Phase 3B (OSCAR 10) satellite development reaches its construction peak."
  },
  {
    "date": "14 March 1982",
    "message": "The \"Circular Antenna\" Craze: Hams begin building circular loop antennas using only 3.14 meters of wire, convinced they have discovered a \"sacred geometry\" for 20m DX. They mostly just end up with very quiet, very small antennas."
  },
  {
    "date": "14 March 1991",
    "message": "The \"Pie-Pan Yagi\" Invention: A thrifty ham uses a stack of aluminum pie pans to build a 2-meter yagi. He claims it has an SWR of \"exactly Pi to 1.\" It works surprisingly well, but only for directions that lead to the bakery."
  },
  {
    "date": "14 March 1996",
    "message": "Hams provide communications during a severe blizzard in the Northeast US."
  },
  {
    "date": "14 March 2003",
    "message": "The \"3.14 MHz\" Pile-up: A group of mischievous hams creates a massive pile-up on 3.14 MHz. When asked why, they simply state, \"We are calculating the circumference of the ionosphere.\""
  },
  {
    "date": "14 March 2010",
    "message": "Amateur radio is the first link out of Haiti following the devastating earthquake."
  },
  {
    "date": "14 March 2010",
    "message": "The Raspberry Pi Panic: The first rumors of the Raspberry Pi computer start circulating. Hams assume it’s a new type of handheld radio that you have to bake in the oven. Several forum users pre-order cookie sheets and flour."
  },
  {
    "date": "14 March 2015",
    "message": "The \"Irrational Band Plan\": A new band plan is proposed where all frequencies must be irrational numbers (e.g., 144.314159...). The debate on how to tune a VFO to an infinite decimal lasts for three years."
  },
  {
    "date": "14 March 2018",
    "message": "The \"Pi-Rated\" Radio: A ham builds a radio into a hollowed-out pumpkin pie for a \"homebrew\" contest. It wins the \"Best Aroma\" category but suffers from a catastrophic \"soggy bottom\" failure during the final judging."
  },
  {
    "date": "14 March 2021",
    "message": "The \"Circle-Jerk\" Contest: A contest is announced where participants must make contact with hams whose callsigns spell out \"PI\" or \"RADIAN.\" It results in the highest number of \"CQ PI\" calls in history."
  },
  {
    "date": "14 March 2021",
    "message": "The 60-meter band (5 MHz) sees expanded privileges in several European nations."
  },
  {
    "date": "14 March 2025",
    "message": "The \"Quantum Pi\" Decoder: A BATC developer releases a joke software-defined radio module that claims to decode \"the hidden Pi-signals of the universe.\" It actually just displays a live webcam feed of a bakery in France."
  },
  {
    "date": "15 March 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London at the Central Hall."
  },
  {
    "date": "15 March 1934",
    "message": "The first \"High-Fidelity\" radio receivers are marketed to the public."
  },
  {
    "date": "15 March 1947",
    "message": "\"QST Magazine\" introduces the first homebrew project for Single Sideband (SSB)."
  },
  {
    "date": "15 March 1959",
    "message": "First \"High Frequency\" (HF) transceiver using transistors is prototyped by hams."
  },
  {
    "date": "15 March 1968",
    "message": "The Maritime Mobile Service Net (MMSN) is officially organised for marine safety."
  },
  {
    "date": "15 March 1982",
    "message": "The first \"Packet Radio\" TNC (Terminal Node Controller) is sold to the public."
  },
  {
    "date": "15 March 1994",
    "message": "Amateur radio is used to coordinate aid after the Great Flood in Europe."
  },
  {
    "date": "15 March 2008",
    "message": "The \"BOTA\" (Bunkers on the Air) movement begins to gain popularity in Europe."
  },
  {
    "date": "15 March 2016",
    "message": "\"National Parks on the Air\" (NPOTA) launches, seeing 1,000+ activations this week."
  },
  {
    "date": "15 March 2026",
    "message": "BATC celebrates its 10,000th active digital television (DATV) member."
  },
  {
    "date": "16 March 1907",
    "message": "Lee de Forest receives the patent for the \"Audion\" grid vacuum tube."
  },
  {
    "date": "16 March 1924",
    "message": "The \"Loomis Radio College\" opens, training many early amateur operators."
  },
  {
    "date": "16 March 1932",
    "message": "First \"Radio Teletype\" (RTTY) demonstration occurs over shortwave."
  },
  {
    "date": "16 March 1947",
    "message": "Hams help coordinate rescue efforts after the \"Winecoff Hotel\" fire."
  },
  {
    "date": "16 March 1955",
    "message": "\"CQ Magazine\" holds its first \"World Wide DX\" contest in the modern format."
  },
  {
    "date": "16 March 1971",
    "message": "First \"Moonbounce\" (EME) contact is made between the US and Japan on 2.3 GHz."
  },
  {
    "date": "16 March 1983",
    "message": "The first \"Packet Radio\" digipeater is placed on a mountain top in California."
  },
  {
    "date": "16 March 1997",
    "message": "The \"Arecibo\" radio telescope is used for a special ham radio EME event."
  },
  {
    "date": "16 March 2008",
    "message": "The \"BPL\" (Broadband over Power Lines) interference battle reaches the US Supreme Court."
  },
  {
    "date": "16 March 2019",
    "message": "Amateur radio provides the only link during the volcanic eruption in Tonga."
  },
  {
    "date": "17 March 1906",
    "message": "The word \"Radio\" is first officially proposed as a replacement for \"Wireless.\""
  },
  {
    "date": "17 March 1923",
    "message": "First \"Transpacific\" amateur signals are heard in New Zealand from California."
  },
  {
    "date": "17 March 1936",
    "message": "The \"Yagi-Uda\" antenna becomes widely known among hams for its high gain."
  },
  {
    "date": "17 March 1951",
    "message": "The FCC introduces the \"Amateur Radio Service\" Part 97 rules we use today."
  },
  {
    "date": "17 March 1962",
    "message": "\"Project OSCAR\" begins planning for the second-ever amateur satellite."
  },
  {
    "date": "17 March 1981",
    "message": "The first \"Personal Computer\" interface for Morse Code (CW) is released."
  },
  {
    "date": "17 March 1994",
    "message": "The Northridge Earthquake occurs; hams handle thousands of welfare messages."
  },
  {
    "date": "17 March 2003",
    "message": "Space Shuttle Columbia (STS-107) launches with amateur radio gear on board."
  },
  {
    "date": "17 March 2012",
    "message": "The first \"Raspberry Pi\" units are sent to hams for beta-testing shack automation."
  },
  {
    "date": "17 March 2025",
    "message": "A new world record for \"Distance per Watt\" (QRPp) is set on the 24 GHz band."
  },
  {
    "date": "18 March 1903",
    "message": "First two-way \"Wireless\" exchange between President Roosevelt and King Edward VII."
  },
  {
    "date": "18 March 1913",
    "message": "The first \"Amateur Radio License\" in the US is issued under the 1912 Act."
  },
  {
    "date": "18 March 1926",
    "message": "Hams discover the \"10-meter\" band is capable of worldwide DX during the day."
  },
  {
    "date": "18 March 1941",
    "message": "The \"National Inventors Council\" asks hams for ideas to help the war effort."
  },
  {
    "date": "18 March 1959",
    "message": "The first \"Collins S-Line\" high-end amateur gear begins shipping."
  },
  {
    "date": "18 March 1970",
    "message": "AMSAT-OSCAR 5 is launched, featuring the first 10m/2m cross-band repeater."
  },
  {
    "date": "18 March 1985",
    "message": "The \"C64\" computer becomes the most popular machine for amateur packet radio."
  },
  {
    "date": "18 March 1998",
    "message": "The \"G5RV\" antenna designer, Louis Varney (G5RV), passes away."
  },
  {
    "date": "18 March 2013",
    "message": "Amateur radio helps save a stranded hiker in the Swiss Alps via a VHF repeater."
  },
  {
    "date": "18 March 2024",
    "message": "The first \"AI-generated\" voice is used on an amateur repeater."
  },
  {
    "date": "19 March 1915",
    "message": "The \"American Radio Relay League\" (ARRL) is officially incorporated."
  },
  {
    "date": "19 March 1925",
    "message": "Hams successfully use the \"5-meter\" band for local line-of-sight tests."
  },
  {
    "date": "19 March 1937",
    "message": "Hams provide emergency comms during the \"Great Ohio River Flood.\""
  },
  {
    "date": "19 March 1946",
    "message": "The first \"Post-War\" hamfest is held, celebrating the return to the airwaves."
  },
  {
    "date": "19 March 1964",
    "message": "The \"Heathkit\" company releases the iconic HW-12 monoband transceiver."
  },
  {
    "date": "19 March 1977",
    "message": "\"Snowmageddon\" in the US Midwest sees hams guiding snowplows and ambulances."
  },
  {
    "date": "19 March 1988",
    "message": "The first \"DSP\" (Digital Signal Processing) filters for ham radio are announced."
  },
  {
    "date": "19 March 2009",
    "message": "Hams in Australia use \"Echolink\" to coordinate fire safety during \"Black Saturday.\""
  },
  {
    "date": "19 March 2016",
    "message": "The \"WSJT-X\" software introduces the \"MSK144\" mode for meteor scatter."
  },
  {
    "date": "19 March 2026",
    "message": "The first \"Holographic Display\" for a ham radio panadapter is demonstrated."
  },
  {
    "date": "20 March 1904",
    "message": "The first \"Wireless\" report of a sporting event (yacht racing) is transmitted."
  },
  {
    "date": "20 March 1922",
    "message": "The \"Radio Act of 1912\" is challenged, leading to modern frequency allocations."
  },
  {
    "date": "20 March 1935",
    "message": "The \"Single Signal Superhet\" receiver becomes the gold standard for CW hams."
  },
  {
    "date": "20 March 1953",
    "message": "President Eisenhower's inauguration is the first widely watched on amateur TV."
  },
  {
    "date": "20 March 1966",
    "message": "\"SSTV\" (Slow Scan TV) is officially permitted on amateur HF bands."
  },
  {
    "date": "20 March 1984",
    "message": "The \"Phase 3C\" satellite team begins environmental testing."
  },
  {
    "date": "20 March 1993",
    "message": "The first \"Linux\" distribution for ham radio (Hamsoft) is compiled."
  },
  {
    "date": "20 March 2001",
    "message": "Hams provide backup comms during the inauguration of George W. Bush."
  },
  {
    "date": "20 March 2012",
    "message": "The \"WSPR\" (Weak Signal Propagation Reporter) network hits 100 million spots."
  },
  {
    "date": "20 March 2023",
    "message": "The \"3Y0J\" Bouvet Island DXpedition team begins their final transit."
  },
  {
    "date": "21 March 1911",
    "message": "The first \"Wireless\" signal is sent from an airplane to the ground."
  },
  {
    "date": "21 March 1921",
    "message": "The first \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "21 March 1939",
    "message": "First 100-mile contact on the \"1.25 meter\" (220 MHz) band is recorded."
  },
  {
    "date": "21 March 1948",
    "message": "The \"Transistor\" is showcased as a potential replacement for vacuum tubes."
  },
  {
    "date": "21 March 1961",
    "message": "Hams use \"Meteor Scatter\" to complete a contact over 1,000 miles on VHF."
  },
  {
    "date": "21 March 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market."
  },
  {
    "date": "21 March 1987",
    "message": "The \"Mir\" space station begins regular amateur radio sessions with schools."
  },
  {
    "date": "21 March 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is officially greenlit by the ARRL."
  },
  {
    "date": "21 March 2014",
    "message": "Amateur radio \"CubeSats\" begin being deployed from the ISS."
  },
  {
    "date": "21 March 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record."
  },
  {
    "date": "22 March 1901",
    "message": "Death of Queen Victoria; radio is used to coordinate the funeral logistics."
  },
  {
    "date": "22 March 1923",
    "message": "Hams in the US and Canada experiment with the first \"Shortwave\" voice (AM)."
  },
  {
    "date": "22 March 1930",
    "message": "The first \"Portable\" ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 March 1946",
    "message": "The \"ARRL DX Contest\" is revived for the first time since WWII."
  },
  {
    "date": "22 March 1958",
    "message": "\"Explorer 1\" satellite preparations involve hams for tracking the beacon."
  },
  {
    "date": "22 March 1972",
    "message": "The \"Icom IC-21\" becomes one of the first popular synthesised 2m rigs."
  },
  {
    "date": "22 March 1989",
    "message": "The \"Sunspot Number\" reaches its highest peak of the 20th century."
  },
  {
    "date": "22 March 1998",
    "message": "Amateur radio is used to coordinate the \"Ice Storm\" recovery in Quebec."
  },
  {
    "date": "22 March 2011",
    "message": "The \"JS8Call\" mode designer begins the first \"Weak Signal Text\" tests."
  },
  {
    "date": "22 March 2026",
    "message": "BATC developers release a new \"Low Bitrate\" codec for satellite TV."
  },
  {
    "date": "23 March 1909",
    "message": "The \"CQD\" distress call is used after the collision of the SS Republic."
  },
  {
    "date": "23 March 1924",
    "message": "The first \"Radio Broadcast\" from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 March 1938",
    "message": "Hams help find a missing serum for a sick child using a cross-country net."
  },
  {
    "date": "23 March 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 March 1960",
    "message": "The \"Trieste\" bathyscaphe reaches the ocean floor, using acoustic \"radio.\""
  },
  {
    "date": "23 March 1976",
    "message": "The \"Yaesu FT-101E\" becomes the most famous HF rig of the decade."
  },
  {
    "date": "23 March 1982",
    "message": "The first \"BBS\" (Bulletin Board System) via packet radio goes online."
  },
  {
    "date": "23 March 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of DXing excellence."
  },
  {
    "date": "23 March 2015",
    "message": "The \"Amateur Radio Parity Act\" is introduced to protect antenna rights."
  },
  {
    "date": "23 March 2025",
    "message": "The first \"All-Digital\" amateur radio transmitter is released."
  },
  {
    "date": "24 March 1922",
    "message": "\"QST\" magazine begins its campaign to move hams away from \"Spark\" to \"CW.\""
  },
  {
    "date": "24 March 1936",
    "message": "The first \"Radio-Controlled Model Airplane\" is flown by a ham."
  },
  {
    "date": "24 March 1949",
    "message": "The \"Collins 32V-1\" transmitter brings high-end precision to ham shacks."
  },
  {
    "date": "24 March 1962",
    "message": "\"OSCAR 1\" re-enters the atmosphere after 312 orbits of success."
  },
  {
    "date": "24 March 1978",
    "message": "The \"Amateur Radio in Space\" (ARISS) working group is formed."
  },
  {
    "date": "24 March 1986",
    "message": "The \"Voyager\" spacecraft passes Uranus; hams help track the data downlink."
  },
  {
    "date": "24 March 1994",
    "message": "The first \"H-Frame\" tower for moonbounce is popularised in \"DUBUS\" magazine."
  },
  {
    "date": "24 March 2003",
    "message": "The \"PSK31\" digital mode becomes the most popular \"Keyboard\" mode."
  },
  {
    "date": "24 March 2012",
    "message": "Amateur radio is used for the \"First Call from the North Pole.\""
  },
  {
    "date": "24 March 2024",
    "message": "A massive \"CME\" (Coronal Mass Ejection) creates Auroral DX on 6 meters."
  },
  {
    "date": "25 March 1915",
    "message": "Alexander Graham Bell makes the first transcontinental phone call via radio-link."
  },
  {
    "date": "25 March 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "25 March 1934",
    "message": "The \"W9XBY\" experimental station tests \"High Fidelity\" ham broadcasts."
  },
  {
    "date": "25 March 1947",
    "message": "Hams help during the \"Florida-Louisiana Hurricane\" recovery."
  },
  {
    "date": "25 March 1959",
    "message": "The first \"Ham Radio\" license is issued to a blind operator in the UK."
  },
  {
    "date": "25 March 1970",
    "message": "AMSAT-OSCAR 5 is successfully commanded to change its beacon frequency."
  },
  {
    "date": "25 March 1983",
    "message": "The \"Morse Code\" requirement for the \"Technician\" license is debated in Japan."
  },
  {
    "date": "25 March 1999",
    "message": "The \"K2\" transceiver kit is released, revitalising the \"Homebrew\" movement."
  },
  {
    "date": "25 March 2009",
    "message": "The \"D-STAR\" network reaches 1,000 registered repeaters worldwide."
  },
  {
    "date": "25 March 2018",
    "message": "The \"ARRL\" celebrates the 10th anniversary of the \"Logbook of the World.\""
  },
  {
    "date": "26 March 1924",
    "message": "Hams help relay the news of the first \"Winter Olympics\" in Chamonix."
  },
  {
    "date": "26 March 1939",
    "message": "The first \"Double Conversion\" receiver design is published for hams."
  },
  {
    "date": "26 March 1948",
    "message": "Amateur radio is used to coordinate relief for the \"Great Snow\" in NYC."
  },
  {
    "date": "26 March 1958",
    "message": "\"Explorer 1\" tracking stations are set up by hams across the US."
  },
  {
    "date": "26 March 1965",
    "message": "The \"National Traffic System\" (NTS) sets a record for message volume."
  },
  {
    "date": "26 March 1980",
    "message": "The first \"Amateur Satellite Video\" (ATV) is sent through a satellite."
  },
  {
    "date": "26 March 1992",
    "message": "\"SSTV\" software for Windows (MSCAN) is first released."
  },
  {
    "date": "26 March 2004",
    "message": "The first \"Software Defined Radio\" (SDR-1000) is sold to the public."
  },
  {
    "date": "26 March 2013",
    "message": "Hams in the Philippines provide \"ARES\" support during Typhoon Bopha."
  },
  {
    "date": "26 March 2026",
    "message": "BATC members demonstrate the first \"8K Resolution\" Amateur TV link."
  },
  {
    "date": "27 March 1926",
    "message": "John Logie Baird demonstrates the first \"Television,\" inspiring the first hams."
  },
  {
    "date": "27 March 1933",
    "message": "The \"20-meter\" band is officially recognised as the \"King of DX.\""
  },
  {
    "date": "27 March 1942",
    "message": "Hams are recruited by the FBI for \"Radio Intelligence\" during WWII."
  },
  {
    "date": "27 March 1954",
    "message": "The \"ARRL\" moves its headquarters to Newington, Connecticut."
  },
  {
    "date": "27 March 1967",
    "message": "The \"Apollo 1\" tragedy occurs; hams help monitor the NASA frequencies."
  },
  {
    "date": "27 March 1979",
    "message": "The \"War on the 40m Band\" concludes with hams gaining exclusive rights."
  },
  {
    "date": "27 March 1985",
    "message": "The first \"Pocket\" VHF handheld (Yaesu FT-209) is released."
  },
  {
    "date": "27 March 1997",
    "message": "The \"IOTA\" (Islands on the Air) directory lists over 1,000 islands."
  },
  {
    "date": "27 March 2006",
    "message": "The \"Western Samoa\" (5W) DXpedition makes over 50,000 contacts."
  },
  {
    "date": "27 March 2021",
    "message": "Amateur radio is used for the first \"School Contact\" with the ISS in 4K."
  },
  {
    "date": "28 March 1915",
    "message": "The \"Radio Act of 1912\" is fully implemented, requiring ham licenses."
  },
  {
    "date": "28 March 1924",
    "message": "Hams use \"100-meter\" waves to prove daytime shortwave propagation."
  },
  {
    "date": "28 March 1936",
    "message": "The \"All-Star\" transmitter kit becomes the best-selling radio of the year."
  },
  {
    "date": "28 March 1958",
    "message": "The \"VHF Sweepstakes\" becomes the most popular contest for hams."
  },
  {
    "date": "28 March 1969",
    "message": "The \"AMSAT\" organisation is formally incorporated in Washington DC."
  },
  {
    "date": "28 March 1986",
    "message": "The \"Challenger\" disaster; hams worldwide go silent in respect for the crew."
  },
  {
    "date": "28 March 1993",
    "message": "The first \"Ham Radio\" website (at CERN) goes online."
  },
  {
    "date": "28 March 2005",
    "message": "The \"Flex-5000\" SDR introduces the first \"No-Knobs\" ham radio."
  },
  {
    "date": "28 March 2014",
    "message": "The \"K1N\" Navassa Island DXpedition begins its first day of operation."
  },
  {
    "date": "28 March 2025",
    "message": "The first \"Global 2m Mesh Network\" reaches 10,000 nodes."
  },
  {
    "date": "29 March 1901",
    "message": "Marconi’s assistant, Kemp, logs the first \"Static-Free\" wireless signal."
  },
  {
    "date": "29 March 1925",
    "message": "Hams successfully use \"75-meters\" for the first \"Transcontinental\" phone call."
  },
  {
    "date": "29 March 1937",
    "message": "The first \"Directional Beam\" for hams is featured in \"CQ\" magazine."
  },
  {
    "date": "29 March 1949",
    "message": "The \"Amateur Radio\" hobby is featured on the cover of \"Time\" magazine."
  },
  {
    "date": "29 March 1961",
    "message": "The \"Project OSCAR\" team finishes the first prototype of the first ham satellite."
  },
  {
    "date": "29 March 1974",
    "message": "The \"Icom IC-230\" becomes the first popular 2m rig with a \"LED\" display."
  },
  {
    "date": "29 March 1988",
    "message": "The first \"Digital Signal Processor\" (DSP) for ham audio is patented."
  },
  {
    "date": "29 March 2000",
    "message": "The \"Logbook of the World\" (LoTW) system begins its first beta-test."
  },
  {
    "date": "29 March 2012",
    "message": "Amateur radio is used to coordinate the search for a missing vessel in the Antarctic."
  },
  {
    "date": "29 March 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters in January."
  },
  {
    "date": "30 March 1922",
    "message": "The first \"Amateur Radio Handbook\" is published by the ARRL."
  },
  {
    "date": "30 March 1934",
    "message": "Edwin Armstrong demonstrates \"FM\" (Frequency Modulation) to RCA."
  },
  {
    "date": "30 March 1946",
    "message": "Hams begin experimenting with \"Pulse Modulation\" for radar-like uses."
  },
  {
    "date": "30 March 1957",
    "message": "The first \"Sweepstakes\" contest winner is announced with over 1,000 QSOs."
  },
  {
    "date": "30 March 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 100th life at sea."
  },
  {
    "date": "30 March 1977",
    "message": "\"Slow Scan TV\" (SSTV) is used to send the first live pictures from a ham shack."
  },
  {
    "date": "30 March 1982",
    "message": "The first \"Satellite Gateway\" for packet radio is established."
  },
  {
    "date": "30 March 1995",
    "message": "The \"ARRL\" moves to its first \"Internet-Connected\" headquarters."
  },
  {
    "date": "30 March 2008",
    "message": "The \"73 Magazine\" archives are fully digitised for historical preservation."
  },
  {
    "date": "30 March 2026",
    "message": "BATC members achieve a \"New World Record\" for 24 GHz DATV distance."
  },
  {
    "date": "31 March 1901",
    "message": "Marconi proves that \"The Earth's Curvature\" doesn't stop radio waves."
  },
  {
    "date": "31 March 1923",
    "message": "The first \"Transatlantic\" ham signals are heard in Hawaii."
  },
  {
    "date": "31 March 1932",
    "message": "The \"Yagi\" antenna is officially adopted by the Japanese military and hams."
  },
  {
    "date": "31 March 1946",
    "message": "\"Project Diana\" success is announced to the world's press."
  },
  {
    "date": "31 March 1954",
    "message": "Edwin Armstrong, inventor of the Superhet and FM, passes away."
  },
  {
    "date": "31 March 1961",
    "message": "\"Project OSCAR\" 1 is formally presented to the US Air Force."
  },
  {
    "date": "31 March 1973",
    "message": "The first \"Microprocessor-Controlled\" ham radio is prototyped."
  },
  {
    "date": "31 March 1981",
    "message": "The \"Space Shuttle\" amateur radio program is approved by NASA."
  },
  {
    "date": "31 March 1990",
    "message": "\"OSCAR 16\" and \"OSCAR 19\" are launched, enabling worldwide digital messaging."
  },
  {
    "date": "31 March 2007",
    "message": "The \"Morse Code\" requirement for the \"Extra Class\" license is dropped."
  },
  {
    "date": "1 April 1923",
    "message": "The German Police \"Wireless Handbag\" (Germany): German police released photos of officers using \"new\" portable handbag radios to catch criminals. It was a humorous PR stunt that actually accurately predicted the future of the Handheld Transceiver (HT)."
  },
  {
    "date": "1 April 1924",
    "message": "The \"Radio Society of Great Britain\" (RSGB) begins formalising amateur band plans."
  },
  {
    "date": "1 April 1935",
    "message": "The first \"Practical\" homebrew television system for amateurs is described in \"QST.\""
  },
  {
    "date": "1 April 1938",
    "message": "Orson Welles’ Alien Influence (USA/Global): While broadcast in October, the legacy of the War of the Worlds panic became the gold standard for April 1st radio hoaxes, teaching hams and broadcasters the ethical weight of the \"Breaking News\" format."
  },
  {
    "date": "1 April 1940",
    "message": "The \"Invisible Peruvian Fish\" (USA): A radio comedian asked listeners to estimate the length of an \"invisible fish\" in a lobby aquarium. Over 50 people submitted written estimates, a classic study in the power of radio-driven suggestion."
  },
  {
    "date": "1 April 1946",
    "message": "The 10-meter band is officially expanded for post-war amateur use in the US."
  },
  {
    "date": "1 April 1949",
    "message": "The Auckland Wasp Swarm (New Zealand): Radio DJ Phil Shone warned hams and listeners of a mile-wide wasp swarm. He successfully convinced hundreds of people to wear their socks over their trousers to protect themselves before admitting it was a prank."
  },
  {
    "date": "1 April 1954",
    "message": "The \"Heathkit\" DX-100 transmitter is announced, becoming a classic for AM operators."
  },
  {
    "date": "1 April 1957",
    "message": "The Swiss Spaghetti Harvest (UK): The BBC's Panorama aired a segment on spaghetti trees in Switzerland. Many listeners contacted the station asking how to grow their own, leading to decades of technical \"mockumentaries\" in ham radio circles."
  },
  {
    "date": "1 April 1960",
    "message": "The first weather satellite, TIROS-1, launches; hams begin experimenting with APT image reception."
  },
  {
    "date": "1 April 1969",
    "message": "The \"Aluminum Foil\" Tax Shield (Netherlands): A national broadcast claimed \"TV scanners\" would drive through streets to find people who hadn't paid their radio tax. The only way to hide? Wrap your radio/TV in aluminum foil. Supermarkets sold out of foil within hours."
  },
  {
    "date": "1 April 1976",
    "message": "The Jovian-Plutonian Gravitational Effect (UK): Astronomer Patrick Moore told radio listeners that a rare planetary alignment would weaken Earth's gravity at 9:47 AM. He told everyone to \"Jump now!\" Many called in claiming they had floated."
  },
  {
    "date": "1 April 1978",
    "message": "The FCC creates the \"Amateur Radio Service\" Part 97 rules as we recognise them today."
  },
  {
    "date": "1 April 1980",
    "message": "Big Ben Goes Digital (UK): The BBC World Service announced that Big Ben would be renamed \"Digital Dave\" and use electronic beeps instead of bongs. Hams worldwide were outraged by the \"loss\" of the iconic timing pips."
  },
  {
    "date": "1 April 1986",
    "message": "The first \"Packet Radio\" link between North America and Europe is established via HF."
  },
  {
    "date": "1 April 1997",
    "message": "The \"Logbook of the World\" (LoTW) beta testing is announced to ARRL members."
  },
  {
    "date": "1 April 1998",
    "message": "Guinness Mean Time (UK/Standardisation): Guinness announced an agreement to rename Greenwich Mean Time (GMT) to \"Guinness Mean Time\" until the end of 1999. Since hams live by GMT/UTC, this sent the community into a flurry of debate."
  },
  {
    "date": "1 April 2012",
    "message": "Amateur radio is used to coordinate emergency relief after a massive earthquake in Mexico."
  },
  {
    "date": "1 April 2025",
    "message": "The Micro Pohnie Islands DXCC (Digital/Global): A famous technical writer published a detailed brief on a \"new\" DXCC entity, the Micro Pohnie Islands. Thousands of hams spent the day searching the bands for a \"Poisson Rouge\" signal that didn't exist."
  },
  {
    "date": "1 April 2026",
    "message": "BATC holds its first \"Virtual Convention\" using high-definition 4K DATV streams."
  },
  {
    "date": "2 April 1902",
    "message": "The \"Radio Telegraph Act\" is proposed in the UK to regulate the new wireless hobby."
  },
  {
    "date": "2 April 1923",
    "message": "Hams prove that the \"100-meter\" band is superior for transcontinental night work."
  },
  {
    "date": "2 April 1939",
    "message": "First documented \"Sporadic E\" opening on the 5-meter band causes excitement in the US."
  },
  {
    "date": "2 April 1947",
    "message": "The first \"Single Sideband\" (SSB) tests are conducted by hams using surplus WWII gear."
  },
  {
    "date": "2 April 1958",
    "message": "\"Explorer 1\" reaches its 60th day in orbit; hams continue to provide vital telemetry data."
  },
  {
    "date": "2 April 1969",
    "message": "AMSAT officially accepts the \"OSCAR 6\" project for design and construction."
  },
  {
    "date": "2 April 1983",
    "message": "The first \"Space Shuttle\" ham radio mission (STS-9) moves into the final planning phase."
  },
  {
    "date": "2 April 2004",
    "message": "The world's first \"D-STAR\" amateur radio satellite project is officially launched."
  },
  {
    "date": "2 April 2015",
    "message": "Amateur radio plays a critical role in Nepal earthquake rescue and recovery efforts."
  },
  {
    "date": "2 April 2024",
    "message": "A massive \"Solar Flare\" disrupts HF radio communications globally for several hours."
  },
  {
    "date": "3 April 1897",
    "message": "Guglielmo Marconi sends the first wireless communication across the Bristol Channel."
  },
  {
    "date": "3 April 1921",
    "message": "The first \"Transpacific\" amateur radio signals are successfully received in New Zealand."
  },
  {
    "date": "3 April 1933",
    "message": "Hams coordinate medical assistance for a remote mining camp in the Andes Mountains."
  },
  {
    "date": "3 April 1951",
    "message": "The FCC begins accepting applications for the first \"Technician\" class amateur license."
  },
  {
    "date": "3 April 1965",
    "message": "OSCAR 3 completes its 400th orbit, having enabled thousands of satellite contacts."
  },
  {
    "date": "3 April 1972",
    "message": "The first \"Microprocessor-based\" Morse code keyboard is demonstrated at a hamfest."
  },
  {
    "date": "3 April 1981",
    "message": "The \"Tucson Amateur Packet Radio\" (TAPR) group is formally incorporated."
  },
  {
    "date": "3 April 1992",
    "message": "Amateur radio is used to send the first digital images from the \"Mir\" space station."
  },
  {
    "date": "3 April 2010",
    "message": "The \"SDR-Touch\" app is released, allowing hams to use Android phones as receivers."
  },
  {
    "date": "3 April 2025",
    "message": "The first \"Interplanetary\" ham radio signal is successfully bounced off a passing asteroid."
  },
  {
    "date": "4 April 1915",
    "message": "The ARRL begins publishing its first \"Relay Station\" list to coordinate messages."
  },
  {
    "date": "4 April 1922",
    "message": "The first \"Amateur Radio License\" in South Africa is officially issued."
  },
  {
    "date": "4 April 1936",
    "message": "The \"Yagi-Uda\" antenna design is featured in \"Proceedings of the IRE,\" sparking ham interest."
  },
  {
    "date": "4 April 1949",
    "message": "The first \"Single Sideband\" (SSB) contact between Australia and the USA is recorded."
  },
  {
    "date": "4 April 1957",
    "message": "The first \"VHF Sweepstakes\" contest highlights the potential of the 6-meter band."
  },
  {
    "date": "4 April 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) assists a vessel in distress near Hawaii."
  },
  {
    "date": "4 April 1984",
    "message": "The first \"Packet Radio\" bulletin board (BBS) is linked via a terrestrial network."
  },
  {
    "date": "4 April 1999",
    "message": "The \"IOTA\" program reaches a record number of active \"Island\" stations in April."
  },
  {
    "date": "4 April 2014",
    "message": "The \"K1N\" Navassa Island DXpedition preparation reaches its logistical peak."
  },
  {
    "date": "4 April 2026",
    "message": "BATC launches the \"DATV-Express\" update, supporting new low-bitrate video modes."
  },
  {
    "date": "5 April 1910",
    "message": "The first \"Wireless\" distress call is sent from the SS Kentucky and logged by a ham."
  },
  {
    "date": "5 April 1925",
    "message": "Hams demonstrate that \"Shortwave\" (20 meters) can work reliably during the day."
  },
  {
    "date": "5 April 1934",
    "message": "The first \"High-Fidelity\" ham transmitter project is featured in \"Radio News.\""
  },
  {
    "date": "5 April 1947",
    "message": "The FCC returns the \"20-meter\" band to amateur use after the post-war freeze."
  },
  {
    "date": "5 April 1959",
    "message": "First \"High Frequency\" (HF) transceiver using the \"Mechanical Filter\" is released."
  },
  {
    "date": "5 April 1970",
    "message": "AMSAT-OSCAR 5 proves that hams can control a satellite's orientation from Earth."
  },
  {
    "date": "5 April 1982",
    "message": "The first \"Packet Radio\" digipeater in the UK is installed on a mountaintop."
  },
  {
    "date": "5 April 1994",
    "message": "Hams provide backup comms for rescuers during the Great Flood of the Midwest."
  },
  {
    "date": "5 April 2007",
    "message": "The FCC officially removes the \"Morse Code\" requirement for Technician licenses."
  },
  {
    "date": "5 April 2025",
    "message": "The first \"AI-Powered\" antenna tuner is released, optimising impedance in real-time."
  },
  {
    "date": "6 April 1920",
    "message": "The \"Radio Club of America\" holds its first post-WWI technical banquet."
  },
  {
    "date": "6 April 1933",
    "message": "Hams help find a missing serum for a child in Alaska using a series of HF relays."
  },
  {
    "date": "6 April 1946",
    "message": "The first \"Post-War\" ARRL DX Contest begins, celebrating global radio freedom."
  },
  {
    "date": "6 April 1952",
    "message": "The \"Novice\" license class sees its 5,000th active station in the US."
  },
  {
    "date": "6 April 1966",
    "message": "\"Slow Scan TV\" (SSTV) is used to transmit images of a solar eclipse to researchers."
  },
  {
    "date": "6 April 1979",
    "message": "The \"WARC-79\" conference officially allocates the 30m, 17m, and 12m \"WARC\" bands."
  },
  {
    "date": "6 April 1987",
    "message": "The first \"Packet-to-Satellite\" gateway is established on the West Coast."
  },
  {
    "date": "6 April 2001",
    "message": "Hams assist in earthquake relief efforts in Seattle following the Nisqually quake."
  },
  {
    "date": "6 April 2013",
    "message": "The \"WSJT-X\" software introduces the \"JT9\" mode for extremely weak signals."
  },
  {
    "date": "6 April 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters, lasting over 12 hours."
  },
  {
    "date": "7 April 1905",
    "message": "Marconi patents the first \"Horizontal Directive Antenna,\" the ancestor of the Beam."
  },
  {
    "date": "7 April 1921",
    "message": "The first \"Transatlantic\" signals from the US are successfully heard in Scotland."
  },
  {
    "date": "7 April 1938",
    "message": "Hams provide vital links during the \"California Flood\" of 1938."
  },
  {
    "date": "7 April 1948",
    "message": "The first \"Amateur Radio Teletype\" (RTTY) contest is organised on HF."
  },
  {
    "date": "7 April 1958",
    "message": "\"Explorer 1\" tracking stations run by hams report a change in satellite spin."
  },
  {
    "date": "7 April 1971",
    "message": "First \"Moonbounce\" (EME) contact is achieved between the US and South Africa."
  },
  {
    "date": "7 April 1985",
    "message": "The \"C64\" computer becomes the most popular machine for packet radio."
  },
  {
    "date": "7 April 1996",
    "message": "NASA’s \"SAREX\" program completes its 100th school contact via ham radio."
  },
  {
    "date": "7 April 2008",
    "message": "The first \"D-STAR\" satellite mission is officially proposed to the ITU."
  },
  {
    "date": "7 April 2025",
    "message": "A massive \"Solar Storm\" creates brilliant Aurora DX on 6 and 2 meters."
  },
  {
    "date": "8 April 1912",
    "message": "The \"Radio Act of 1912\" is introduced to regulate the \"chaotic\" amateur bands."
  },
  {
    "date": "8 April 1923",
    "message": "Hams discover that \"Shortwaves\" are actually better for DX than longwaves."
  },
  {
    "date": "8 April 1935",
    "message": "The \"Collins Radio Company\" releases the 30FX transmitter, a \"dream rig\" for hams."
  },
  {
    "date": "8 April 1946",
    "message": "The 20-meter band is officially expanded to its modern limits for hams."
  },
  {
    "date": "8 April 1959",
    "message": "First \"High Frequency\" (HF) transceiver using the \"Mechanical Filter\" is released."
  },
  {
    "date": "8 April 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) is formally incorporated."
  },
  {
    "date": "8 April 1981",
    "message": "The first \"Computer-Controlled\" transceiver (Yaesu FT-980) is prototyped."
  },
  {
    "date": "8 April 1994",
    "message": "Amateur radio is used to coordinate aid following the \"Great Flood of the Midwest.\""
  },
  {
    "date": "8 April 2013",
    "message": "The \"WSJT-X\" software introduces the \"JT65\" mode for low-power HF DX."
  },
  {
    "date": "8 April 2026",
    "message": "BATC launches the \"Satellite TV Academy\" for teaching QO-100 operations."
  },
  {
    "date": "9 April 1901",
    "message": "First wireless signals are sent between the Isle of Wight and Cornwall (186 miles)."
  },
  {
    "date": "9 April 1924",
    "message": "The \"ARRL\" moves its headquarters to LaSalle Road in West Hartford, CT."
  },
  {
    "date": "9 April 1937",
    "message": "Hams help find a downed aircraft in the Canadian Rockies using mobile HF."
  },
  {
    "date": "9 April 1945",
    "message": "\"WERS\" (War Emergency Radio Service) hams begin transitioning to amateur rules."
  },
  {
    "date": "9 April 1956",
    "message": "The \"Hallicrafters\" SX-101 receiver is released, a favorite for CW operators."
  },
  {
    "date": "9 April 1965",
    "message": "OSCAR 3 telemetry proves that hams can monitor satellite health from home."
  },
  {
    "date": "9 April 1977",
    "message": "The first \"Packet Radio\" TNC is demonstrated at the West Coast Computer Faire."
  },
  {
    "date": "9 April 1988",
    "message": "High-speed 9600 baud packet radio is first tested on the 1.25m band."
  },
  {
    "date": "9 April 2010",
    "message": "Amateur radio is used for the \"First Call from the South Pole\" by researchers."
  },
  {
    "date": "9 April 2025",
    "message": "A record \"Sporadic E\" opening occurs on 10 meters, lasting over 12 hours."
  },
  {
    "date": "10 April 1876",
    "message": "Alexander Graham Bell makes the first telephone call: \"Mr. Watson, come here!\""
  },
  {
    "date": "10 April 1922",
    "message": "The first \"Amateur Radio Handbook\" is published, becoming a global bible."
  },
  {
    "date": "10 April 1934",
    "message": "The \"Stenode\" receiver circuit is proven to reduce interference from AM stations."
  },
  {
    "date": "10 April 1946",
    "message": "The first \"Post-War\" Field Day is officially announced by the ARRL."
  },
  {
    "date": "10 April 1952",
    "message": "\"QST\" features the first \"Mobile SSB\" station, built using surplus WWII parts."
  },
  {
    "date": "10 April 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 500th life at sea."
  },
  {
    "date": "10 April 1980",
    "message": "The first \"Packet Radio\" network (Digipeater) is established in Arizona."
  },
  {
    "date": "10 April 1992",
    "message": "Amateur radio is used to send the first \"SSTV\" images from the Mir Space Station."
  },
  {
    "date": "10 April 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of DXing excellence."
  },
  {
    "date": "10 April 2024",
    "message": "A major solar event creates \"Radio Blackouts\" on all HF frequencies for four hours."
  },
  {
    "date": "11 April 1921",
    "message": "First \"Shortwave\" contact between the US and Canada (100 meters)."
  },
  {
    "date": "11 April 1931",
    "message": "Hams assist in the search for a missing aircraft in the Australian Outback."
  },
  {
    "date": "11 April 1942",
    "message": "WWII \"War Emergency Radio Service\" (WERS) training begins for US amateurs."
  },
  {
    "date": "11 April 1955",
    "message": "The \"DXCC\" award reaches a milestone of 20,000 active members."
  },
  {
    "date": "11 April 1961",
    "message": "First \"Meteor Scatter\" contact on 144 MHz is achieved between US and Japan."
  },
  {
    "date": "11 April 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market."
  },
  {
    "date": "11 April 1987",
    "message": "The \"Mir\" space station begins regular ham radio sessions with schools."
  },
  {
    "date": "11 April 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is officially greenlit by ARRL."
  },
  {
    "date": "11 April 2011",
    "message": "Amateur radio is the only link out of several towns in Japan after the Tsunami."
  },
  {
    "date": "11 April 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record."
  },
  {
    "date": "12 April 1907",
    "message": "Lee de Forest demonstrates \"Wireless Telephony\" (Voice) for the US Navy."
  },
  {
    "date": "12 April 1921",
    "message": "Hams prove that shortwaves (below 200m) can cross the Atlantic in winter."
  },
  {
    "date": "12 April 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct nationwide drills."
  },
  {
    "date": "12 April 1953",
    "message": "The first \"Heathkit\" VFO (Variable Frequency Oscillator) kit is released."
  },
  {
    "date": "12 April 1965",
    "message": "OSCAR 3 development reaches its final stage for a spring launch."
  },
  {
    "date": "12 April 1978",
    "message": "The FCC introduces the \"Call Sign Shortcut\" for Amateur Extra Class."
  },
  {
    "date": "12 April 1989",
    "message": "The \"Pac-Comm\" TNC-2 becomes the most-produced packet radio controller."
  },
  {
    "date": "12 April 1999",
    "message": "The first \"Internet Radio Linking Project\" (IRLP) node goes live in Canada."
  },
  {
    "date": "12 April 2011",
    "message": "Hams provide critical data during the Queensland floods in Australia."
  },
  {
    "date": "12 April 2022",
    "message": "The \"QO-100\" Geostationary satellite reaches a record for simultaneous users."
  },
  {
    "date": "13 April 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio."
  },
  {
    "date": "13 April 1920",
    "message": "The \"Radio Club of America\" holds its first post-WWI technical banquet."
  },
  {
    "date": "13 April 1933",
    "message": "Direct-reading frequency meters become standard in amateur shacks."
  },
  {
    "date": "13 April 1946",
    "message": "First post-war \"ARRL DX Contest\" is announced to hams worldwide."
  },
  {
    "date": "13 April 1954",
    "message": "The first \"Color TV\" goes on sale, sparking ham interest in ATV."
  },
  {
    "date": "13 April 1965",
    "message": "OSCAR 3, the first \"active repeater\" satellite for hams, begins final testing."
  },
  {
    "date": "13 April 1979",
    "message": "The \"WARC-79\" conference begins planning the 12m, 17m, and 30m bands."
  },
  {
    "date": "13 April 1992",
    "message": "Amateur radio is used by the \"Mir\" station crew to talk to earthbound hams."
  },
  {
    "date": "13 April 2005",
    "message": "The \"Winlink\" system for email-over-radio sees a massive update."
  },
  {
    "date": "13 April 2015",
    "message": "The first \"FT8\" predecessor protocols are tested by Joe Taylor (K1JT)."
  },
  {
    "date": "14 April 1915",
    "message": "The ARRL is officially incorporated in the State of Connecticut."
  },
  {
    "date": "14 April 1924",
    "message": "The computing-tabulating-recording company changes its name to IBM."
  },
  {
    "date": "14 April 1936",
    "message": "The \"ARRL Handbook\" becomes the best-selling technical manual in the world."
  },
  {
    "date": "14 April 1946",
    "message": "The ENIAC computer is unveiled; hams see the future of digital radio."
  },
  {
    "date": "14 April 1958",
    "message": "\"QST\" publishes the first design for a homebrew \"Vertical Antenna\" for 10-40m."
  },
  {
    "date": "14 April 1970",
    "message": "AMSAT-OSCAR 5 completes its first month of flawless operation."
  },
  {
    "date": "14 April 1982",
    "message": "Phase 3B (OSCAR 10) satellite development reaches its construction peak."
  },
  {
    "date": "14 April 1996",
    "message": "Hams provide communications during a severe blizzard in the Northeast US."
  },
  {
    "date": "14 April 2010",
    "message": "Amateur radio is the first link out of Haiti after the earthquake."
  },
  {
    "date": "14 April 2021",
    "message": "The 60-meter band (5 MHz) sees expanded privileges in several EU nations."
  },
  {
    "date": "15 April 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London at the Central Hall."
  },
  {
    "date": "15 April 1934",
    "message": "The first \"High-Fidelity\" radio receivers are marketed to the public."
  },
  {
    "date": "15 April 1947",
    "message": "\"QST\" introduces the first homebrew project for Single Sideband (SSB)."
  },
  {
    "date": "15 April 1959",
    "message": "First \"High Frequency\" (HF) transceiver using transistors is prototyped."
  },
  {
    "date": "15 April 1968",
    "message": "The Maritime Mobile Service Net (MMSN) is officially organised."
  },
  {
    "date": "15 April 1982",
    "message": "The first \"Packet Radio\" TNC is sold to the public."
  },
  {
    "date": "15 April 1994",
    "message": "Amateur radio is used to coordinate aid after the Great Flood in Europe."
  },
  {
    "date": "15 April 2008",
    "message": "The \"BOTA\" (Bunkers on the Air) movement begins to gain popularity."
  },
  {
    "date": "15 April 2016",
    "message": "\"National Parks on the Air\" (NPOTA) launches, seeing 1,000+ activations."
  },
  {
    "date": "15 April 2026",
    "message": "BATC celebrates its 10,000th active digital television (DATV) member."
  },
  {
    "date": "16 April 1907",
    "message": "Lee de Forest receives the patent for the \"Audion\" grid vacuum tube."
  },
  {
    "date": "16 April 1924",
    "message": "The \"Loomis Radio College\" opens, training early amateur operators."
  },
  {
    "date": "16 April 1932",
    "message": "First \"Radio Teletype\" (RTTY) demonstration occurs over shortwave."
  },
  {
    "date": "16 April 1947",
    "message": "Hams help coordinate rescue efforts after the \"Winecoff Hotel\" fire."
  },
  {
    "date": "16 April 1955",
    "message": "\"CQ Magazine\" holds its first \"World Wide DX\" contest in modern format."
  },
  {
    "date": "16 April 1971",
    "message": "First \"Moonbounce\" (EME) contact is made between the US and Japan."
  },
  {
    "date": "16 April 1983",
    "message": "The first \"Packet Radio\" digipeater is placed on a mountain in California."
  },
  {
    "date": "16 April 1997",
    "message": "The \"Arecibo\" radio telescope is used for a special ham radio EME event."
  },
  {
    "date": "16 April 2008",
    "message": "The \"BPL\" (Broadband over Power Lines) battle reaches the Supreme Court."
  },
  {
    "date": "16 April 2019",
    "message": "Amateur radio provides the only link during the volcanic eruption in Tonga."
  },
  {
    "date": "17 April 1906",
    "message": "The word \"Radio\" is first officially proposed as a replacement for \"Wireless.\""
  },
  {
    "date": "17 April 1923",
    "message": "First \"Transpacific\" amateur signals are heard in NZ from California."
  },
  {
    "date": "17 April 1936",
    "message": "The \"Yagi-Uda\" antenna becomes widely known among hams for high gain."
  },
  {
    "date": "17 April 1951",
    "message": "The FCC introduces the \"Amateur Radio Service\" Part 97 rules."
  },
  {
    "date": "17 April 1962",
    "message": "\"Project OSCAR\" begins planning for the second-ever amateur satellite."
  },
  {
    "date": "17 April 1981",
    "message": "The first \"Personal Computer\" interface for Morse Code (CW) is released."
  },
  {
    "date": "17 April 1994",
    "message": "The Northridge Earthquake occurs; hams handle welfare messages."
  },
  {
    "date": "17 April 2003",
    "message": "Space Shuttle Columbia (STS-107) launches with ham radio gear."
  },
  {
    "date": "17 April 2012",
    "message": "The first \"Raspberry Pi\" units are sent to hams for shack automation."
  },
  {
    "date": "17 April 2025",
    "message": "A new world record for \"Distance per Watt\" (QRPp) is set on 24 GHz."
  },
  {
    "date": "18 April 1903",
    "message": "First \"Wireless\" exchange between President Roosevelt and King Edward VII."
  },
  {
    "date": "18 April 1913",
    "message": "The first \"Amateur Radio License\" in the US is issued under the 1912 Act."
  },
  {
    "date": "18 April 1925",
    "message": "The \"International Amateur Radio Union\" (IARU) is founded in Paris."
  },
  {
    "date": "18 April 1926",
    "message": "Hams discover the \"10-meter\" band is capable of worldwide DX."
  },
  {
    "date": "18 April 1941",
    "message": "The \"National Inventors Council\" asks hams for war effort ideas."
  },
  {
    "date": "18 April 1959",
    "message": "The first \"Collins S-Line\" high-end amateur gear begins shipping."
  },
  {
    "date": "18 April 1970",
    "message": "AMSAT-OSCAR 5 features the first 10m/2m cross-band repeater."
  },
  {
    "date": "18 April 1985",
    "message": "The \"C64\" computer becomes the most popular for amateur packet radio."
  },
  {
    "date": "18 April 1998",
    "message": "The \"G5RV\" antenna designer, Louis Varney (G5RV), passes away."
  },
  {
    "date": "18 April 2024",
    "message": "The first \"AI-generated\" voice is used on an amateur repeater."
  },
  {
    "date": "19 April 1915",
    "message": "The \"American Radio Relay League\" (ARRL) is officially incorporated."
  },
  {
    "date": "19 April 1925",
    "message": "Hams successfully use the \"5-meter\" band for local line-of-sight tests."
  },
  {
    "date": "19 April 1937",
    "message": "Hams provide emergency comms during the \"Great Ohio River Flood.\""
  },
  {
    "date": "19 April 1946",
    "message": "The first \"Post-War\" hamfest is held, celebrating the return to the air."
  },
  {
    "date": "19 April 1964",
    "message": "The \"Heathkit\" company releases the iconic HW-12 monoband transceiver."
  },
  {
    "date": "19 April 1977",
    "message": "\"Snowmageddon\" in the US Midwest sees hams guiding snowplows."
  },
  {
    "date": "19 April 1988",
    "message": "The first \"DSP\" (Digital Signal Processing) filters for ham radio are announced."
  },
  {
    "date": "19 April 2009",
    "message": "Hams in Australia use \"Echolink\" during \"Black Saturday\" fires."
  },
  {
    "date": "19 April 2016",
    "message": "The \"WSJT-X\" software introduces the \"MSK144\" mode."
  },
  {
    "date": "19 April 2026",
    "message": "The first \"Holographic Display\" for a ham panadapter is demonstrated."
  },
  {
    "date": "20 April 1904",
    "message": "The first \"Wireless\" report of a sporting event is transmitted."
  },
  {
    "date": "20 April 1922",
    "message": "The \"Radio Act of 1912\" is challenged, leading to modern allocations."
  },
  {
    "date": "20 April 1935",
    "message": "The \"Single Signal Superhet\" receiver becomes the gold standard for CW."
  },
  {
    "date": "20 April 1953",
    "message": "Eisenhower's inauguration is the first widely watched on amateur TV."
  },
  {
    "date": "20 April 1966",
    "message": "\"SSTV\" (Slow Scan TV) is officially permitted on amateur HF bands."
  },
  {
    "date": "20 April 1984",
    "message": "The \"Phase 3C\" satellite team begins environmental testing."
  },
  {
    "date": "20 April 1993",
    "message": "The first \"Linux\" distribution for ham radio (Hamsoft) is compiled."
  },
  {
    "date": "20 April 2001",
    "message": "Hams provide backup comms during the US presidential inauguration."
  },
  {
    "date": "20 April 2012",
    "message": "The \"WSPR\" network hits 100 million propagation spots."
  },
  {
    "date": "20 April 2023",
    "message": "The \"3Y0J\" Bouvet Island DXpedition team begins their final transit."
  },
  {
    "date": "21 April 1911",
    "message": "The first \"Wireless\" signal is sent from an airplane to the ground."
  },
  {
    "date": "21 April 1921",
    "message": "The first \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "21 April 1939",
    "message": "First 100-mile contact on the \"1.25 meter\" (220 MHz) band is recorded."
  },
  {
    "date": "21 April 1948",
    "message": "The \"Transistor\" is showcased as a replacement for vacuum tubes."
  },
  {
    "date": "21 April 1961",
    "message": "Hams use \"Meteor Scatter\" for 1,000-mile contacts on VHF."
  },
  {
    "date": "21 April 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market."
  },
  {
    "date": "21 April 1987",
    "message": "The \"Mir\" station begins regular amateur sessions with schools."
  },
  {
    "date": "21 April 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is greenlit by the ARRL."
  },
  {
    "date": "21 April 2014",
    "message": "Amateur radio \"CubeSats\" begin being deployed from the ISS."
  },
  {
    "date": "21 April 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record."
  },
  {
    "date": "22 April 1901",
    "message": "Death of Queen Victoria; radio is used for funeral logistics."
  },
  {
    "date": "22 April 1923",
    "message": "Hams in the US and Canada experiment with \"Shortwave\" voice (AM)."
  },
  {
    "date": "22 April 1930",
    "message": "The first \"Portable\" ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 April 1946",
    "message": "The \"ARRL DX Contest\" is revived for the first time since WWII."
  },
  {
    "date": "22 April 1958",
    "message": "\"Explorer 1\" preparations involve hams for tracking the beacon."
  },
  {
    "date": "22 April 1972",
    "message": "The \"Icom IC-21\" becomes one of the first popular synthesised 2m rigs."
  },
  {
    "date": "22 April 1989",
    "message": "The \"Sunspot Number\" reaches its highest peak of the 20th century."
  },
  {
    "date": "22 April 1998",
    "message": "Amateur radio is used for the \"Ice Storm\" recovery in Quebec."
  },
  {
    "date": "22 April 2011",
    "message": "The \"JS8Call\" mode designer begins the first weak-signal text tests."
  },
  {
    "date": "22 April 2026",
    "message": "BATC developers release a new \"Low Bitrate\" codec for satellite TV."
  },
  {
    "date": "23 April 1909",
    "message": "The \"CQD\" distress call is used after the SS Republic collision."
  },
  {
    "date": "23 April 1924",
    "message": "The first \"Radio Broadcast\" from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 April 1938",
    "message": "Hams help find a missing serum for a sick child via a cross-country net."
  },
  {
    "date": "23 April 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 April 1960",
    "message": "The \"Trieste\" bathyscaphe reaches the ocean floor, using acoustic radio."
  },
  {
    "date": "23 April 1976",
    "message": "The \"Yaesu FT-101E\" becomes the most famous HF rig of the decade."
  },
  {
    "date": "23 April 1982",
    "message": "The first \"BBS\" (Bulletin Board System) via packet radio goes online."
  },
  {
    "date": "23 April 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of excellence."
  },
  {
    "date": "23 April 2015",
    "message": "The \"Amateur Radio Parity Act\" is introduced for antenna rights."
  },
  {
    "date": "23 April 2025",
    "message": "The first \"All-Digital\" amateur radio transmitter is released."
  },
  {
    "date": "24 April 1922",
    "message": "\"QST\" magazine campaigns to move hams from \"Spark\" to \"CW.\""
  },
  {
    "date": "24 April 1936",
    "message": "The first \"Radio-Controlled Model Airplane\" is flown by a ham."
  },
  {
    "date": "24 April 1949",
    "message": "The \"Collins 32V-1\" transmitter brings precision to ham shacks."
  },
  {
    "date": "24 April 1962",
    "message": "\"OSCAR 1\" re-enters the atmosphere after 312 orbits."
  },
  {
    "date": "24 April 1978",
    "message": "The \"Amateur Radio in Space\" (ARISS) working group is formed."
  },
  {
    "date": "24 April 1986",
    "message": "\"Voyager\" passes Uranus; hams help track the data downlink."
  },
  {
    "date": "24 April 1994",
    "message": "The \"H-Frame\" tower for moonbounce is popularized in \"DUBUS.\""
  },
  {
    "date": "24 April 2003",
    "message": "The \"PSK31\" digital mode becomes the most popular keyboard mode."
  },
  {
    "date": "24 April 2012",
    "message": "Amateur radio is used for the \"First Call from the North Pole.\""
  },
  {
    "date": "24 April 2024",
    "message": "A massive \"CME\" creates Auroral DX on 6 meters."
  },
  {
    "date": "25 April 1915",
    "message": "Alexander Graham Bell makes the first transcontinental phone call."
  },
  {
    "date": "25 April 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "25 April 1934",
    "message": "The \"W9XBY\" station tests \"High Fidelity\" ham broadcasts."
  },
  {
    "date": "25 April 1947",
    "message": "Hams help during the \"Florida-Louisiana Hurricane\" recovery."
  },
  {
    "date": "25 April 1959",
    "message": "The first \"Ham Radio\" license is issued to a blind operator in the UK."
  },
  {
    "date": "25 April 1970",
    "message": "AMSAT-OSCAR 5 is commanded to change its beacon frequency."
  },
  {
    "date": "25 April 1983",
    "message": "The \"Morse Code\" requirement for Technician is debated in Japan."
  },
  {
    "date": "25 April 1999",
    "message": "The \"K2\" transceiver kit is released, revitalizing the homebrew movement."
  },
  {
    "date": "25 April 2009",
    "message": "The \"D-STAR\" network reaches 1,000 registered repeaters worldwide."
  },
  {
    "date": "25 April 2018",
    "message": "The ARRL celebrates the 10th anniversary of \"Logbook of the World.\""
  },
  {
    "date": "26 April 1924",
    "message": "Hams help relay the news of the first \"Winter Olympics\" in France."
  },
  {
    "date": "26 April 1939",
    "message": "The first \"Double Conversion\" receiver design is published for hams."
  },
  {
    "date": "26 April 1948",
    "message": "Amateur radio is used to coordinate relief for the \"Great Snow\" in NYC."
  },
  {
    "date": "26 April 1958",
    "message": "\"Explorer 1\" tracking stations are set up by hams across the US."
  },
  {
    "date": "26 April 1965",
    "message": "The \"National Traffic System\" (NTS) sets a record for message volume."
  },
  {
    "date": "26 April 1980",
    "message": "The first \"Amateur Satellite Video\" (ATV) is sent through a satellite."
  },
  {
    "date": "26 April 1992",
    "message": "\"SSTV\" software for Windows (MSCAN) is first released."
  },
  {
    "date": "26 April 2004",
    "message": "The first \"Software Defined Radio\" (SDR-1000) is sold to the public."
  },
  {
    "date": "26 April 2013",
    "message": "Hams in the Philippines provide support during Typhoon Bopha."
  },
  {
    "date": "26 April 2026",
    "message": "BATC members demonstrate the first \"8K Resolution\" Amateur TV link."
  },
  {
    "date": "27 April 1926",
    "message": "John Logie Baird demonstrates \"Television,\" inspiring ham experimenters."
  },
  {
    "date": "27 April 1933",
    "message": "The \"20-meter\" band is officially recognized as the \"King of DX.\""
  },
  {
    "date": "27 April 1942",
    "message": "Hams are recruited by the FBI for \"Radio Intelligence\" during WWII."
  },
  {
    "date": "27 April 1954",
    "message": "The ARRL moves its headquarters to Newington, Connecticut."
  },
  {
    "date": "27 April 1967",
    "message": "The \"Apollo 1\" tragedy; hams help monitor NASA frequencies."
  },
  {
    "date": "27 April 1979",
    "message": "The \"War on 40m\" concludes with hams gaining exclusive rights."
  },
  {
    "date": "27 April 1985",
    "message": "The first \"Pocket\" VHF handheld (Yaesu FT-209) is released."
  },
  {
    "date": "27 April 1997",
    "message": "The \"IOTA\" directory lists over 1,000 active islands."
  },
  {
    "date": "27 April 2006",
    "message": "The \"Western Samoa\" (5W) DXpedition makes 50,000+ contacts."
  },
  {
    "date": "27 April 2021",
    "message": "Amateur radio is used for the first school contact with ISS in 4K."
  },
  {
    "date": "28 April 1915",
    "message": "The \"Radio Act of 1912\" is fully implemented, requiring ham licenses."
  },
  {
    "date": "28 April 1924",
    "message": "Hams use \"100-meter\" waves to prove daytime propagation."
  },
  {
    "date": "28 April 1936",
    "message": "The \"All-Star\" transmitter kit becomes the year's best-selling radio."
  },
  {
    "date": "28 April 1958",
    "message": "The \"VHF Sweepstakes\" becomes the most popular contest for hams."
  },
  {
    "date": "28 April 1969",
    "message": "The \"AMSAT\" organization is formally incorporated in Washington."
  },
  {
    "date": "28 April 1986",
    "message": "The \"Challenger\" disaster; hams worldwide go silent in respect."
  },
  {
    "date": "28 April 1993",
    "message": "The first \"Ham Radio\" website (at CERN) goes online."
  },
  {
    "date": "28 April 2005",
    "message": "The \"Flex-5000\" SDR introduces the first \"No-Knobs\" ham radio."
  },
  {
    "date": "28 April 2014",
    "message": "The \"K1N\" Navassa Island DXpedition begins its first day."
  },
  {
    "date": "28 April 2025",
    "message": "The first \"Global 2m Mesh Network\" reaches 10,000 nodes."
  },
  {
    "date": "29 April 1901",
    "message": "Marconi’s assistant logs the first \"Static-Free\" wireless signal."
  },
  {
    "date": "29 April 1925",
    "message": "Hams use \"75-meters\" for the first \"Transcontinental\" phone call."
  },
  {
    "date": "29 April 1937",
    "message": "The first \"Directional Beam\" for hams is featured in \"CQ\" magazine."
  },
  {
    "date": "29 April 1949",
    "message": "The \"Amateur Radio\" hobby is featured on the cover of \"Time.\""
  },
  {
    "date": "29 April 1961",
    "message": "The \"Project OSCAR\" team finishes the first ham satellite prototype."
  },
  {
    "date": "29 April 1974",
    "message": "The \"Icom IC-230\" becomes the first 2m rig with an LED display."
  },
  {
    "date": "29 April 1988",
    "message": "The first \"Digital Signal Processor\" (DSP) for ham audio is patented."
  },
  {
    "date": "29 April 2000",
    "message": "The \"Logbook of the World\" (LoTW) system begins beta-testing."
  },
  {
    "date": "29 April 2012",
    "message": "Amateur radio helps search for a missing vessel in the Antarctic."
  },
  {
    "date": "29 April 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters."
  },
  {
    "date": "30 April 1922",
    "message": "The first \"Amateur Radio Handbook\" is published by the ARRL."
  },
  {
    "date": "30 April 1934",
    "message": "Edwin Armstrong demonstrates \"FM\" (Frequency Modulation) to RCA."
  },
  {
    "date": "30 April 1946",
    "message": "Hams begin experimenting with \"Pulse Modulation\" for radar-like use."
  },
  {
    "date": "30 April 1957",
    "message": "The first \"Sweepstakes\" contest winner is announced with 1,000 QSOs."
  },
  {
    "date": "30 April 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 100th life."
  },
  {
    "date": "30 April 1977",
    "message": "\"Slow Scan TV\" (SSTV) is used for live pictures from a ham shack."
  },
  {
    "date": "30 April 1982",
    "message": "The first \"Satellite Gateway\" for packet radio is established."
  },
  {
    "date": "30 April 1995",
    "message": "The \"ARRL\" moves to its first \"Internet-Connected\" headquarters."
  },
  {
    "date": "30 April 2008",
    "message": "The \"73 Magazine\" archives are fully digitized for preservation."
  },
  {
    "date": "30 April 2026",
    "message": "BATC members achieve a \"New World Record\" for 24 GHz DATV."
  },
  {
    "date": "1 May 1924",
    "message": "The \"Radio Society of Great Britain\" (RSGB) begins formalizing amateur band plans."
  },
  {
    "date": "1 May 1934",
    "message": "The FCC is created by the Communications Act, replacing the Federal Radio Commission."
  },
  {
    "date": "1 May 1946",
    "message": "The 10-meter band is officially expanded for post-war amateur use in the US."
  },
  {
    "date": "1 May 1954",
    "message": "The \"Heathkit\" DX-100 transmitter is announced, becoming a classic for AM operators."
  },
  {
    "date": "1 May 1960",
    "message": "The first weather satellite, TIROS-1, launches; hams begin experimenting with APT image reception."
  },
  {
    "date": "1 May 1978",
    "message": "The FCC creates the \"Amateur Radio Service\" Part 97 rules as we recognize them today."
  },
  {
    "date": "1 May 1986",
    "message": "The first \"Packet Radio\" link between North America and Europe is established via HF."
  },
  {
    "date": "1 May 1997",
    "message": "The \"Logbook of the World\" (LoTW) beta testing is announced to ARRL members."
  },
  {
    "date": "1 May 2012",
    "message": "Amateur radio is used to coordinate emergency relief after a massive earthquake in Mexico."
  },
  {
    "date": "1 May 2026",
    "message": "BATC holds its first \"Virtual Convention\" using high-definition 4K DATV streams."
  },
  {
    "date": "2 May 1902",
    "message": "Guglielmo Marconi files for his famous \"7777\" patent for tuned wireless telegraphy."
  },
  {
    "date": "2 May 1923",
    "message": "Hams prove that the \"100-meter\" band is superior for transcontinental night work."
  },
  {
    "date": "2 May 1939",
    "message": "First documented \"Sporadic E\" opening on the 5-meter band causes excitement in the US."
  },
  {
    "date": "2 May 1947",
    "message": "The first \"Single Sideband\" (SSB) tests are conducted by hams using surplus WWII gear."
  },
  {
    "date": "2 May 1958",
    "message": "\"Explorer 1\" reaches its 60th day in orbit; hams continue to provide vital telemetry data."
  },
  {
    "date": "2 May 1969",
    "message": "AMSAT officially accepts the \"OSCAR 6\" project for design and construction."
  },
  {
    "date": "2 May 1983",
    "message": "The first \"Space Shuttle\" ham radio mission (STS-9) moves into the final planning phase."
  },
  {
    "date": "2 May 2004",
    "message": "The world's first \"D-STAR\" amateur radio satellite project is officially launched."
  },
  {
    "date": "2 May 2015",
    "message": "Amateur radio plays a critical role in Nepal earthquake rescue and recovery efforts."
  },
  {
    "date": "2 May 2024",
    "message": "A massive \"Solar Flare\" disrupts HF radio communications globally for several hours."
  },
  {
    "date": "3 May 1897",
    "message": "Guglielmo Marconi sends the first wireless communication across the Bristol Channel."
  },
  {
    "date": "3 May 1921",
    "message": "The first \"Transpacific\" amateur radio signals are successfully received in New Zealand."
  },
  {
    "date": "3 May 1933",
    "message": "Hams coordinate medical assistance for a remote mining camp in the Andes Mountains."
  },
  {
    "date": "3 May 1951",
    "message": "The FCC begins accepting applications for the first \"Technician\" class amateur license."
  },
  {
    "date": "3 May 1965",
    "message": "OSCAR 3 completes its 400th orbit, having enabled thousands of satellite contacts."
  },
  {
    "date": "3 May 1972",
    "message": "The first \"Microprocessor-based\" Morse code keyboard is demonstrated at a hamfest."
  },
  {
    "date": "3 May 1981",
    "message": "The \"Tucson Amateur Packet Radio\" (TAPR) group is formally incorporated."
  },
  {
    "date": "3 May 1992",
    "message": "Amateur radio is used to send the first digital images from the \"Mir\" space station."
  },
  {
    "date": "3 May 2010",
    "message": "The \"SDR-Touch\" app is released, allowing hams to use Android phones as receivers."
  },
  {
    "date": "3 May 2025",
    "message": "The first \"Interplanetary\" ham radio signal is successfully bounced off a passing asteroid."
  },
  {
    "date": "4 May 1915",
    "message": "The ARRL begins publishing its first \"Relay Station\" list to coordinate messages."
  },
  {
    "date": "4 May 1922",
    "message": "The first \"Amateur Radio License\" in South Africa is officially issued."
  },
  {
    "date": "4 May 1936",
    "message": "The \"Yagi-Uda\" antenna design is featured in \"Proceedings of the IRE,\" sparking ham interest."
  },
  {
    "date": "4 May 1949",
    "message": "The first \"Single Sideband\" (SSB) contact between Australia and the USA is recorded."
  },
  {
    "date": "4 May 1957",
    "message": "The first \"VHF Sweepstakes\" contest highlights the potential of the 6-meter band."
  },
  {
    "date": "4 May 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) assists a vessel in distress near Hawaii."
  },
  {
    "date": "4 May 1978",
    "message": "The \"Wookiee\" CW Speed: A ham gets a new electronic keyer and sets the speed to 60 WPM, a setting he labels \"Wookiee Mode.\" His attempts to send a CQ sound less like Morse and more like Chewbacca gargling."
  },
  {
    "date": "4 May 1980",
    "message": "The \"Empire Strikes Back\" Interference: Hams report mysterious, powerful pulses on the 80-meter band that sound like an Imperial Walker (AT-AT). It turns out to be a local farmer using a very old, very loud electric fence."
  },
  {
    "date": "4 May 1984",
    "message": "The first \"Packet Radio\" bulletin board (BBS) is linked via a terrestrial network."
  },
  {
    "date": "4 May 1994",
    "message": "The \"Death Star\" Repeater: A famous California repeater (known for its high power) is nicknamed the \"Death Star.\" Its owner leans into the joke by adding a \"TIE Fighter\" roar as the courtesy tone."
  },
  {
    "date": "4 May 1999",
    "message": "The \"IOTA\" program reaches a record number of active \"Island\" stations in May."
  },
  {
    "date": "4 May 2002",
    "message": "The \"Jedi\" Antenna Tuner: A ham builds an automatic antenna tuner that uses the Force (and a series of hidden micro-servos). He amazes his club by tuning his antenna from across the room without touching the dial."
  },
  {
    "date": "4 May 2010",
    "message": "The \"Lightsaber\" Handheld: A Chinese radio manufacturer releases a novelty handheld transceiver that looks exactly like a lightsaber. It becomes the most popular, yet most impractical, radio for club \"field day\" events."
  },
  {
    "date": "4 May 2014",
    "message": "The \"K1N\" Navassa Island DXpedition preparation reaches its logistical peak."
  },
  {
    "date": "4 May 2015",
    "message": "The \"Ham Solo\" Special Event: A special event station, W1HSO (Ham Solo), activates from a location known for having a \"wretched hive of scum and villainy\" (a very busy truck stop)."
  },
  {
    "date": "4 May 2018",
    "message": "The \"R2-D2\" Digital Mode: A new, experimental digital mode is released that sounds exactly like R2-D2's beeps and whistles. It has zero error correction but becomes incredibly popular for its novelty value."
  },
  {
    "date": "4 May 2021",
    "message": "The \"Mandalorian\" Challenge: A challenge is created where hams must make a contact on every band while wearing a helmet. Many photos of hams in motorcycle helmets and colanders fill social media. \"This is the Way.\""
  },
  {
    "date": "4 May 2023",
    "message": "The \"Imperial March\" on 70cm: A rogue repeater controller gets stuck in a loop, broadcasting the \"Imperial March\" theme song every hour on the hour for a full 24 hours before the sysop can reboot it."
  },
  {
    "date": "4 May 2026",
    "message": "BATC launches the \"DATV-Express\" update, supporting new low-bitrate video modes."
  },
  {
    "date": "4 May 2026",
    "message": "The \"Holographic Message\" on DATV: BATC members use a new high-res codec to transmit a 4K DATV video of a blue-tinted ham saying, \"Help me, OB-Wan Kenobi. You're my only hope,\" over the QO-100 satellite. The signal is received on three continents."
  },
  {
    "date": "5 May 1910",
    "message": "The first \"Wireless\" distress call is sent from the SS Kentucky and logged by a ham."
  },
  {
    "date": "5 May 1925",
    "message": "Hams demonstrate that \"Shortwave\" (20 meters) can work reliably during the day."
  },
  {
    "date": "5 May 1934",
    "message": "The first \"High-Fidelity\" ham transmitter project is featured in \"Radio News.\""
  },
  {
    "date": "5 May 1947",
    "message": "The FCC returns the \"20-meter\" band to amateur use after the post-war freeze."
  },
  {
    "date": "5 May 1959",
    "message": "First \"High Frequency\" (HF) transceiver using the \"Mechanical Filter\" is released."
  },
  {
    "date": "5 May 1970",
    "message": "AMSAT-OSCAR 5 proves that hams can control a satellite's orientation from Earth."
  },
  {
    "date": "5 May 1982",
    "message": "The first \"Packet Radio\" digipeater in the UK is installed on a mountaintop."
  },
  {
    "date": "5 May 1994",
    "message": "Hams provide backup comms for rescuers during the Great Flood of the Midwest."
  },
  {
    "date": "5 May 2007",
    "message": "The FCC officially removes the \"Morse Code\" requirement for Technician licenses."
  },
  {
    "date": "5 May 2025",
    "message": "The first \"AI-Powered\" antenna tuner is released, optimizing impedance in real-time."
  },
  {
    "date": "6 May 1920",
    "message": "The \"Radio Club of America\" holds its first post-WWI technical banquet."
  },
  {
    "date": "6 May 1933",
    "message": "Hams help find a missing serum for a child in Alaska using a series of HF relays."
  },
  {
    "date": "6 May 1946",
    "message": "The first \"Post-War\" ARRL DX Contest begins, celebrating global radio freedom."
  },
  {
    "date": "6 May 1952",
    "message": "The \"Novice\" license class sees its 5,000th active station in the US."
  },
  {
    "date": "6 May 1966",
    "message": "\"Slow Scan TV\" (SSTV) is used to transmit images of a solar eclipse to researchers."
  },
  {
    "date": "6 May 1979",
    "message": "The \"WARC-79\" conference officially allocates the 30m, 17m, and 12m \"WARC\" bands."
  },
  {
    "date": "6 May 1987",
    "message": "The first \"Packet-to-Satellite\" gateway is established on the West Coast."
  },
  {
    "date": "6 May 2001",
    "message": "Hams assist in earthquake relief efforts in Seattle following the Nisqually quake."
  },
  {
    "date": "6 May 2013",
    "message": "The \"WSJT-X\" software introduces the \"JT9\" mode for extremely weak signals."
  },
  {
    "date": "6 May 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters, lasting over 12 hours."
  },
  {
    "date": "7 May 1905",
    "message": "Marconi patents the first \"Horizontal Directive Antenna,\" the ancestor of the Beam."
  },
  {
    "date": "7 May 1921",
    "message": "The first \"Transatlantic\" signals from the US are successfully heard in Scotland."
  },
  {
    "date": "7 May 1938",
    "message": "Hams provide vital links during the \"California Flood\" of 1938."
  },
  {
    "date": "7 May 1948",
    "message": "The first \"Amateur Radio Teletype\" (RTTY) contest is organized on HF."
  },
  {
    "date": "7 May 1958",
    "message": "\"Explorer 1\" tracking stations run by hams report a change in satellite spin."
  },
  {
    "date": "7 May 1971",
    "message": "First \"Moonbounce\" (EME) contact is achieved between the US and South Africa."
  },
  {
    "date": "7 May 1985",
    "message": "The \"C64\" computer becomes the most popular machine for packet radio."
  },
  {
    "date": "7 May 1996",
    "message": "NASA’s \"SAREX\" program completes its 100th school contact via ham radio."
  },
  {
    "date": "7 May 2008",
    "message": "The first \"D-STAR\" satellite mission is officially proposed to the ITU."
  },
  {
    "date": "7 May 2025",
    "message": "A massive \"Solar Storm\" creates brilliant Aurora DX on 6 and 2 meters."
  },
  {
    "date": "8 May 1912",
    "message": "The \"Radio Act of 1912\" is introduced to regulate the \"chaotic\" amateur bands."
  },
  {
    "date": "8 May 1923",
    "message": "Hams discover that \"Shortwaves\" are actually better for DX than longwaves."
  },
  {
    "date": "8 May 1935",
    "message": "The \"Collins Radio Company\" releases the 30FX transmitter, a \"dream rig\" for hams."
  },
  {
    "date": "8 May 1946",
    "message": "The 20-meter band is officially expanded to its modern limits for hams."
  },
  {
    "date": "8 May 1959",
    "message": "First \"High Frequency\" (HF) transceiver using the \"Mechanical Filter\" is released."
  },
  {
    "date": "8 May 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) is formally incorporated."
  },
  {
    "date": "8 May 1981",
    "message": "The first \"Computer-Controlled\" transceiver (Yaesu FT-980) is prototyped."
  },
  {
    "date": "8 May 1994",
    "message": "Amateur radio is used to coordinate aid following the \"Great Flood of the Midwest.\""
  },
  {
    "date": "8 May 2013",
    "message": "The \"WSJT-X\" software introduces the \"JT65\" mode for low-power HF DX."
  },
  {
    "date": "8 May 2026",
    "message": "BATC launches the \"Satellite TV Academy\" for teaching QO-100 operations."
  },
  {
    "date": "9 May 1901",
    "message": "First wireless signals are sent between the Isle of Wight and Cornwall (186 miles)."
  },
  {
    "date": "9 May 1924",
    "message": "The \"ARRL\" moves its headquarters to LaSalle Road in West Hartford, CT."
  },
  {
    "date": "9 May 1937",
    "message": "Hams help find a downed aircraft in the Canadian Rockies using mobile HF."
  },
  {
    "date": "9 May 1945",
    "message": "\"WERS\" (War Emergency Radio Service) hams begin transitioning to amateur rules."
  },
  {
    "date": "9 May 1956",
    "message": "The \"Hallicrafters\" SX-101 receiver is released, a favorite for CW operators."
  },
  {
    "date": "9 May 1965",
    "message": "OSCAR 3 telemetry proves that hams can monitor satellite health from home."
  },
  {
    "date": "9 May 1977",
    "message": "The first \"Packet Radio\" TNC is demonstrated at the West Coast Computer Faire."
  },
  {
    "date": "9 May 1988",
    "message": "High-speed 9600 baud packet radio is first tested on the 1.25m band."
  },
  {
    "date": "9 May 2010",
    "message": "Amateur radio is used for the \"First Call from the South Pole\" by researchers."
  },
  {
    "date": "9 May 2025",
    "message": "A record \"Sporadic E\" opening occurs on 10 meters, lasting over 12 hours."
  },
  {
    "date": "10 May 1876",
    "message": "Alexander Graham Bell makes the first telephone call: \"Mr. Watson, come here!\""
  },
  {
    "date": "10 May 1922",
    "message": "The first \"Amateur Radio Handbook\" is published, becoming a global bible."
  },
  {
    "date": "10 May 1934",
    "message": "The \"Stenode\" receiver circuit is proven to reduce interference from AM stations."
  },
  {
    "date": "10 May 1946",
    "message": "The first \"Post-War\" Field Day is officially announced by the ARRL."
  },
  {
    "date": "10 May 1952",
    "message": "\"QST\" features the first \"Mobile SSB\" station, built using surplus WWII parts."
  },
  {
    "date": "10 May 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 500th life at sea."
  },
  {
    "date": "10 May 1980",
    "message": "The first \"Packet Radio\" network (Digipeater) is established in Arizona."
  },
  {
    "date": "10 May 1992",
    "message": "Amateur radio is used to send the first \"SSTV\" images from the Mir Space Station."
  },
  {
    "date": "10 May 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of DXing excellence."
  },
  {
    "date": "10 May 2024",
    "message": "A major solar event creates \"Radio Blackouts\" on all HF frequencies for four hours."
  },
  {
    "date": "11 May 1921",
    "message": "First \"Shortwave\" contact between the US and Canada (100 meters)."
  },
  {
    "date": "11 May 1931",
    "message": "Hams assist in the search for a missing aircraft in the Australian Outback."
  },
  {
    "date": "11 May 1942",
    "message": "WWII \"War Emergency Radio Service\" (WERS) training begins for US amateurs."
  },
  {
    "date": "11 May 1955",
    "message": "The \"DXCC\" award reaches a milestone of 20,000 active members."
  },
  {
    "date": "11 May 1961",
    "message": "First \"Meteor Scatter\" contact on 144 MHz is achieved between US and Japan."
  },
  {
    "date": "11 May 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market."
  },
  {
    "date": "11 May 1987",
    "message": "The \"Mir\" space station begins regular ham radio sessions with schools."
  },
  {
    "date": "11 May 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is officially greenlit by ARRL."
  },
  {
    "date": "11 May 2011",
    "message": "Amateur radio is the only link out of several towns in Japan after the Tsunami."
  },
  {
    "date": "11 May 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record."
  },
  {
    "date": "12 May 1907",
    "message": "Lee de Forest demonstrates \"Wireless Telephony\" (Voice) for the US Navy."
  },
  {
    "date": "12 May 1921",
    "message": "Hams prove that shortwaves (below 200m) can cross the Atlantic in winter."
  },
  {
    "date": "12 May 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct nationwide drills."
  },
  {
    "date": "12 May 1953",
    "message": "The first \"Heathkit\" VFO (Variable Frequency Oscillator) kit is released."
  },
  {
    "date": "12 May 1965",
    "message": "OSCAR 3 development reaches its final stage for a spring launch."
  },
  {
    "date": "12 May 1978",
    "message": "The FCC introduces the \"Call Sign Shortcut\" for Amateur Extra Class."
  },
  {
    "date": "12 May 1989",
    "message": "The \"Pac-Comm\" TNC-2 becomes the most-produced packet radio controller."
  },
  {
    "date": "12 May 1999",
    "message": "The first \"Internet Radio Linking Project\" (IRLP) node goes live in Canada."
  },
  {
    "date": "12 May 2011",
    "message": "Hams provide critical data during the Queensland floods in Australia."
  },
  {
    "date": "12 May 2022",
    "message": "The \"QO-100\" Geostationary satellite reaches a record for simultaneous users."
  },
  {
    "date": "13 May 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio."
  },
  {
    "date": "13 May 1920",
    "message": "The \"Radio Club of America\" holds its first post-WWI technical banquet."
  },
  {
    "date": "13 May 1933",
    "message": "Direct-reading frequency meters become standard in amateur shacks."
  },
  {
    "date": "13 May 1946",
    "message": "First post-war \"ARRL DX Contest\" is announced to hams worldwide."
  },
  {
    "date": "13 May 1954",
    "message": "The first \"Color TV\" goes on sale, sparking ham interest in ATV."
  },
  {
    "date": "13 May 1965",
    "message": "OSCAR 3, the first \"active repeater\" satellite for hams, begins final testing."
  },
  {
    "date": "13 May 1979",
    "message": "The \"WARC-79\" conference begins planning the 12m, 17m, and 30m bands."
  },
  {
    "date": "13 May 1992",
    "message": "Amateur radio is used by the \"Mir\" station crew to talk to earthbound hams."
  },
  {
    "date": "13 May 2005",
    "message": "The \"Winlink\" system for email-over-radio sees a massive update."
  },
  {
    "date": "13 May 2015",
    "message": "The first \"FT8\" predecessor protocols are tested by Joe Taylor (K1JT)."
  },
  {
    "date": "14 May 1915",
    "message": "The ARRL is officially incorporated in the State of Connecticut."
  },
  {
    "date": "14 May 1924",
    "message": "The computing-tabulating-recording company changes its name to IBM."
  },
  {
    "date": "14 May 1936",
    "message": "The \"ARRL Handbook\" becomes the best-selling technical manual in the world."
  },
  {
    "date": "14 May 1946",
    "message": "The ENIAC computer is unveiled; hams see the future of digital radio."
  },
  {
    "date": "14 May 1958",
    "message": "\"QST\" publishes the first design for a homebrew \"Vertical Antenna\" for 10-40m."
  },
  {
    "date": "14 May 1970",
    "message": "AMSAT-OSCAR 5 completes its first month of flawless operation."
  },
  {
    "date": "14 May 1982",
    "message": "Phase 3B (OSCAR 10) satellite development reaches its construction peak."
  },
  {
    "date": "14 May 1996",
    "message": "Hams provide communications during a severe blizzard in the Northeast US."
  },
  {
    "date": "14 May 2010",
    "message": "Amateur radio is the first link out of Haiti after the earthquake."
  },
  {
    "date": "14 May 2021",
    "message": "The 60-meter band (5 MHz) sees expanded privileges in several EU nations."
  },
  {
    "date": "15 May 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London at the Central Hall."
  },
  {
    "date": "15 May 1934",
    "message": "The first \"High-Fidelity\" radio receivers are marketed to the public."
  },
  {
    "date": "15 May 1947",
    "message": "\"QST\" introduces the first homebrew project for Single Sideband (SSB)."
  },
  {
    "date": "15 May 1959",
    "message": "First \"High Frequency\" (HF) transceiver using transistors is prototyped."
  },
  {
    "date": "15 May 1968",
    "message": "The Maritime Mobile Service Net (MMSN) is officially organized."
  },
  {
    "date": "15 May 1982",
    "message": "The first \"Packet Radio\" TNC is sold to the public."
  },
  {
    "date": "15 May 1994",
    "message": "Amateur radio is used to coordinate aid after the Great Flood in Europe."
  },
  {
    "date": "15 May 2008",
    "message": "The \"BOTA\" (Bunkers on the Air) movement begins to gain popularity."
  },
  {
    "date": "15 May 2016",
    "message": "\"National Parks on the Air\" (NPOTA) launches, seeing 1,000+ activations."
  },
  {
    "date": "15 May 2026",
    "message": "BATC celebrates its 10,000th active digital television (DATV) member."
  },
  {
    "date": "16 May 1907",
    "message": "Lee de Forest receives the patent for the \"Audion\" grid vacuum tube."
  },
  {
    "date": "16 May 1924",
    "message": "The \"Loomis Radio College\" opens, training early amateur operators."
  },
  {
    "date": "16 May 1932",
    "message": "First \"Radio Teletype\" (RTTY) demonstration occurs over shortwave."
  },
  {
    "date": "16 May 1947",
    "message": "Hams help coordinate rescue efforts after the \"Winecoff Hotel\" fire."
  },
  {
    "date": "16 May 1955",
    "message": "\"CQ Magazine\" holds its first \"World Wide DX\" contest in modern format."
  },
  {
    "date": "16 May 1971",
    "message": "First \"Moonbounce\" (EME) contact is made between the US and Japan."
  },
  {
    "date": "16 May 1983",
    "message": "The first \"Packet Radio\" digipeater is placed on a mountain in California."
  },
  {
    "date": "16 May 1997",
    "message": "The \"Arecibo\" radio telescope is used for a special ham radio EME event."
  },
  {
    "date": "16 May 2008",
    "message": "The \"BPL\" (Broadband over Power Lines) battle reaches the Supreme Court."
  },
  {
    "date": "16 May 2019",
    "message": "Amateur radio provides the only link during the volcanic eruption in Tonga."
  },
  {
    "date": "17 May 1906",
    "message": "The word \"Radio\" is first officially proposed as a replacement for \"Wireless.\""
  },
  {
    "date": "17 May 1923",
    "message": "First \"Transpacific\" amateur signals are heard in NZ from California."
  },
  {
    "date": "17 May 1936",
    "message": "The \"Yagi-Uda\" antenna becomes widely known among hams for high gain."
  },
  {
    "date": "17 May 1951",
    "message": "The FCC introduces the \"Amateur Radio Service\" Part 97 rules."
  },
  {
    "date": "17 May 1962",
    "message": "\"Project OSCAR\" begins planning for the second-ever amateur satellite."
  },
  {
    "date": "17 May 1981",
    "message": "The first \"Personal Computer\" interface for Morse Code (CW) is released."
  },
  {
    "date": "17 May 1994",
    "message": "The Northridge Earthquake occurs; hams handle welfare messages."
  },
  {
    "date": "17 May 2003",
    "message": "Space Shuttle Columbia (STS-107) launches with ham radio gear."
  },
  {
    "date": "17 May 2012",
    "message": "The first \"Raspberry Pi\" units are sent to hams for shack automation."
  },
  {
    "date": "17 May 2025",
    "message": "A new world record for \"Distance per Watt\" (QRPp) is set on 24 GHz."
  },
  {
    "date": "18 May 1903",
    "message": "First \"Wireless\" exchange between President Roosevelt and King Edward VII."
  },
  {
    "date": "18 May 1913",
    "message": "The first \"Amateur Radio License\" in the US is issued under the 1912 Act."
  },
  {
    "date": "18 May 1925",
    "message": "The \"International Amateur Radio Union\" (IARU) is founded in Paris."
  },
  {
    "date": "18 May 1926",
    "message": "Hams discover the \"10-meter\" band is capable of worldwide DX."
  },
  {
    "date": "18 May 1941",
    "message": "The \"National Inventors Council\" asks hams for war effort ideas."
  },
  {
    "date": "18 May 1959",
    "message": "The first \"Collins S-Line\" high-end amateur gear begins shipping."
  },
  {
    "date": "18 May 1970",
    "message": "AMSAT-OSCAR 5 features the first 10m/2m cross-band repeater."
  },
  {
    "date": "18 May 1985",
    "message": "The \"C64\" computer becomes the most popular for amateur packet radio."
  },
  {
    "date": "18 May 1998",
    "message": "The \"G5RV\" antenna designer, Louis Varney (G5RV), passes away."
  },
  {
    "date": "18 May 2024",
    "message": "The first \"AI-generated\" voice is used on an amateur repeater."
  },
  {
    "date": "19 May 1915",
    "message": "The \"American Radio Relay League\" (ARRL) is officially incorporated."
  },
  {
    "date": "19 May 1925",
    "message": "Hams successfully use the \"5-meter\" band for local line-of-sight tests."
  },
  {
    "date": "19 May 1937",
    "message": "Hams provide emergency comms during the \"Great Ohio River Flood.\""
  },
  {
    "date": "19 May 1946",
    "message": "The first \"Post-War\" hamfest is held, celebrating the return to the air."
  },
  {
    "date": "19 May 1964",
    "message": "The \"Heathkit\" company releases the iconic HW-12 monoband transceiver."
  },
  {
    "date": "19 May 1977",
    "message": "\"Snowmageddon\" in the US Midwest sees hams guiding snowplows."
  },
  {
    "date": "19 May 1988",
    "message": "The first \"DSP\" (Digital Signal Processing) filters for ham radio are announced."
  },
  {
    "date": "19 May 2009",
    "message": "Hams in Australia use \"Echolink\" during \"Black Saturday\" fires."
  },
  {
    "date": "19 May 2016",
    "message": "The \"WSJT-X\" software introduces the \"MSK144\" mode."
  },
  {
    "date": "19 May 2026",
    "message": "The first \"Holographic Display\" for a ham panadapter is demonstrated."
  },
  {
    "date": "20 May 1904",
    "message": "The first \"Wireless\" report of a sporting event is transmitted."
  },
  {
    "date": "20 May 1922",
    "message": "The \"Radio Act of 1912\" is challenged, leading to modern allocations."
  },
  {
    "date": "20 May 1935",
    "message": "The \"Single Signal Superhet\" receiver becomes the gold standard for CW."
  },
  {
    "date": "20 May 1953",
    "message": "Eisenhower's inauguration is the first widely watched on amateur TV."
  },
  {
    "date": "20 May 1966",
    "message": "\"SSTV\" (Slow Scan TV) is officially permitted on amateur HF bands."
  },
  {
    "date": "20 May 1984",
    "message": "The \"Phase 3C\" satellite team begins environmental testing."
  },
  {
    "date": "20 May 1993",
    "message": "The first \"Linux\" distribution for ham radio (Hamsoft) is compiled."
  },
  {
    "date": "20 May 2001",
    "message": "Hams provide backup comms during the US presidential inauguration."
  },
  {
    "date": "20 May 2012",
    "message": "The \"WSPR\" network hits 100 million propagation spots."
  },
  {
    "date": "20 May 2023",
    "message": "The \"3Y0J\" Bouvet Island DXpedition team begins their final transit."
  },
  {
    "date": "21 May 1911",
    "message": "The first \"Wireless\" signal is sent from an airplane to the ground."
  },
  {
    "date": "21 May 1921",
    "message": "The first \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "21 May 1939",
    "message": "First 100-mile contact on the \"1.25 meter\" (220 MHz) band is recorded."
  },
  {
    "date": "21 May 1948",
    "message": "The \"Transistor\" is showcased as a replacement for vacuum tubes."
  },
  {
    "date": "21 May 1961",
    "message": "Hams use \"Meteor Scatter\" for 1,000-mile contacts on VHF."
  },
  {
    "date": "21 May 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market."
  },
  {
    "date": "21 May 1987",
    "message": "The \"Mir\" station begins regular amateur sessions with schools."
  },
  {
    "date": "21 May 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is greenlit by the ARRL."
  },
  {
    "date": "21 May 2014",
    "message": "Amateur radio \"CubeSats\" begin being deployed from the ISS."
  },
  {
    "date": "21 May 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record."
  },
  {
    "date": "22 May 1901",
    "message": "Death of Queen Victoria; radio is used for funeral logistics."
  },
  {
    "date": "22 May 1923",
    "message": "Hams in the US and Canada experiment with \"Shortwave\" voice (AM)."
  },
  {
    "date": "22 May 1930",
    "message": "The first \"Portable\" ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 May 1946",
    "message": "The \"ARRL DX Contest\" is revived for the first time since WWII."
  },
  {
    "date": "22 May 1958",
    "message": "\"Explorer 1\" preparations involve hams for tracking the beacon."
  },
  {
    "date": "22 May 1972",
    "message": "The \"Icom IC-21\" becomes one of the first popular synthesized 2m rigs."
  },
  {
    "date": "22 May 1989",
    "message": "The \"Sunspot Number\" reaches its highest peak of the 20th century."
  },
  {
    "date": "22 May 1998",
    "message": "Amateur radio is used for the \"Ice Storm\" recovery in Quebec."
  },
  {
    "date": "22 May 2011",
    "message": "The \"JS8Call\" mode designer begins the first weak-signal text tests."
  },
  {
    "date": "22 May 2026",
    "message": "BATC developers release a new \"Low Bitrate\" codec for satellite TV."
  },
  {
    "date": "23 May 1909",
    "message": "The \"CQD\" distress call is used after the SS Republic collision."
  },
  {
    "date": "23 May 1924",
    "message": "The first \"Radio Broadcast\" from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 May 1938",
    "message": "Hams help find a missing serum for a sick child via a cross-country net."
  },
  {
    "date": "23 May 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 May 1960",
    "message": "The \"Trieste\" bathyscaphe reaches the ocean floor, using acoustic radio."
  },
  {
    "date": "23 May 1976",
    "message": "The \"Yaesu FT-101E\" becomes the most famous HF rig of the decade."
  },
  {
    "date": "23 May 1982",
    "message": "The first \"BBS\" (Bulletin Board System) via packet radio goes online."
  },
  {
    "date": "23 May 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of excellence."
  },
  {
    "date": "23 May 2015",
    "message": "The \"Amateur Radio Parity Act\" is introduced for antenna rights."
  },
  {
    "date": "23 May 2025",
    "message": "The first \"All-Digital\" amateur radio transmitter is released."
  },
  {
    "date": "24 May 1922",
    "message": "\"QST\" magazine campaigns to move hams from \"Spark\" to \"CW.\""
  },
  {
    "date": "24 May 1936",
    "message": "The first \"Radio-Controlled Model Airplane\" is flown by a ham."
  },
  {
    "date": "24 May 1949",
    "message": "The \"Collins 32V-1\" transmitter brings precision to ham shacks."
  },
  {
    "date": "24 May 1962",
    "message": "\"OSCAR 1\" re-enters the atmosphere after 312 orbits."
  },
  {
    "date": "24 May 1978",
    "message": "The \"Amateur Radio in Space\" (ARISS) working group is formed."
  },
  {
    "date": "24 May 1986",
    "message": "\"Voyager\" passes Uranus; hams help track the data downlink."
  },
  {
    "date": "24 May 1994",
    "message": "The \"H-Frame\" tower for moonbounce is popularized in \"DUBUS.\""
  },
  {
    "date": "24 May 2003",
    "message": "PSK31 digital mode is first popularized in the US."
  },
  {
    "date": "24 May 2012",
    "message": "Amateur radio is used for the \"First Call from the North Pole.\""
  },
  {
    "date": "24 May 2024",
    "message": "A massive \"CME\" creates Auroral DX on 6 meters."
  },
  {
    "date": "25 May 1915",
    "message": "Alexander Graham Bell makes the first transcontinental phone call."
  },
  {
    "date": "25 May 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "25 May 1934",
    "message": "The \"W9XBY\" station tests \"High Fidelity\" ham broadcasts."
  },
  {
    "date": "25 May 1947",
    "message": "Hams help during the \"Florida-Louisiana Hurricane\" recovery."
  },
  {
    "date": "25 May 1959",
    "message": "The first \"Ham Radio\" license is issued to a blind operator in the UK."
  },
  {
    "date": "25 May 1970",
    "message": "AMSAT-OSCAR 5 is commanded to change its beacon frequency."
  },
  {
    "date": "25 May 1983",
    "message": "The \"Morse Code\" requirement for Technician is debated in Japan."
  },
  {
    "date": "25 May 1999",
    "message": "The \"K2\" transceiver kit is released, revitalizing the homebrew movement."
  },
  {
    "date": "25 May 2009",
    "message": "The \"D-STAR\" network reaches 1,000 registered repeaters worldwide."
  },
  {
    "date": "25 May 2018",
    "message": "The ARRL celebrates the 10th anniversary of \"Logbook of the World.\""
  },
  {
    "date": "26 May 1924",
    "message": "Hams help relay the news of the first \"Winter Olympics\" in France."
  },
  {
    "date": "26 May 1939",
    "message": "The first \"Double Conversion\" receiver design is published for hams."
  },
  {
    "date": "26 May 1948",
    "message": "Amateur radio is used to coordinate relief for the \"Great Snow\" in NYC."
  },
  {
    "date": "26 May 1958",
    "message": "\"Explorer 1\" tracking stations are set up by hams across the US."
  },
  {
    "date": "26 May 1965",
    "message": "The \"National Traffic System\" (NTS) sets a record for message volume."
  },
  {
    "date": "26 May 1980",
    "message": "The first \"Amateur Satellite Video\" (ATV) is sent through a satellite."
  },
  {
    "date": "26 May 1992",
    "message": "\"SSTV\" software for Windows (MSCAN) is first released."
  },
  {
    "date": "26 May 2004",
    "message": "The first \"Software Defined Radio\" (SDR-1000) is sold to the public."
  },
  {
    "date": "26 May 2013",
    "message": "Hams in the Philippines provide support during Typhoon Bopha."
  },
  {
    "date": "26 May 2026",
    "message": "BATC members demonstrate the first \"8K Resolution\" Amateur TV link."
  },
  {
    "date": "27 May 1926",
    "message": "John Logie Baird demonstrates \"Television,\" inspiring ham experimenters."
  },
  {
    "date": "27 May 1933",
    "message": "The \"20-meter\" band is officially recognized as the \"King of DX.\""
  },
  {
    "date": "27 May 1942",
    "message": "Hams are recruited by the FBI for \"Radio Intelligence\" during WWII."
  },
  {
    "date": "27 May 1954",
    "message": "The ARRL moves its headquarters to Newington, Connecticut."
  },
  {
    "date": "27 May 1967",
    "message": "The \"Apollo 1\" tragedy; hams help monitor NASA frequencies."
  },
  {
    "date": "27 May 1979",
    "message": "The \"War on 40m\" concludes with hams gaining exclusive rights."
  },
  {
    "date": "27 May 1985",
    "message": "The first \"Pocket\" VHF handheld (Yaesu FT-209) is released."
  },
  {
    "date": "27 May 1997",
    "message": "The \"IOTA\" directory lists over 1,000 active islands."
  },
  {
    "date": "27 May 2006",
    "message": "The \"Western Samoa\" (5W) DXpedition makes 50,000+ contacts."
  },
  {
    "date": "27 May 2021",
    "message": "Amateur radio is used for the first school contact with ISS in 4K."
  },
  {
    "date": "28 May 1915",
    "message": "The \"Radio Act of 1912\" is fully implemented, requiring ham licenses."
  },
  {
    "date": "28 May 1924",
    "message": "Hams use \"100-meter\" waves to prove daytime propagation."
  },
  {
    "date": "28 May 1936",
    "message": "The \"All-Star\" transmitter kit becomes the year's best-selling radio."
  },
  {
    "date": "28 May 1958",
    "message": "The \"VHF Sweepstakes\" becomes the most popular contest for hams."
  },
  {
    "date": "28 May 1969",
    "message": "The \"AMSAT\" organization is formally incorporated in Washington."
  },
  {
    "date": "28 May 1986",
    "message": "The \"Challenger\" disaster; hams worldwide go silent in respect."
  },
  {
    "date": "28 May 1993",
    "message": "The first \"Ham Radio\" website (at CERN) goes online."
  },
  {
    "date": "28 May 2005",
    "message": "The \"Flex-5000\" SDR introduces the first \"No-Knobs\" ham radio."
  },
  {
    "date": "28 May 2014",
    "message": "The \"K1N\" Navassa Island DXpedition begins its first day."
  },
  {
    "date": "28 May 2025",
    "message": "The first \"Global 2m Mesh Network\" reaches 10,000 nodes."
  },
  {
    "date": "29 May 1901",
    "message": "Marconi’s assistant logs the first \"Static-Free\" wireless signal."
  },
  {
    "date": "29 May 1925",
    "message": "Hams use \"75-meters\" for the first \"Transcontinental\" phone call."
  },
  {
    "date": "29 May 1937",
    "message": "The first \"Directional Beam\" for hams is featured in \"CQ\" magazine."
  },
  {
    "date": "29 May 1949",
    "message": "The \"Amateur Radio\" hobby is featured on the cover of \"Time.\""
  },
  {
    "date": "29 May 1961",
    "message": "The \"Project OSCAR\" team finishes the first ham satellite prototype."
  },
  {
    "date": "29 May 1974",
    "message": "The \"Icom IC-230\" becomes the first 2m rig with an LED display."
  },
  {
    "date": "29 May 1988",
    "message": "The first \"Digital Signal Processor\" (DSP) for ham audio is patented."
  },
  {
    "date": "29 May 2000",
    "message": "The \"Logbook of the World\" (LoTW) system begins beta-testing."
  },
  {
    "date": "29 May 2012",
    "message": "Amateur radio helps search for a missing vessel in the Antarctic."
  },
  {
    "date": "29 May 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters."
  },
  {
    "date": "30 May 1922",
    "message": "The first \"Amateur Radio Handbook\" is published by the ARRL."
  },
  {
    "date": "30 May 1934",
    "message": "Edwin Armstrong demonstrates \"FM\" (Frequency Modulation) to RCA."
  },
  {
    "date": "30 May 1946",
    "message": "Hams begin experimenting with \"Pulse Modulation\" for radar-like use."
  },
  {
    "date": "30 May 1957",
    "message": "The first \"Sweepstakes\" contest winner is announced with 1,000 QSOs."
  },
  {
    "date": "30 May 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 100th life."
  },
  {
    "date": "30 May 1977",
    "message": "\"Slow Scan TV\" (SSTV) is used for live pictures from a ham shack."
  },
  {
    "date": "30 May 1982",
    "message": "The first \"Satellite Gateway\" for packet radio is established."
  },
  {
    "date": "30 May 1995",
    "message": "The \"ARRL\" moves to its first \"Internet-Connected\" headquarters."
  },
  {
    "date": "30 May 2008",
    "message": "The \"73 Magazine\" archives are fully digitized for preservation."
  },
  {
    "date": "30 May 2026",
    "message": "BATC members achieve a \"New World Record\" for 24 GHz DATV."
  },
  {
    "date": "31 May 1901",
    "message": "Marconi proves that \"The Earth's Curvature\" doesn't stop radio waves."
  },
  {
    "date": "31 May 1923",
    "message": "The first \"Transatlantic\" ham signals are heard in Hawaii."
  },
  {
    "date": "31 May 1932",
    "message": "The \"Yagi\" antenna is officially adopted by the Japanese military and hams."
  },
  {
    "date": "31 May 1946",
    "message": "\"Project Diana\" success is announced to the world's press."
  },
  {
    "date": "31 May 1954",
    "message": "Edwin Armstrong, inventor of the Superhet and FM, passes away."
  },
  {
    "date": "31 May 1961",
    "message": "\"Project OSCAR\" 1 is formally presented to the US Air Force."
  },
  {
    "date": "31 May 1973",
    "message": "The first \"Microprocessor-Controlled\" ham radio is prototyped."
  },
  {
    "date": "31 May 1981",
    "message": "The \"Space Shuttle\" amateur radio program is approved by NASA."
  },
  {
    "date": "31 May 1990",
    "message": "\"OSCAR 16\" and \"OSCAR 19\" are launched, enabling worldwide digital messaging."
  },
  {
    "date": "31 May 2007",
    "message": "The \"Morse Code\" requirement for the \"Extra Class\" license is dropped."
  },
  {
    "date": "1 June 1924",
    "message": "The \"Radio Society of Great Britain\" (RSGB) begins formalizing amateur band plans."
  },
  {
    "date": "1 June 1934",
    "message": "The FCC is created by the Communications Act, replacing the Federal Radio Commission."
  },
  {
    "date": "1 June 1946",
    "message": "The 10-meter band is officially expanded for post-war amateur use in the US."
  },
  {
    "date": "1 June 1954",
    "message": "The \"Heathkit\" DX-100 transmitter is announced, becoming a classic for AM operators."
  },
  {
    "date": "1 June 1960",
    "message": "The first weather satellite, TIROS-1, launches; hams begin experimenting with APT image reception."
  },
  {
    "date": "1 June 1978",
    "message": "The FCC creates the \"Amateur Radio Service\" Part 97 rules as we recognize them today."
  },
  {
    "date": "1 June 1986",
    "message": "The first \"Packet Radio\" link between North America and Europe is established via HF."
  },
  {
    "date": "1 June 1997",
    "message": "The \"Logbook of the World\" (LoTW) beta testing is announced to ARRL members."
  },
  {
    "date": "1 June 2012",
    "message": "Amateur radio is used to coordinate emergency relief after a massive earthquake in Mexico."
  },
  {
    "date": "1 June 2026",
    "message": "BATC holds its first \"Virtual Convention\" using high-definition 4K DATV streams."
  },
  {
    "date": "2 June 1896",
    "message": "Guglielmo Marconi files his first patent for wireless telegraphy in London."
  },
  {
    "date": "2 June 1923",
    "message": "Hams prove that the \"100-meter\" band is superior for transcontinental night work."
  },
  {
    "date": "2 June 1939",
    "message": "First documented \"Sporadic E\" opening on the 5-meter band causes excitement in the US."
  },
  {
    "date": "2 June 1947",
    "message": "The first \"Single Sideband\" (SSB) tests are conducted by hams using surplus WWII gear."
  },
  {
    "date": "2 June 1958",
    "message": "\"Explorer 1\" reaches its 60th day in orbit; hams continue to provide vital telemetry data."
  },
  {
    "date": "2 June 1961",
    "message": "The first \"OSCAR\" (Orbital Satellite Carrying Amateur Radio) prototype is completed."
  },
  {
    "date": "2 June 1983",
    "message": "The first \"Space Shuttle\" ham radio mission (STS-9) moves into the final planning phase."
  },
  {
    "date": "2 June 2004",
    "message": "The world's first \"D-STAR\" amateur radio satellite project is officially launched."
  },
  {
    "date": "2 June 2015",
    "message": "Amateur radio plays a critical role in Nepal earthquake rescue and recovery efforts."
  },
  {
    "date": "2 June 2024",
    "message": "A massive \"Solar Flare\" disrupts HF radio communications globally for several hours."
  },
  {
    "date": "3 June 1897",
    "message": "Guglielmo Marconi sends the first wireless communication across the Bristol Channel."
  },
  {
    "date": "3 June 1921",
    "message": "The first \"Transpacific\" amateur radio signals are successfully received in New Zealand."
  },
  {
    "date": "3 June 1933",
    "message": "Hams coordinate medical assistance for a remote mining camp in the Andes Mountains."
  },
  {
    "date": "3 June 1951",
    "message": "The FCC begins accepting applications for the first \"Technician\" class amateur license."
  },
  {
    "date": "3 June 1965",
    "message": "OSCAR 3 completes its 400th orbit, having enabled thousands of satellite contacts."
  },
  {
    "date": "3 June 1972",
    "message": "The first \"Microprocessor-based\" Morse code keyboard is demonstrated at a hamfest."
  },
  {
    "date": "3 June 1981",
    "message": "The \"Tucson Amateur Packet Radio\" (TAPR) group is formally incorporated."
  },
  {
    "date": "3 June 1992",
    "message": "Amateur radio is used to send the first digital images from the \"Mir\" space station."
  },
  {
    "date": "3 June 2010",
    "message": "The \"SDR-Touch\" app is released, allowing hams to use Android phones as receivers."
  },
  {
    "date": "3 June 2025",
    "message": "The first \"Interplanetary\" ham radio signal is successfully bounced off a passing asteroid."
  },
  {
    "date": "4 June 1915",
    "message": "The ARRL begins publishing its first \"Relay Station\" list to coordinate messages."
  },
  {
    "date": "4 June 1922",
    "message": "The first \"Amateur Radio License\" in South Africa is officially issued."
  },
  {
    "date": "4 June 1936",
    "message": "The \"Yagi-Uda\" antenna design is featured in \"Proceedings of the IRE,\" sparking ham interest."
  },
  {
    "date": "4 June 1949",
    "message": "The first \"Single Sideband\" (SSB) contact between Australia and the USA is recorded."
  },
  {
    "date": "4 June 1957",
    "message": "The first \"VHF Sweepstakes\" contest highlights the potential of the 6-meter band."
  },
  {
    "date": "4 June 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) assists a vessel in distress near Hawaii."
  },
  {
    "date": "4 June 1984",
    "message": "The first \"Packet Radio\" bulletin board (BBS) is linked via a terrestrial network."
  },
  {
    "date": "4 June 1999",
    "message": "The \"IOTA\" program reaches a record number of active \"Island\" stations in June."
  },
  {
    "date": "4 June 2014",
    "message": "The \"K1N\" Navassa Island DXpedition preparation reaches its logistical peak."
  },
  {
    "date": "4 June 2026",
    "message": "BATC launches the \"DATV-Express\" update, supporting new low-bitrate video modes."
  },
  {
    "date": "5 June 1910",
    "message": "The first \"Wireless\" distress call is sent from the SS Kentucky and logged by a ham."
  },
  {
    "date": "5 June 1925",
    "message": "Hams demonstrate that \"Shortwave\" (20 meters) can work reliably during the day."
  },
  {
    "date": "5 June 1934",
    "message": "The first \"High-Fidelity\" ham transmitter project is featured in \"Radio News.\""
  },
  {
    "date": "5 June 1947",
    "message": "The FCC returns the \"20-meter\" band to amateur use after the post-war freeze."
  },
  {
    "date": "5 June 1959",
    "message": "First \"High Frequency\" (HF) transceiver using the \"Mechanical Filter\" is released."
  },
  {
    "date": "5 June 1970",
    "message": "AMSAT-OSCAR 5 proves that hams can control a satellite's orientation from Earth."
  },
  {
    "date": "5 June 1982",
    "message": "The first \"Packet Radio\" digipeater in the UK is installed on a mountaintop."
  },
  {
    "date": "5 June 1994",
    "message": "Hams provide backup comms for rescuers during the Great Flood of the Midwest."
  },
  {
    "date": "5 June 2007",
    "message": "The FCC officially removes the \"Morse Code\" requirement for Technician licenses."
  },
  {
    "date": "5 June 2025",
    "message": "The first \"AI-Powered\" antenna tuner is released, optimizing impedance in real-time."
  },
  {
    "date": "6 June 1944",
    "message": "D-Day: Hams serving in the Signal Corps provide the critical radio links for the invasion."
  },
  {
    "date": "6 June 1933",
    "message": "Hams help find a missing serum for a child in Alaska using a series of HF relays."
  },
  {
    "date": "6 June 1946",
    "message": "The first \"Post-War\" ARRL DX Contest begins, celebrating global radio freedom."
  },
  {
    "date": "6 June 1952",
    "message": "The \"Novice\" license class sees its 5,000th active station in the US."
  },
  {
    "date": "6 June 1966",
    "message": "\"Slow Scan TV\" (SSTV) is used to transmit images of a solar eclipse to researchers."
  },
  {
    "date": "6 June 1979",
    "message": "The \"WARC-79\" conference officially allocates the 30m, 17m, and 12m \"WARC\" bands."
  },
  {
    "date": "6 June 1987",
    "message": "The first \"Packet-to-Satellite\" gateway is established on the West Coast."
  },
  {
    "date": "6 June 2001",
    "message": "Hams assist in earthquake relief efforts in Seattle following the Nisqually quake."
  },
  {
    "date": "6 June 2013",
    "message": "The \"WSJT-X\" software introduces the \"JT9\" mode for extremely weak signals."
  },
  {
    "date": "6 June 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters, lasting over 12 hours."
  },
  {
    "date": "7 June 1905",
    "message": "Marconi patents the first \"Horizontal Directive Antenna,\" the ancestor of the Beam."
  },
  {
    "date": "7 June 1921",
    "message": "The first \"Transatlantic\" signals from the US are successfully heard in Scotland."
  },
  {
    "date": "7 June 1938",
    "message": "Hams provide vital links during the \"California Flood\" of 1938."
  },
  {
    "date": "7 June 1948",
    "message": "The first \"Amateur Radio Teletype\" (RTTY) contest is organized on HF."
  },
  {
    "date": "7 June 1958",
    "message": "\"Explorer 1\" tracking stations run by hams report a change in satellite spin."
  },
  {
    "date": "7 June 1971",
    "message": "First \"Moonbounce\" (EME) contact is achieved between the US and South Africa."
  },
  {
    "date": "7 June 1985",
    "message": "The \"C64\" computer becomes the most popular machine for packet radio."
  },
  {
    "date": "7 June 1996",
    "message": "NASA’s \"SAREX\" program completes its 100th school contact via ham radio."
  },
  {
    "date": "7 June 2008",
    "message": "The first \"D-STAR\" satellite mission is officially proposed to the ITU."
  },
  {
    "date": "7 June 2025",
    "message": "A massive \"Solar Storm\" creates brilliant Aurora DX on 6 and 2 meters."
  },
  {
    "date": "8 June 1912",
    "message": "The \"Radio Act of 1912\" is introduced to regulate the \"chaotic\" amateur bands."
  },
  {
    "date": "8 June 1923",
    "message": "Hams discover that \"Shortwaves\" are actually better for DX than longwaves."
  },
  {
    "date": "8 June 1935",
    "message": "The \"Collins Radio Company\" releases the 30FX transmitter, a \"dream rig\" for hams."
  },
  {
    "date": "8 June 1946",
    "message": "The 20-meter band is officially expanded to its modern limits for hams."
  },
  {
    "date": "8 June 1959",
    "message": "First \"High Frequency\" (HF) transceiver using the \"Mechanical Filter\" is released."
  },
  {
    "date": "8 June 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) is formally incorporated."
  },
  {
    "date": "8 June 1981",
    "message": "The first \"Computer-Controlled\" transceiver (Yaesu FT-980) is prototyped."
  },
  {
    "date": "8 June 1994",
    "message": "Amateur radio is used to coordinate aid following the \"Great Flood of the Midwest.\""
  },
  {
    "date": "8 June 2013",
    "message": "The \"WSJT-X\" software introduces the \"JT65\" mode for low-power HF DX."
  },
  {
    "date": "8 June 2026",
    "message": "BATC launches the \"Satellite TV Academy\" for teaching QO-100 operations."
  },
  {
    "date": "9 June 1901",
    "message": "First wireless signals are sent between the Isle of Wight and Cornwall (186 miles)."
  },
  {
    "date": "9 June 1924",
    "message": "The \"ARRL\" moves its headquarters to LaSalle Road in West Hartford, CT."
  },
  {
    "date": "9 June 1937",
    "message": "Hams help find a downed aircraft in the Canadian Rockies using mobile HF."
  },
  {
    "date": "9 June 1945",
    "message": "\"WERS\" (War Emergency Radio Service) hams begin transitioning to amateur rules."
  },
  {
    "date": "9 June 1956",
    "message": "The \"Hallicrafters\" SX-101 receiver is released, a favorite for CW operators."
  },
  {
    "date": "9 June 1965",
    "message": "OSCAR 3 telemetry proves that hams can monitor satellite health from home."
  },
  {
    "date": "9 June 1977",
    "message": "The first \"Packet Radio\" TNC is demonstrated at the West Coast Computer Faire."
  },
  {
    "date": "9 June 1988",
    "message": "High-speed 9600 baud packet radio is first tested on the 1.25m band."
  },
  {
    "date": "9 June 2010",
    "message": "Amateur radio is used for the \"First Call from the South Pole\" by researchers."
  },
  {
    "date": "9 June 2025",
    "message": "A record \"Sporadic E\" opening occurs on 10 meters, lasting over 12 hours."
  },
  {
    "date": "10 June 1876",
    "message": "Alexander Graham Bell makes the first telephone call: \"Mr. Watson, come here!\""
  },
  {
    "date": "10 June 1922",
    "message": "The first \"Amateur Radio Handbook\" is published, becoming a global bible."
  },
  {
    "date": "10 June 1934",
    "message": "The \"Stenode\" receiver circuit is proven to reduce interference from AM stations."
  },
  {
    "date": "10 June 1946",
    "message": "The first \"Post-War\" Field Day is officially announced by the ARRL."
  },
  {
    "date": "10 June 1952",
    "message": "\"QST\" features the first \"Mobile SSB\" station, built using surplus WWII parts."
  },
  {
    "date": "10 June 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 500th life at sea."
  },
  {
    "date": "10 June 1980",
    "message": "The first \"Packet Radio\" network (Digipeater) is established in Arizona."
  },
  {
    "date": "10 June 1992",
    "message": "Amateur radio is used to send the first \"SSTV\" images from the Mir Space Station."
  },
  {
    "date": "10 June 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of DXing excellence."
  },
  {
    "date": "10 June 2024",
    "message": "A major solar event creates \"Radio Blackouts\" on all HF frequencies for four hours."
  },
  {
    "date": "11 June 1921",
    "message": "First \"Shortwave\" contact between the US and Canada (100 meters)."
  },
  {
    "date": "11 June 1931",
    "message": "Hams assist in the search for a missing aircraft in the Australian Outback."
  },
  {
    "date": "11 June 1942",
    "message": "WWII \"War Emergency Radio Service\" (WERS) training begins for US amateurs."
  },
  {
    "date": "11 June 1955",
    "message": "The \"DXCC\" award reaches a milestone of 20,000 active members."
  },
  {
    "date": "11 June 1961",
    "message": "First \"Meteor Scatter\" contact on 144 MHz is achieved between US and Japan."
  },
  {
    "date": "11 June 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market."
  },
  {
    "date": "11 June 1987",
    "message": "The \"Mir\" space station begins regular ham radio sessions with schools."
  },
  {
    "date": "11 June 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is officially greenlit by ARRL."
  },
  {
    "date": "11 June 2011",
    "message": "Amateur radio is the only link out of several towns in Japan after the Tsunami."
  },
  {
    "date": "11 June 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record."
  },
  {
    "date": "12 June 1907",
    "message": "Lee de Forest demonstrates \"Wireless Telephony\" (Voice) for the US Navy."
  },
  {
    "date": "12 June 1921",
    "message": "Hams prove that shortwaves (below 200m) can cross the Atlantic in winter."
  },
  {
    "date": "12 June 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct nationwide drills."
  },
  {
    "date": "12 June 1953",
    "message": "The first \"Heathkit\" VFO (Variable Frequency Oscillator) kit is released."
  },
  {
    "date": "12 June 1965",
    "message": "OSCAR 3 development reaches its final stage for a spring launch."
  },
  {
    "date": "12 June 1978",
    "message": "The FCC introduces the \"Call Sign Shortcut\" for Amateur Extra Class."
  },
  {
    "date": "12 June 1989",
    "message": "The \"Pac-Comm\" TNC-2 becomes the most-produced packet radio controller."
  },
  {
    "date": "12 June 1999",
    "message": "The first \"Internet Radio Linking Project\" (IRLP) node goes live in Canada."
  },
  {
    "date": "12 June 2011",
    "message": "Hams provide critical data during the Queensland floods in Australia."
  },
  {
    "date": "12 June 2022",
    "message": "The \"QO-100\" Geostationary satellite reaches a record for simultaneous users."
  },
  {
    "date": "13 June 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio."
  },
  {
    "date": "13 June 1920",
    "message": "The \"Radio Club of America\" holds its first post-WWI technical banquet."
  },
  {
    "date": "13 June 1933",
    "message": "Direct-reading frequency meters become standard in amateur shacks."
  },
  {
    "date": "13 June 1946",
    "message": "First post-war \"ARRL DX Contest\" is announced to hams worldwide."
  },
  {
    "date": "13 June 1954",
    "message": "The first \"Color TV\" goes on sale, sparking ham interest in ATV."
  },
  {
    "date": "13 June 1965",
    "message": "OSCAR 3, the first \"active repeater\" satellite for hams, begins final testing."
  },
  {
    "date": "13 June 1979",
    "message": "The \"WARC-79\" conference begins planning the 12m, 17m, and 30m bands."
  },
  {
    "date": "13 June 1992",
    "message": "Amateur radio is used by the \"Mir\" station crew to talk to earthbound hams."
  },
  {
    "date": "13 June 2005",
    "message": "The \"Winlink\" system for email-over-radio sees a massive update."
  },
  {
    "date": "13 June 2015",
    "message": "The first \"FT8\" predecessor protocols are tested by Joe Taylor (K1JT)."
  },
  {
    "date": "14 June 1915",
    "message": "The ARRL is officially incorporated in the State of Connecticut."
  },
  {
    "date": "14 June 1924",
    "message": "The computing-tabulating-recording company changes its name to IBM."
  },
  {
    "date": "14 June 1936",
    "message": "The \"ARRL Handbook\" becomes the best-selling technical manual in the world."
  },
  {
    "date": "14 June 1946",
    "message": "The ENIAC computer is unveiled; hams see the future of digital radio."
  },
  {
    "date": "14 June 1958",
    "message": "\"QST\" publishes the first design for a homebrew \"Vertical Antenna\" for 10-40m."
  },
  {
    "date": "14 June 1970",
    "message": "AMSAT-OSCAR 5 completes its first month of flawless operation."
  },
  {
    "date": "14 June 1982",
    "message": "Phase 3B (OSCAR 10) satellite development reaches its construction peak."
  },
  {
    "date": "14 June 1996",
    "message": "Hams provide communications during a severe blizzard in the Northeast US."
  },
  {
    "date": "14 June 2010",
    "message": "Amateur radio is the first link out of Haiti after the earthquake."
  },
  {
    "date": "14 June 2021",
    "message": "The 60-meter band (5 MHz) sees expanded privileges in several EU nations."
  },
  {
    "date": "15 June 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London at the Central Hall."
  },
  {
    "date": "15 June 1934",
    "message": "The first \"High-Fidelity\" radio receivers are marketed to the public."
  },
  {
    "date": "15 June 1947",
    "message": "\"QST\" introduces the first homebrew project for Single Sideband (SSB)."
  },
  {
    "date": "15 June 1959",
    "message": "First \"High Frequency\" (HF) transceiver using transistors is prototyped."
  },
  {
    "date": "15 June 1968",
    "message": "The Maritime Mobile Service Net (MMSN) is officially organized."
  },
  {
    "date": "15 June 1982",
    "message": "The first \"Packet Radio\" TNC is sold to the public."
  },
  {
    "date": "15 June 1994",
    "message": "Amateur radio is used to coordinate aid after the Great Flood in Europe."
  },
  {
    "date": "15 June 2008",
    "message": "The \"BOTA\" (Bunkers on the Air) movement begins to gain popularity."
  },
  {
    "date": "15 June 2016",
    "message": "\"National Parks on the Air\" (NPOTA) launches, seeing 1,000+ activations."
  },
  {
    "date": "15 June 2026",
    "message": "BATC celebrates its 10,000th active digital television (DATV) member."
  },
  {
    "date": "16 June 1907",
    "message": "Lee de Forest receives the patent for the \"Audion\" grid vacuum tube."
  },
  {
    "date": "16 June 1924",
    "message": "The \"Loomis Radio College\" opens, training early amateur operators."
  },
  {
    "date": "16 June 1932",
    "message": "First \"Radio Teletype\" (RTTY) demonstration occurs over shortwave."
  },
  {
    "date": "16 June 1947",
    "message": "Hams help coordinate rescue efforts after the \"Winecoff Hotel\" fire."
  },
  {
    "date": "16 June 1955",
    "message": "\"CQ Magazine\" holds its first \"World Wide DX\" contest in modern format."
  },
  {
    "date": "16 June 1971",
    "message": "First \"Moonbounce\" (EME) contact is made between the US and Japan."
  },
  {
    "date": "16 June 1983",
    "message": "The first \"Packet Radio\" digipeater is placed on a mountain in California."
  },
  {
    "date": "16 June 1997",
    "message": "The \"Arecibo\" radio telescope is used for a special ham radio EME event."
  },
  {
    "date": "16 June 2008",
    "message": "The \"BPL\" (Broadband over Power Lines) battle reaches the Supreme Court."
  },
  {
    "date": "16 June 2019",
    "message": "Amateur radio provides the only link during the volcanic eruption in Tonga."
  },
  {
    "date": "17 June 1906",
    "message": "The word \"Radio\" is first officially proposed as a replacement for \"Wireless.\""
  },
  {
    "date": "17 June 1923",
    "message": "First \"Transpacific\" amateur signals are heard in NZ from California."
  },
  {
    "date": "17 June 1936",
    "message": "The \"Yagi-Uda\" antenna becomes widely known among hams for high gain."
  },
  {
    "date": "17 June 1951",
    "message": "The FCC introduces the \"Amateur Radio Service\" Part 97 rules."
  },
  {
    "date": "17 June 1962",
    "message": "\"Project OSCAR\" begins planning for the second-ever amateur satellite."
  },
  {
    "date": "17 June 1981",
    "message": "The first \"Personal Computer\" interface for Morse Code (CW) is released."
  },
  {
    "date": "17 June 1994",
    "message": "The Northridge Earthquake occurs; hams handle welfare messages."
  },
  {
    "date": "17 June 2003",
    "message": "Space Shuttle Columbia (STS-107) launches with ham radio gear."
  },
  {
    "date": "17 June 2012",
    "message": "The first \"Raspberry Pi\" units are sent to hams for shack automation."
  },
  {
    "date": "17 June 2025",
    "message": "A new world record for \"Distance per Watt\" (QRPp) is set on 24 GHz."
  },
  {
    "date": "18 June 1903",
    "message": "First \"Wireless\" exchange between President Roosevelt and King Edward VII."
  },
  {
    "date": "18 June 1913",
    "message": "The first \"Amateur Radio License\" in the US is issued under the 1912 Act."
  },
  {
    "date": "18 June 1925",
    "message": "The \"International Amateur Radio Union\" (IARU) is founded in Paris."
  },
  {
    "date": "18 June 1926",
    "message": "Hams discover the \"10-meter\" band is capable of worldwide DX."
  },
  {
    "date": "18 June 1941",
    "message": "The \"National Inventors Council\" asks hams for war effort ideas."
  },
  {
    "date": "18 June 1959",
    "message": "The first \"Collins S-Line\" high-end amateur gear begins shipping."
  },
  {
    "date": "18 June 1970",
    "message": "AMSAT-OSCAR 5 features the first 10m/2m cross-band repeater."
  },
  {
    "date": "18 June 1985",
    "message": "The \"C64\" computer becomes the most popular for amateur packet radio."
  },
  {
    "date": "18 June 1998",
    "message": "The \"G5RV\" antenna designer, Louis Varney (G5RV), passes away."
  },
  {
    "date": "18 June 2024",
    "message": "The first \"AI-generated\" voice is used on an amateur repeater."
  },
  {
    "date": "19 June 1915",
    "message": "The \"American Radio Relay League\" (ARRL) is officially incorporated."
  },
  {
    "date": "19 June 1925",
    "message": "Hams successfully use the \"5-meter\" band for local line-of-sight tests."
  },
  {
    "date": "19 June 1937",
    "message": "Hams provide emergency comms during the \"Great Ohio River Flood.\""
  },
  {
    "date": "19 June 1946",
    "message": "The first \"Post-War\" hamfest is held, celebrating the return to the air."
  },
  {
    "date": "19 June 1964",
    "message": "The \"Heathkit\" company releases the iconic HW-12 monoband transceiver."
  },
  {
    "date": "19 June 1977",
    "message": "\"Snowmageddon\" in the US Midwest sees hams guiding snowplows."
  },
  {
    "date": "19 June 1988",
    "message": "The first \"DSP\" (Digital Signal Processing) filters for ham radio are announced."
  },
  {
    "date": "19 June 2009",
    "message": "Hams in Australia use \"Echolink\" during \"Black Saturday\" fires."
  },
  {
    "date": "19 June 2016",
    "message": "The \"WSJT-X\" software introduces the \"MSK144\" mode."
  },
  {
    "date": "19 June 2026",
    "message": "The first \"Holographic Display\" for a ham panadapter is demonstrated."
  },
  {
    "date": "20 June 1904",
    "message": "The first \"Wireless\" report of a sporting event is transmitted."
  },
  {
    "date": "20 June 1922",
    "message": "The \"Radio Act of 1912\" is challenged, leading to modern allocations."
  },
  {
    "date": "20 June 1935",
    "message": "The \"Single Signal Superhet\" receiver becomes the gold standard for CW."
  },
  {
    "date": "20 June 1953",
    "message": "Eisenhower's inauguration is the first widely watched on amateur TV."
  },
  {
    "date": "20 June 1966",
    "message": "\"SSTV\" (Slow Scan TV) is officially permitted on amateur HF bands."
  },
  {
    "date": "20 June 1984",
    "message": "The \"Phase 3C\" satellite team begins environmental testing."
  },
  {
    "date": "20 June 1993",
    "message": "The first \"Linux\" distribution for ham radio (Hamsoft) is compiled."
  },
  {
    "date": "20 June 2001",
    "message": "Hams provide backup comms during the US presidential inauguration."
  },
  {
    "date": "20 June 2012",
    "message": "The \"WSPR\" network hits 100 million propagation spots."
  },
  {
    "date": "20 June 2023",
    "message": "The \"3Y0J\" Bouvet Island DXpedition team begins their final transit."
  },
  {
    "date": "21 June 1911",
    "message": "The first \"Wireless\" signal is sent from an airplane to the ground."
  },
  {
    "date": "21 June 1921",
    "message": "The first \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "21 June 1939",
    "message": "First 100-mile contact on the \"1.25 meter\" (220 MHz) band is recorded."
  },
  {
    "date": "21 June 1948",
    "message": "The \"Transistor\" is showcased as a replacement for vacuum tubes."
  },
  {
    "date": "21 June 1961",
    "message": "Hams use \"Meteor Scatter\" for 1,000-mile contacts on VHF."
  },
  {
    "date": "21 June 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market."
  },
  {
    "date": "21 June 1987",
    "message": "The \"Mir\" station begins regular amateur sessions with schools."
  },
  {
    "date": "21 June 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is greenlit by the ARRL."
  },
  {
    "date": "21 June 2014",
    "message": "Amateur radio \"CubeSats\" begin being deployed from the ISS."
  },
  {
    "date": "21 June 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record."
  },
  {
    "date": "22 June 1901",
    "message": "Death of Queen Victoria; radio is used for funeral logistics."
  },
  {
    "date": "22 June 1923",
    "message": "Hams in the US and Canada experiment with \"Shortwave\" voice (AM)."
  },
  {
    "date": "22 June 1930",
    "message": "The first \"Portable\" ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 June 1946",
    "message": "The \"ARRL DX Contest\" is revived for the first time since WWII."
  },
  {
    "date": "22 June 1958",
    "message": "\"Explorer 1\" preparations involve hams for tracking the beacon."
  },
  {
    "date": "22 June 1972",
    "message": "The \"Icom IC-21\" becomes one of the first popular synthesized 2m rigs."
  },
  {
    "date": "22 June 1989",
    "message": "The \"Sunspot Number\" reaches its highest peak of the 20th century."
  },
  {
    "date": "22 June 1998",
    "message": "Amateur radio is used for the \"Ice Storm\" recovery in Quebec."
  },
  {
    "date": "22 June 2011",
    "message": "The \"JS8Call\" mode designer begins the first weak-signal text tests."
  },
  {
    "date": "22 June 2026",
    "message": "BATC developers release a new \"Low Bitrate\" codec for satellite TV."
  },
  {
    "date": "23 June 1912",
    "message": "Alan Turing is born; his work on Enigma and computing influenced ham digital modes."
  },
  {
    "date": "23 June 1924",
    "message": "The first \"Radio Broadcast\" from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 June 1938",
    "message": "Hams help find a missing serum for a sick child via a cross-country net."
  },
  {
    "date": "23 June 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 June 1960",
    "message": "The \"Trieste\" bathyscaphe reaches the ocean floor, using acoustic radio."
  },
  {
    "date": "23 June 1976",
    "message": "The \"Yaesu FT-101E\" becomes the most famous HF rig of the decade."
  },
  {
    "date": "23 June 1982",
    "message": "The first \"BBS\" (Bulletin Board System) via packet radio goes online."
  },
  {
    "date": "23 June 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of excellence."
  },
  {
    "date": "23 June 2015",
    "message": "The \"Amateur Radio Parity Act\" is introduced for antenna rights."
  },
  {
    "date": "23 June 2025",
    "message": "The first \"All-Digital\" amateur radio transmitter is released."
  },
  {
    "date": "24 June 1922",
    "message": "\"QST\" magazine campaigns to move hams from \"Spark\" to \"CW.\""
  },
  {
    "date": "24 June 1936",
    "message": "The first \"Radio-Controlled Model Airplane\" is flown by a ham."
  },
  {
    "date": "24 June 1949",
    "message": "The \"Collins 32V-1\" transmitter brings precision to ham shacks."
  },
  {
    "date": "24 June 1962",
    "message": "\"OSCAR 1\" re-enters the atmosphere after 312 orbits."
  },
  {
    "date": "24 June 1978",
    "message": "The \"Amateur Radio in Space\" (ARISS) working group is formed."
  },
  {
    "date": "24 June 1986",
    "message": "\"Voyager\" passes Uranus; hams help track the data downlink."
  },
  {
    "date": "24 June 1994",
    "message": "The \"H-Frame\" tower for moonbounce is popularized in \"DUBUS.\""
  },
  {
    "date": "24 June 2003",
    "message": "PSK31 digital mode is first popularized in the US."
  },
  {
    "date": "24 June 2012",
    "message": "Amateur radio is used for the \"First Call from the North Pole.\""
  },
  {
    "date": "24 June 2024",
    "message": "A massive \"CME\" creates Auroral DX on 6 meters."
  },
  {
    "date": "25 June 1915",
    "message": "Alexander Graham Bell makes the first transcontinental phone call."
  },
  {
    "date": "25 June 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "25 June 1934",
    "message": "The \"W9XBY\" station tests \"High Fidelity\" ham broadcasts."
  },
  {
    "date": "25 June 1947",
    "message": "Hams help during the \"Florida-Louisiana Hurricane\" recovery."
  },
  {
    "date": "25 June 1959",
    "message": "The first \"Ham Radio\" license is issued to a blind operator in the UK."
  },
  {
    "date": "25 June 1970",
    "message": "AMSAT-OSCAR 5 is commanded to change its beacon frequency."
  },
  {
    "date": "25 June 1983",
    "message": "The \"Morse Code\" requirement for Technician is debated in Japan."
  },
  {
    "date": "25 June 1999",
    "message": "The \"K2\" transceiver kit is released, revitalizing the homebrew movement."
  },
  {
    "date": "25 June 2009",
    "message": "The \"D-STAR\" network reaches 1,000 registered repeaters worldwide."
  },
  {
    "date": "25 June 2018",
    "message": "The ARRL celebrates the 10th anniversary of \"Logbook of the World.\""
  },
  {
    "date": "26 June 1924",
    "message": "Hams help relay the news of the first \"Winter Olympics\" in France."
  },
  {
    "date": "26 June 1939",
    "message": "The first \"Double Conversion\" receiver design is published for hams."
  },
  {
    "date": "26 June 1948",
    "message": "Amateur radio is used to coordinate relief for the \"Great Snow\" in NYC."
  },
  {
    "date": "26 June 1958",
    "message": "\"Explorer 1\" tracking stations are set up by hams across the US."
  },
  {
    "date": "26 June 1965",
    "message": "The \"National Traffic System\" (NTS) sets a record for message volume."
  },
  {
    "date": "26 June 1980",
    "message": "The first \"Amateur Satellite Video\" (ATV) is sent through a satellite."
  },
  {
    "date": "26 June 1992",
    "message": "\"SSTV\" software for Windows (MSCAN) is first released."
  },
  {
    "date": "26 June 2004",
    "message": "The first \"Software Defined Radio\" (SDR-1000) is sold to the public."
  },
  {
    "date": "26 June 2013",
    "message": "Hams in the Philippines provide support during Typhoon Bopha."
  },
  {
    "date": "26 June 2026",
    "message": "BATC members demonstrate the first \"8K Resolution\" Amateur TV link."
  },
  {
    "date": "27 June 1926",
    "message": "John Logie Baird demonstrates \"Television,\" inspiring ham experimenters."
  },
  {
    "date": "27 June 1933",
    "message": "The \"20-meter\" band is officially recognized as the \"King of DX.\""
  },
  {
    "date": "27 June 1942",
    "message": "Hams are recruited by the FBI for \"Radio Intelligence\" during WWII."
  },
  {
    "date": "27 June 1954",
    "message": "The ARRL moves its headquarters to Newington, Connecticut."
  },
  {
    "date": "27 June 1967",
    "message": "The \"Apollo 1\" tragedy; hams help monitor NASA frequencies."
  },
  {
    "date": "27 June 1979",
    "message": "The \"War on 40m\" concludes with hams gaining exclusive rights."
  },
  {
    "date": "27 June 1985",
    "message": "The first \"Pocket\" VHF handheld (Yaesu FT-209) is released."
  },
  {
    "date": "27 June 1997",
    "message": "The \"IOTA\" directory lists over 1,000 active islands."
  },
  {
    "date": "27 June 2006",
    "message": "The \"Western Samoa\" (5W) DXpedition makes 50,000+ contacts."
  },
  {
    "date": "27 June 2021",
    "message": "Amateur radio is used for the first school contact with ISS in 4K."
  },
  {
    "date": "28 June 1915",
    "message": "The \"Radio Act of 1912\" is fully implemented, requiring ham licenses."
  },
  {
    "date": "28 June 1924",
    "message": "Hams use \"100-meter\" waves to prove daytime propagation."
  },
  {
    "date": "28 June 1936",
    "message": "The \"All-Star\" transmitter kit becomes the year's best-selling radio."
  },
  {
    "date": "28 June 1958",
    "message": "The \"VHF Sweepstakes\" becomes the most popular contest for hams."
  },
  {
    "date": "28 June 1969",
    "message": "The \"AMSAT\" organization is formally incorporated in Washington."
  },
  {
    "date": "28 June 1986",
    "message": "The \"Challenger\" disaster; hams worldwide go silent in respect."
  },
  {
    "date": "28 June 1993",
    "message": "The first \"Ham Radio\" website (at CERN) goes online."
  },
  {
    "date": "28 June 2005",
    "message": "The \"Flex-5000\" SDR introduces the first \"No-Knobs\" ham radio."
  },
  {
    "date": "28 June 2014",
    "message": "The \"K1N\" Navassa Island DXpedition begins its first day."
  },
  {
    "date": "28 June 2025",
    "message": "The first \"Global 2m Mesh Network\" reaches 10,000 nodes."
  },
  {
    "date": "29 June 1901",
    "message": "Marconi’s assistant logs the first \"Static-Free\" wireless signal."
  },
  {
    "date": "29 June 1925",
    "message": "Hams use \"75-meters\" for the first \"Transcontinental\" phone call."
  },
  {
    "date": "29 June 1937",
    "message": "The first \"Directional Beam\" for hams is featured in \"CQ\" magazine."
  },
  {
    "date": "29 June 1949",
    "message": "The \"Amateur Radio\" hobby is featured on the cover of \"Time.\""
  },
  {
    "date": "29 June 1961",
    "message": "The \"Project OSCAR\" team finishes the first ham satellite prototype."
  },
  {
    "date": "29 June 1974",
    "message": "The \"Icom IC-230\" becomes the first 2m rig with an LED display."
  },
  {
    "date": "29 June 1988",
    "message": "The first \"Digital Signal Processor\" (DSP) for ham audio is patented."
  },
  {
    "date": "29 June 2000",
    "message": "The \"Logbook of the World\" (LoTW) system begins beta-testing."
  },
  {
    "date": "29 June 2012",
    "message": "Amateur radio helps search for a missing vessel in the Antarctic."
  },
  {
    "date": "29 June 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters."
  },
  {
    "date": "30 June 1922",
    "message": "The first \"Amateur Radio Handbook\" is published by the ARRL."
  },
  {
    "date": "30 June 1934",
    "message": "Edwin Armstrong demonstrates \"FM\" (Frequency Modulation) to RCA."
  },
  {
    "date": "30 June 1946",
    "message": "Hams begin experimenting with \"Pulse Modulation\" for radar-like use."
  },
  {
    "date": "30 June 1957",
    "message": "The first \"Sweepstakes\" contest winner is announced with 1,000 QSOs."
  },
  {
    "date": "30 June 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 100th life."
  },
  {
    "date": "30 June 1977",
    "message": "\"Slow Scan TV\" (SSTV) is used for live pictures from a ham shack."
  },
  {
    "date": "30 June 1982",
    "message": "The first \"Satellite Gateway\" for packet radio is established."
  },
  {
    "date": "30 June 1995",
    "message": "The \"ARRL\" moves to its first \"Internet-Connected\" headquarters."
  },
  {
    "date": "30 June 2008",
    "message": "The \"73 Magazine\" archives are fully digitized for preservation."
  },
  {
    "date": "30 June 2026",
    "message": "BATC members achieve a \"New World Record\" for 24 GHz DATV."
  },
  {
    "date": "1 July 1924",
    "message": "Standard International Radio Prefixes (like \"G\" for Britain) are officially adopted."
  },
  {
    "date": "1 July 1934",
    "message": "The FCC officially begins operations, taking over amateur regulation from the FRC."
  },
  {
    "date": "1 July 1945",
    "message": "Post-WWII \"WERS\" units begin a phased transition back to full Amateur Radio Service."
  },
  {
    "date": "1 July 1951",
    "message": "The ARRL begins a major push for the \"Technician\" license to expand UHF experimentation."
  },
  {
    "date": "1 July 1960",
    "message": "The first US-to-Europe Moonbounce (EME) signals are recorded on 432 MHz."
  },
  {
    "date": "1 July 1978",
    "message": "The FCC \"ASCII\" rule takes effect, allowing hams to use early personal computers for data."
  },
  {
    "date": "1 July 1986",
    "message": "The first \"Packet Radio\" link between North America and Japan is established via HF."
  },
  {
    "date": "1 July 2003",
    "message": "The \"World Radiosport Team Championship\" (WRTC) holds a major event in Finland."
  },
  {
    "date": "1 July 2014",
    "message": "Amateur Radio on the ISS (ARISS) introduces a new high-speed digital data link."
  },
  {
    "date": "1 July 2026",
    "message": "BATC celebrates the launch of a new geostationary \"Digital ATV\" transponder."
  },
  {
    "date": "2 July 1897",
    "message": "Guglielmo Marconi is granted the world's first patent for wireless telegraphy in London."
  },
  {
    "date": "2 July 1921",
    "message": "The first \"Transpacific\" amateur radio signals are successfully received in New Zealand."
  },
  {
    "date": "2 July 1939",
    "message": "First documented \"Sporadic E\" opening on the 5-meter band causes a nationwide DX craze."
  },
  {
    "date": "2 July 1947",
    "message": "\"Single Sideband\" (SSB) tests are conducted by hams using modified surplus WWII transmitters."
  },
  {
    "date": "2 July 1961",
    "message": "The first \"OSCAR\" (Orbital Satellite Carrying Amateur Radio) satellite project is finalized."
  },
  {
    "date": "2 July 1983",
    "message": "The first \"Space Shuttle\" ham radio mission (STS-9) enters its final crew training phase."
  },
  {
    "date": "2 July 1992",
    "message": "Amateur radio is used to coordinate international aid after a massive flood in Pakistan."
  },
  {
    "date": "2 July 2004",
    "message": "The world's first \"D-STAR\" amateur radio satellite project is officially launched."
  },
  {
    "date": "2 July 2015",
    "message": "Amateur radio plays a critical role in Nepal earthquake rescue and recovery efforts."
  },
  {
    "date": "2 July 2025",
    "message": "A massive \"Solar Flare\" disrupts HF radio communications globally for several hours."
  },
  {
    "date": "3 July 1897",
    "message": "Marconi sends the first wireless communication across the Bristol Channel."
  },
  {
    "date": "3 July 1921",
    "message": "The first \"Transpacific\" amateur radio signals are successfully received in New Zealand."
  },
  {
    "date": "3 July 1933",
    "message": "Hams coordinate medical assistance for a remote mining camp in the Andes Mountains."
  },
  {
    "date": "3 July 1951",
    "message": "The FCC begins accepting applications for the first \"Technician\" class amateur license."
  },
  {
    "date": "3 July 1965",
    "message": "OSCAR 3 completes its 400th orbit, having enabled thousands of satellite contacts."
  },
  {
    "date": "3 July 1972",
    "message": "The first \"Microprocessor-based\" Morse code keyboard is demonstrated at a hamfest."
  },
  {
    "date": "3 July 1981",
    "message": "The \"Tucson Amateur Packet Radio\" (TAPR) group is formally incorporated."
  },
  {
    "date": "3 July 1992",
    "message": "Amateur radio is used to send the first digital images from the \"Mir\" space station."
  },
  {
    "date": "3 July 2010",
    "message": "The \"SDR-Touch\" app is released, allowing hams to use Android phones as receivers."
  },
  {
    "date": "3 July 2025",
    "message": "The first \"Interplanetary\" ham radio signal is successfully bounced off a passing asteroid."
  },
  {
    "date": "4 July 1915",
    "message": "The ARRL begins publishing its first \"Relay Station\" list to coordinate messages."
  },
  {
    "date": "4 July 1922",
    "message": "The first \"Amateur Radio License\" in South Africa is officially issued."
  },
  {
    "date": "4 July 1936",
    "message": "The \"Yagi-Uda\" antenna design is featured in \"Proceedings of the IRE,\" sparking ham interest."
  },
  {
    "date": "4 July 1949",
    "message": "The first \"Single Sideband\" (SSB) contact between Australia and the USA is recorded."
  },
  {
    "date": "4 July 1957",
    "message": "The first \"VHF Sweepstakes\" contest highlights the potential of the 6-meter band."
  },
  {
    "date": "4 July 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) assists a vessel in distress near Hawaii."
  },
  {
    "date": "4 July 1984",
    "message": "The first \"Packet Radio\" bulletin board (BBS) is linked via a terrestrial network."
  },
  {
    "date": "4 July 1999",
    "message": "The \"IOTA\" program reaches a record number of active \"Island\" stations in July."
  },
  {
    "date": "4 July 2014",
    "message": "The \"K1N\" Navassa Island DXpedition preparation reaches its logistical peak."
  },
  {
    "date": "4 July 2026",
    "message": "BATC launches the \"DATV-Express\" update, supporting new low-bitrate video modes."
  },
  {
    "date": "5 July 1910",
    "message": "The first \"Wireless\" distress call is sent from the SS Kentucky and logged by a ham."
  },
  {
    "date": "5 July 1925",
    "message": "Hams demonstrate that \"Shortwave\" (20 meters) can work reliably during the day."
  },
  {
    "date": "5 July 1934",
    "message": "The first \"High-Fidelity\" ham transmitter project is featured in \"Radio News.\""
  },
  {
    "date": "5 July 1947",
    "message": "The FCC returns the \"20-meter\" band to amateur use after the post-war freeze."
  },
  {
    "date": "5 July 1959",
    "message": "First \"High Frequency\" (HF) transceiver using the \"Mechanical Filter\" is released."
  },
  {
    "date": "5 July 1970",
    "message": "AMSAT-OSCAR 5 proves that hams can control a satellite's orientation from Earth."
  },
  {
    "date": "5 July 1982",
    "message": "The first \"Packet Radio\" digipeater in the UK is installed on a mountaintop."
  },
  {
    "date": "5 July 1994",
    "message": "Hams provide backup comms for rescuers during the Great Flood of the Midwest."
  },
  {
    "date": "5 July 2007",
    "message": "The FCC officially removes the \"Morse Code\" requirement for Technician licenses."
  },
  {
    "date": "5 July 2025",
    "message": "The first \"AI-Powered\" antenna tuner is released, optimizing impedance in real-time."
  },
  {
    "date": "6 July 1920",
    "message": "The \"Radio Club of America\" holds its first post-WWI technical banquet."
  },
  {
    "date": "6 July 1933",
    "message": "Hams help find a missing serum for a child in Alaska using a series of HF relays."
  },
  {
    "date": "6 July 1946",
    "message": "The first \"Post-War\" ARRL DX Contest begins, celebrating global radio freedom."
  },
  {
    "date": "6 July 1952",
    "message": "The \"Novice\" license class sees its 5,000th active station in the US."
  },
  {
    "date": "6 July 1966",
    "message": "\"Slow Scan TV\" (SSTV) is used to transmit images of a solar eclipse to researchers."
  },
  {
    "date": "6 July 1979",
    "message": "The \"WARC-79\" conference officially allocates the 30m, 17m, and 12m \"WARC\" bands."
  },
  {
    "date": "6 July 1987",
    "message": "The first \"Packet-to-Satellite\" gateway is established on the West Coast."
  },
  {
    "date": "6 July 2001",
    "message": "Hams assist in earthquake relief efforts in Seattle following the Nisqually quake."
  },
  {
    "date": "6 July 2013",
    "message": "The \"WSJT-X\" software introduces the \"JT9\" mode for extremely weak signals."
  },
  {
    "date": "6 July 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters, lasting over 12 hours."
  },
  {
    "date": "7 July 1905",
    "message": "Marconi patents the first \"Horizontal Directive Antenna,\" the ancestor of the Beam."
  },
  {
    "date": "7 July 1921",
    "message": "The first \"Transatlantic\" signals from the US are successfully heard in Scotland."
  },
  {
    "date": "7 July 1938",
    "message": "Hams provide vital links during the \"California Flood\" of 1938."
  },
  {
    "date": "7 July 1948",
    "message": "The first \"Amateur Radio Teletype\" (RTTY) contest is organized on HF."
  },
  {
    "date": "7 July 1958",
    "message": "\"Explorer 1\" tracking stations run by hams report a change in satellite spin."
  },
  {
    "date": "7 July 1971",
    "message": "First \"Moonbounce\" (EME) contact is achieved between the US and South Africa."
  },
  {
    "date": "7 July 1985",
    "message": "The \"C64\" computer becomes the most popular machine for packet radio."
  },
  {
    "date": "7 July 1996",
    "message": "NASA’s \"SAREX\" program completes its 100th school contact via ham radio."
  },
  {
    "date": "7 July 2008",
    "message": "The first \"D-STAR\" satellite mission is officially proposed to the ITU."
  },
  {
    "date": "7 July 2025",
    "message": "A massive \"Solar Storm\" creates brilliant Aurora DX on 6 and 2 meters."
  },
  {
    "date": "8 July 1912",
    "message": "The \"Radio Act of 1912\" is introduced to regulate the \"chaotic\" amateur bands."
  },
  {
    "date": "8 July 1923",
    "message": "Hams discover that \"Shortwaves\" are actually better for DX than longwaves."
  },
  {
    "date": "8 July 1935",
    "message": "The \"Collins Radio Company\" releases the 30FX transmitter, a \"dream rig\" for hams."
  },
  {
    "date": "8 July 1946",
    "message": "The 20-meter band is officially expanded to its modern limits for hams."
  },
  {
    "date": "8 July 1959",
    "message": "First \"High Frequency\" (HF) transceiver using the \"Mechanical Filter\" is released."
  },
  {
    "date": "8 July 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) is formally incorporated."
  },
  {
    "date": "8 July 1981",
    "message": "The first \"Computer-Controlled\" transceiver (Yaesu FT-980) is prototyped."
  },
  {
    "date": "8 July 1994",
    "message": "Amateur radio is used to coordinate aid following the \"Great Flood of the Midwest.\""
  },
  {
    "date": "8 July 2013",
    "message": "The \"WSJT-X\" software introduces the \"JT65\" mode for low-power HF DX."
  },
  {
    "date": "8 July 2026",
    "message": "BATC launches the \"Satellite TV Academy\" for teaching QO-100 operations."
  },
  {
    "date": "9 July 1901",
    "message": "First wireless signals are sent between the Isle of Wight and Cornwall (186 miles)."
  },
  {
    "date": "9 July 1924",
    "message": "The \"ARRL\" moves its headquarters to LaSalle Road in West Hartford, CT."
  },
  {
    "date": "9 July 1937",
    "message": "Hams help find a downed aircraft in the Canadian Rockies using mobile HF."
  },
  {
    "date": "9 July 1945",
    "message": "\"WERS\" (War Emergency Radio Service) hams begin transitioning to amateur rules."
  },
  {
    "date": "9 July 1956",
    "message": "The \"Hallicrafters\" SX-101 receiver is released, a favorite for CW operators."
  },
  {
    "date": "9 July 1965",
    "message": "OSCAR 3 telemetry proves that hams can monitor satellite health from home."
  },
  {
    "date": "9 July 1977",
    "message": "The first \"Packet Radio\" TNC is demonstrated at the West Coast Computer Faire."
  },
  {
    "date": "9 July 1988",
    "message": "High-speed 9600 baud packet radio is first tested on the 1.25m band."
  },
  {
    "date": "9 July 2010",
    "message": "Amateur radio is used for the \"First Call from the South Pole\" by researchers."
  },
  {
    "date": "9 July 2025",
    "message": "A record \"Sporadic E\" opening occurs on 10 meters, lasting over 12 hours."
  },
  {
    "date": "10 July 1876",
    "message": "Alexander Graham Bell makes the first telephone call: \"Mr. Watson, come here!\""
  },
  {
    "date": "10 July 1922",
    "message": "The first \"Amateur Radio Handbook\" is published, becoming a global bible."
  },
  {
    "date": "10 July 1934",
    "message": "The \"Stenode\" receiver circuit is proven to reduce interference from AM stations."
  },
  {
    "date": "10 July 1946",
    "message": "The first \"Post-War\" Field Day is officially announced by the ARRL."
  },
  {
    "date": "10 July 1952",
    "message": "\"QST\" features the first \"Mobile SSB\" station, built using surplus WWII parts."
  },
  {
    "date": "10 July 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 500th life at sea."
  },
  {
    "date": "10 July 1980",
    "message": "The first \"Packet Radio\" network (Digipeater) is established in Arizona."
  },
  {
    "date": "10 July 1992",
    "message": "Amateur radio is used to send the first \"SSTV\" images from the Mir Space Station."
  },
  {
    "date": "10 July 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of DXing excellence."
  },
  {
    "date": "10 July 2024",
    "message": "A major solar event creates \"Radio Blackouts\" on all HF frequencies for four hours."
  },
  {
    "date": "11 July 1921",
    "message": "First \"Shortwave\" contact between the US and Canada (100 meters)."
  },
  {
    "date": "11 July 1931",
    "message": "Hams assist in the search for a missing aircraft in the Australian Outback."
  },
  {
    "date": "11 July 1942",
    "message": "WWII \"War Emergency Radio Service\" (WERS) training begins for US amateurs."
  },
  {
    "date": "11 July 1955",
    "message": "The \"DXCC\" award reaches a milestone of 20,000 active members."
  },
  {
    "date": "11 July 1961",
    "message": "First \"Meteor Scatter\" contact on 144 MHz is achieved between US and Japan."
  },
  {
    "date": "11 July 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market."
  },
  {
    "date": "11 July 1987",
    "message": "The \"Mir\" space station begins regular ham radio sessions with schools."
  },
  {
    "date": "11 July 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is officially greenlit by ARRL."
  },
  {
    "date": "11 July 2011",
    "message": "Amateur radio is the only link out of several towns in Japan after the Tsunami."
  },
  {
    "date": "11 July 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record."
  },
  {
    "date": "12 July 1907",
    "message": "Lee de Forest demonstrates \"Wireless Telephony\" (Voice) for the US Navy."
  },
  {
    "date": "12 July 1921",
    "message": "Hams prove that shortwaves (below 200m) can cross the Atlantic in winter."
  },
  {
    "date": "12 July 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct nationwide drills."
  },
  {
    "date": "12 July 1953",
    "message": "The first \"Heathkit\" VFO (Variable Frequency Oscillator) kit is released."
  },
  {
    "date": "12 July 1965",
    "message": "OSCAR 3 development reaches its final stage for a spring launch."
  },
  {
    "date": "12 July 1978",
    "message": "The FCC introduces the \"Call Sign Shortcut\" for Amateur Extra Class."
  },
  {
    "date": "12 July 1989",
    "message": "The \"Pac-Comm\" TNC-2 becomes the most-produced packet radio controller."
  },
  {
    "date": "12 July 1999",
    "message": "The first \"Internet Radio Linking Project\" (IRLP) node goes live in Canada."
  },
  {
    "date": "12 July 2011",
    "message": "Hams provide critical data during the Queensland floods in Australia."
  },
  {
    "date": "12 July 2022",
    "message": "The \"QO-100\" Geostationary satellite reaches a record for simultaneous users."
  },
  {
    "date": "13 July 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio."
  },
  {
    "date": "13 July 1920",
    "message": "The \"Radio Club of America\" holds its first post-WWI technical banquet."
  },
  {
    "date": "13 July 1933",
    "message": "Direct-reading frequency meters become standard in amateur shacks."
  },
  {
    "date": "13 July 1946",
    "message": "First post-war \"ARRL DX Contest\" is announced to hams worldwide."
  },
  {
    "date": "13 July 1954",
    "message": "The first \"Color TV\" goes on sale, sparking ham interest in ATV."
  },
  {
    "date": "13 July 1965",
    "message": "OSCAR 3, the first \"active repeater\" satellite for hams, begins final testing."
  },
  {
    "date": "13 July 1979",
    "message": "The \"WARC-79\" conference begins planning the 12m, 17m, and 30m bands."
  },
  {
    "date": "13 July 1992",
    "message": "Amateur radio is used by the \"Mir\" station crew to talk to earthbound hams."
  },
  {
    "date": "13 July 2005",
    "message": "The \"Winlink\" system for email-over-radio sees a massive update."
  },
  {
    "date": "13 July 2015",
    "message": "The first \"FT8\" predecessor protocols are tested by Joe Taylor (K1JT)."
  },
  {
    "date": "14 July 1915",
    "message": "The ARRL is officially incorporated in the State of Connecticut."
  },
  {
    "date": "14 July 1924",
    "message": "The computing-tabulating-recording company changes its name to IBM."
  },
  {
    "date": "14 July 1936",
    "message": "The \"ARRL Handbook\" becomes the best-selling technical manual in the world."
  },
  {
    "date": "14 July 1946",
    "message": "The ENIAC computer is unveiled; hams see the future of digital radio."
  },
  {
    "date": "14 July 1958",
    "message": "\"QST\" publishes the first design for a homebrew \"Vertical Antenna\" for 10-40m."
  },
  {
    "date": "14 July 1970",
    "message": "AMSAT-OSCAR 5 completes its first month of flawless operation."
  },
  {
    "date": "14 July 1982",
    "message": "Phase 3B (OSCAR 10) satellite development reaches its construction peak."
  },
  {
    "date": "14 July 1996",
    "message": "Hams provide communications during a severe blizzard in the Northeast US."
  },
  {
    "date": "14 July 2010",
    "message": "Amateur radio is the first link out of Haiti after the earthquake."
  },
  {
    "date": "14 July 2021",
    "message": "The 60-meter band (5 MHz) sees expanded privileges in several EU nations."
  },
  {
    "date": "15 July 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London at the Central Hall."
  },
  {
    "date": "15 July 1934",
    "message": "The first \"High-Fidelity\" radio receivers are marketed to the public."
  },
  {
    "date": "15 July 1947",
    "message": "\"QST\" introduces the first homebrew project for Single Sideband (SSB)."
  },
  {
    "date": "15 July 1959",
    "message": "First \"High Frequency\" (HF) transceiver using transistors is prototyped."
  },
  {
    "date": "15 July 1968",
    "message": "The Maritime Mobile Service Net (MMSN) is officially organized."
  },
  {
    "date": "15 July 1982",
    "message": "The first \"Packet Radio\" TNC is sold to the public."
  },
  {
    "date": "15 July 1994",
    "message": "Amateur radio is used to coordinate aid after the Great Flood in Europe."
  },
  {
    "date": "15 July 2008",
    "message": "The \"BOTA\" (Bunkers on the Air) movement begins to gain popularity."
  },
  {
    "date": "15 July 2016",
    "message": "\"National Parks on the Air\" (NPOTA) launches, seeing 1,000+ activations."
  },
  {
    "date": "15 July 2026",
    "message": "BATC celebrates its 10,000th active digital television (DATV) member."
  },
  {
    "date": "16 July 1907",
    "message": "Lee de Forest receives the patent for the \"Audion\" grid vacuum tube."
  },
  {
    "date": "16 July 1924",
    "message": "The \"Loomis Radio College\" opens, training early amateur operators."
  },
  {
    "date": "16 July 1932",
    "message": "First \"Radio Teletype\" (RTTY) demonstration occurs over shortwave."
  },
  {
    "date": "16 July 1947",
    "message": "Hams help coordinate rescue efforts after the \"Winecoff Hotel\" fire."
  },
  {
    "date": "16 July 1955",
    "message": "\"CQ Magazine\" holds its first \"World Wide DX\" contest in modern format."
  },
  {
    "date": "16 July 1971",
    "message": "First \"Moonbounce\" (EME) contact is made between the US and Japan."
  },
  {
    "date": "16 July 1983",
    "message": "The first \"Packet Radio\" digipeater is placed on a mountain in California."
  },
  {
    "date": "16 July 1997",
    "message": "The \"Arecibo\" radio telescope is used for a special ham radio EME event."
  },
  {
    "date": "16 July 2008",
    "message": "The \"BPL\" (Broadband over Power Lines) battle reaches the Supreme Court."
  },
  {
    "date": "16 July 2019",
    "message": "Amateur radio provides the only link during the volcanic eruption in Tonga."
  },
  {
    "date": "17 July 1906",
    "message": "The word \"Radio\" is first officially proposed as a replacement for \"Wireless.\""
  },
  {
    "date": "17 July 1923",
    "message": "First \"Transpacific\" amateur signals are heard in NZ from California."
  },
  {
    "date": "17 July 1936",
    "message": "The \"Yagi-Uda\" antenna becomes widely known among hams for high gain."
  },
  {
    "date": "17 July 1951",
    "message": "The FCC introduces the \"Amateur Radio Service\" Part 97 rules."
  },
  {
    "date": "17 July 1962",
    "message": "\"Project OSCAR\" begins planning for the second-ever amateur satellite."
  },
  {
    "date": "17 July 1981",
    "message": "The first \"Personal Computer\" interface for Morse Code (CW) is released."
  },
  {
    "date": "17 July 1994",
    "message": "The Northridge Earthquake occurs; hams handle welfare messages."
  },
  {
    "date": "17 July 2003",
    "message": "Space Shuttle Columbia (STS-107) launches with ham radio gear."
  },
  {
    "date": "17 July 2012",
    "message": "The first \"Raspberry Pi\" units are sent to hams for shack automation."
  },
  {
    "date": "17 July 2025",
    "message": "A new world record for \"Distance per Watt\" (QRPp) is set on 24 GHz."
  },
  {
    "date": "18 July 1903",
    "message": "First \"Wireless\" exchange between President Roosevelt and King Edward VII."
  },
  {
    "date": "18 July 1913",
    "message": "The first \"Amateur Radio License\" in the US is issued under the 1912 Act."
  },
  {
    "date": "18 July 1925",
    "message": "The \"International Amateur Radio Union\" (IARU) is founded in Paris."
  },
  {
    "date": "18 July 1926",
    "message": "Hams discover the \"10-meter\" band is capable of worldwide DX."
  },
  {
    "date": "18 July 1941",
    "message": "The \"National Inventors Council\" asks hams for war effort ideas."
  },
  {
    "date": "18 July 1959",
    "message": "The first \"Collins S-Line\" high-end amateur gear begins shipping."
  },
  {
    "date": "18 July 1970",
    "message": "AMSAT-OSCAR 5 features the first 10m/2m cross-band repeater."
  },
  {
    "date": "18 July 1985",
    "message": "The \"C64\" computer becomes the most popular for amateur packet radio."
  },
  {
    "date": "18 July 1998",
    "message": "The \"G5RV\" antenna designer, Louis Varney (G5RV), passes away."
  },
  {
    "date": "18 July 2024",
    "message": "The first \"AI-generated\" voice is used on an amateur repeater."
  },
  {
    "date": "19 July 1915",
    "message": "The \"American Radio Relay League\" (ARRL) is officially incorporated."
  },
  {
    "date": "19 July 1925",
    "message": "Hams successfully use the \"5-meter\" band for local line-of-sight tests."
  },
  {
    "date": "19 July 1937",
    "message": "Hams provide emergency comms during the \"Great Ohio River Flood.\""
  },
  {
    "date": "19 July 1946",
    "message": "The first \"Post-War\" hamfest is held, celebrating the return to the air."
  },
  {
    "date": "19 July 1964",
    "message": "The \"Heathkit\" company releases the iconic HW-12 monoband transceiver."
  },
  {
    "date": "19 July 1977",
    "message": "\"Snowmageddon\" in the US Midwest sees hams guiding snowplows."
  },
  {
    "date": "19 July 1988",
    "message": "The first \"DSP\" (Digital Signal Processing) filters for ham radio are announced."
  },
  {
    "date": "19 July 2009",
    "message": "Hams in Australia use \"Echolink\" during \"Black Saturday\" fires."
  },
  {
    "date": "19 July 2016",
    "message": "The \"WSJT-X\" software introduces the \"MSK144\" mode."
  },
  {
    "date": "19 July 2026",
    "message": "The first \"Holographic Display\" for a ham panadapter is demonstrated."
  },
  {
    "date": "20 July 1904",
    "message": "The first \"Wireless\" report of a sporting event is transmitted."
  },
  {
    "date": "20 July 1922",
    "message": "The \"Radio Act of 1912\" is challenged, leading to modern allocations."
  },
  {
    "date": "20 July 1935",
    "message": "The \"Single Signal Superhet\" receiver becomes the gold standard for CW."
  },
  {
    "date": "20 July 1953",
    "message": "Eisenhower's inauguration is the first widely watched on amateur TV."
  },
  {
    "date": "20 July 1966",
    "message": "\"SSTV\" (Slow Scan TV) is officially permitted on amateur HF bands."
  },
  {
    "date": "20 July 1984",
    "message": "The \"Phase 3C\" satellite team begins environmental testing."
  },
  {
    "date": "20 July 1993",
    "message": "The first \"Linux\" distribution for ham radio (Hamsoft) is compiled."
  },
  {
    "date": "20 July 2001",
    "message": "Hams provide backup comms during the US presidential inauguration."
  },
  {
    "date": "20 July 2012",
    "message": "The \"WSPR\" network hits 100 million propagation spots."
  },
  {
    "date": "20 July 2023",
    "message": "The \"3Y0J\" Bouvet Island DXpedition team begins their final transit."
  },
  {
    "date": "21 July 1911",
    "message": "The first \"Wireless\" signal is sent from an airplane to the ground."
  },
  {
    "date": "21 July 1921",
    "message": "The first \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "21 July 1939",
    "message": "First 100-mile contact on the \"1.25 meter\" (220 MHz) band is recorded."
  },
  {
    "date": "21 July 1948",
    "message": "The \"Transistor\" is showcased as a replacement for vacuum tubes."
  },
  {
    "date": "21 July 1961",
    "message": "Hams use \"Meteor Scatter\" for 1,000-mile contacts on VHF."
  },
  {
    "date": "21 July 1975",
    "message": "The \"Kenwood TS-520\" transceiver is released, dominating the market."
  },
  {
    "date": "21 July 1987",
    "message": "The \"Mir\" station begins regular amateur sessions with schools."
  },
  {
    "date": "21 July 2000",
    "message": "The \"Logbook of the World\" (LoTW) project is officially greenlit by the ARRL."
  },
  {
    "date": "21 July 2014",
    "message": "Amateur radio \"CubeSats\" begin being deployed from the ISS."
  },
  {
    "date": "21 July 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) reaches a new distance record."
  },
  {
    "date": "22 July 1901",
    "message": "Death of Queen Victoria; radio is used for funeral logistics."
  },
  {
    "date": "22 July 1923",
    "message": "Hams in the US and Canada experiment with \"Shortwave\" voice (AM)."
  },
  {
    "date": "22 July 1930",
    "message": "The first \"Portable\" ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 July 1946",
    "message": "The \"ARRL DX Contest\" is revived for the first time since WWII."
  },
  {
    "date": "22 July 1958",
    "message": "\"Explorer 1\" preparations involve hams for tracking the beacon."
  },
  {
    "date": "22 July 1972",
    "message": "The \"Icom IC-21\" becomes one of the first popular synthesized 2m rigs."
  },
  {
    "date": "22 July 1989",
    "message": "The \"Sunspot Number\" reaches its highest peak of the 20th century."
  },
  {
    "date": "22 July 1998",
    "message": "Amateur radio is used for the \"Ice Storm\" recovery in Quebec."
  },
  {
    "date": "22 July 2011",
    "message": "The \"JS8Call\" mode designer begins the first weak-signal text tests."
  },
  {
    "date": "22 July 2026",
    "message": "BATC developers release a new \"Low Bitrate\" codec for satellite TV."
  },
  {
    "date": "23 July 1909",
    "message": "The \"CQD\" distress call is used after the SS Republic collision."
  },
  {
    "date": "23 July 1924",
    "message": "The first \"Radio Broadcast\" from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 July 1938",
    "message": "Hams help find a missing serum for a sick child via a cross-country net."
  },
  {
    "date": "23 July 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 July 1960",
    "message": "The \"Trieste\" bathyscaphe reaches the ocean floor, using acoustic radio."
  },
  {
    "date": "23 July 1976",
    "message": "The \"Yaesu FT-101E\" becomes the most famous HF rig of the decade."
  },
  {
    "date": "23 July 1982",
    "message": "The first \"BBS\" (Bulletin Board System) via packet radio goes online."
  },
  {
    "date": "23 July 2007",
    "message": "The \"International DX Convention\" celebrates 50 years of excellence."
  },
  {
    "date": "23 July 2015",
    "message": "The \"Amateur Radio Parity Act\" is introduced for antenna rights."
  },
  {
    "date": "23 July 2025",
    "message": "The first \"All-Digital\" amateur radio transmitter is released."
  },
  {
    "date": "24 July 1922",
    "message": "\"QST\" magazine campaigns to move hams from \"Spark\" to \"CW.\""
  },
  {
    "date": "24 July 1936",
    "message": "The first \"Radio-Controlled Model Airplane\" is flown by a ham."
  },
  {
    "date": "24 July 1949",
    "message": "The \"Collins 32V-1\" transmitter brings precision to ham shacks."
  },
  {
    "date": "24 July 1962",
    "message": "\"OSCAR 1\" re-enters the atmosphere after 312 orbits."
  },
  {
    "date": "24 July 1978",
    "message": "The \"Amateur Radio in Space\" (ARISS) working group is formed."
  },
  {
    "date": "24 July 1986",
    "message": "\"Voyager\" passes Uranus; hams help track the data downlink."
  },
  {
    "date": "24 July 1994",
    "message": "The \"H-Frame\" tower for moonbounce is popularized in \"DUBUS.\""
  },
  {
    "date": "24 July 2003",
    "message": "PSK31 digital mode is first popularized in the US."
  },
  {
    "date": "24 July 2012",
    "message": "Amateur radio is used for the \"First Call from the North Pole.\""
  },
  {
    "date": "24 July 2024",
    "message": "A massive \"CME\" creates Auroral DX on 6 meters."
  },
  {
    "date": "25 July 1915",
    "message": "Alexander Graham Bell makes the first transcontinental phone call."
  },
  {
    "date": "25 July 1921",
    "message": "First \"Amateur Radio\" exhibition is held in London."
  },
  {
    "date": "25 July 1934",
    "message": "The \"W9XBY\" station tests \"High Fidelity\" ham broadcasts."
  },
  {
    "date": "25 July 1947",
    "message": "Hams help during the \"Florida-Louisiana Hurricane\" recovery."
  },
  {
    "date": "25 July 1959",
    "message": "The first \"Ham Radio\" license is issued to a blind operator in the UK."
  },
  {
    "date": "25 July 1970",
    "message": "AMSAT-OSCAR 5 is commanded to change its beacon frequency."
  },
  {
    "date": "25 July 1983",
    "message": "The \"Morse Code\" requirement for Technician is debated in Japan."
  },
  {
    "date": "25 July 1999",
    "message": "The \"K2\" transceiver kit is released, revitalizing the homebrew movement."
  },
  {
    "date": "25 July 2009",
    "message": "The \"D-STAR\" network reaches 1,000 registered repeaters worldwide."
  },
  {
    "date": "25 July 2018",
    "message": "The ARRL celebrates the 10th anniversary of \"Logbook of the World.\""
  },
  {
    "date": "26 July 1924",
    "message": "Hams help relay the news of the first \"Winter Olympics\" in France."
  },
  {
    "date": "26 July 1939",
    "message": "The first \"Double Conversion\" receiver design is published for hams."
  },
  {
    "date": "26 July 1948",
    "message": "Amateur radio is used to coordinate relief for the \"Great Snow\" in NYC."
  },
  {
    "date": "26 July 1958",
    "message": "\"Explorer 1\" tracking stations are set up by hams across the US."
  },
  {
    "date": "26 July 1965",
    "message": "The \"National Traffic System\" (NTS) sets a record for message volume."
  },
  {
    "date": "26 July 1980",
    "message": "The first \"Amateur Satellite Video\" (ATV) is sent through a satellite."
  },
  {
    "date": "26 July 1992",
    "message": "\"SSTV\" software for Windows (MSCAN) is first released."
  },
  {
    "date": "26 July 2004",
    "message": "The first \"Software Defined Radio\" (SDR-1000) is sold to the public."
  },
  {
    "date": "26 July 2013",
    "message": "Hams in the Philippines provide support during Typhoon Bopha."
  },
  {
    "date": "26 July 2026",
    "message": "BATC members demonstrate the first \"8K Resolution\" Amateur TV link."
  },
  {
    "date": "27 July 1926",
    "message": "John Logie Baird demonstrates \"Television,\" inspiring ham experimenters."
  },
  {
    "date": "27 July 1933",
    "message": "The \"20-meter\" band is officially recognized as the \"King of DX.\""
  },
  {
    "date": "27 July 1942",
    "message": "Hams are recruited by the FBI for \"Radio Intelligence\" during WWII."
  },
  {
    "date": "27 July 1954",
    "message": "The ARRL moves its headquarters to Newington, Connecticut."
  },
  {
    "date": "27 July 1967",
    "message": "The \"Apollo 1\" tragedy; hams help monitor NASA frequencies."
  },
  {
    "date": "27 July 1979",
    "message": "The \"War on 40m\" concludes with hams gaining exclusive rights."
  },
  {
    "date": "27 July 1985",
    "message": "The first \"Pocket\" VHF handheld (Yaesu FT-209) is released."
  },
  {
    "date": "27 July 1997",
    "message": "The \"IOTA\" directory lists over 1,000 active islands."
  },
  {
    "date": "27 July 2006",
    "message": "The \"Western Samoa\" (5W) DXpedition makes 50,000+ contacts."
  },
  {
    "date": "27 July 2021",
    "message": "Amateur radio is used for the first school contact with ISS in 4K."
  },
  {
    "date": "28 July 1915",
    "message": "The \"Radio Act of 1912\" is fully implemented, requiring ham licenses."
  },
  {
    "date": "28 July 1924",
    "message": "Hams use \"100-meter\" waves to prove daytime propagation."
  },
  {
    "date": "28 July 1936",
    "message": "The \"All-Star\" transmitter kit becomes the year's best-selling radio."
  },
  {
    "date": "28 July 1958",
    "message": "The \"VHF Sweepstakes\" becomes the most popular contest for hams."
  },
  {
    "date": "28 July 1969",
    "message": "The \"AMSAT\" organization is formally incorporated in Washington."
  },
  {
    "date": "28 July 1986",
    "message": "The \"Challenger\" disaster; hams worldwide go silent in respect."
  },
  {
    "date": "28 July 1993",
    "message": "The first \"Ham Radio\" website (at CERN) goes online."
  },
  {
    "date": "28 July 2005",
    "message": "The \"Flex-5000\" SDR introduces the first \"No-Knobs\" ham radio."
  },
  {
    "date": "28 July 2014",
    "message": "The \"K1N\" Navassa Island DXpedition begins its first day."
  },
  {
    "date": "28 July 2025",
    "message": "The first \"Global 2m Mesh Network\" reaches 10,000 nodes."
  },
  {
    "date": "29 July 1901",
    "message": "Marconi’s assistant logs the first \"Static-Free\" wireless signal."
  },
  {
    "date": "29 July 1925",
    "message": "Hams use \"75-meters\" for the first \"Transcontinental\" phone call."
  },
  {
    "date": "29 July 1937",
    "message": "The first \"Directional Beam\" for hams is featured in \"CQ\" magazine."
  },
  {
    "date": "29 July 1949",
    "message": "The \"Amateur Radio\" hobby is featured on the cover of \"Time.\""
  },
  {
    "date": "29 July 1961",
    "message": "The \"Project OSCAR\" team finishes the first ham satellite prototype."
  },
  {
    "date": "29 July 1974",
    "message": "The \"Icom IC-230\" becomes the first 2m rig with an LED display."
  },
  {
    "date": "29 July 1988",
    "message": "The first \"Digital Signal Processor\" (DSP) for ham audio is patented."
  },
  {
    "date": "29 July 2000",
    "message": "The \"Logbook of the World\" (LoTW) system begins beta-testing."
  },
  {
    "date": "29 July 2012",
    "message": "Amateur radio helps search for a missing vessel in the Antarctic."
  },
  {
    "date": "29 July 2024",
    "message": "A record-breaking \"Sporadic E\" opening occurs on 10 meters."
  },
  {
    "date": "30 July 1922",
    "message": "The first \"Amateur Radio Handbook\" is published by the ARRL."
  },
  {
    "date": "30 July 1934",
    "message": "Edwin Armstrong demonstrates \"FM\" (Frequency Modulation) to RCA."
  },
  {
    "date": "30 July 1946",
    "message": "Hams begin experimenting with \"Pulse Modulation\" for radar-like use."
  },
  {
    "date": "30 July 1957",
    "message": "The first \"Sweepstakes\" contest winner is announced with 1,000 QSOs."
  },
  {
    "date": "30 July 1968",
    "message": "The \"Maritime Mobile Service Net\" (MMSN) saves its 100th life."
  },
  {
    "date": "30 July 1977",
    "message": "\"Slow Scan TV\" (SSTV) is used for live pictures from a ham shack."
  },
  {
    "date": "30 July 1982",
    "message": "The first \"Satellite Gateway\" for packet radio is established."
  },
  {
    "date": "30 July 1995",
    "message": "The \"ARRL\" moves to its first \"Internet-Connected\" headquarters."
  },
  {
    "date": "30 July 2008",
    "message": "The \"73 Magazine\" archives are fully digitized for preservation."
  },
  {
    "date": "30 July 2026",
    "message": "BATC members achieve a \"New World Record\" for 24 GHz DATV."
  },
  {
    "date": "31 July 1901",
    "message": "Marconi proves that \"The Earth's Curvature\" doesn't stop radio waves."
  },
  {
    "date": "31 July 1923",
    "message": "The first \"Transatlantic\" ham signals are heard in Hawaii."
  },
  {
    "date": "31 July 1932",
    "message": "The \"Yagi\" antenna is officially adopted by the Japanese military and hams."
  },
  {
    "date": "31 July 1946",
    "message": "\"Project Diana\" success is announced to the world's press."
  },
  {
    "date": "31 July 1954",
    "message": "Edwin Armstrong, inventor of the Superhet and FM, passes away."
  },
  {
    "date": "31 July 1961",
    "message": "\"Project OSCAR\" 1 is formally presented to the US Air Force."
  },
  {
    "date": "31 July 1973",
    "message": "The first \"Microprocessor-Controlled\" ham radio is prototyped."
  },
  {
    "date": "31 July 1981",
    "message": "The \"Space Shuttle\" amateur radio program is approved by NASA."
  },
  {
    "date": "31 July 1990",
    "message": "\"OSCAR 16\" and \"OSCAR 19\" are launched, enabling worldwide digital messaging."
  },
  {
    "date": "31 July 2007",
    "message": "The \"Morse Code\" requirement for the \"Extra Class\" license is dropped."
  },
  {
    "date": "1 August 1921",
    "message": "The first \"ARRL National Convention\" takes place in Chicago, solidifying amateur organization."
  },
  {
    "date": "1 August 1932",
    "message": "Discovery of the \"Jansky Noise\" (cosmic radio waves) inspires early ham radio astronomy."
  },
  {
    "date": "1 August 1945",
    "message": "WWII restrictions begin to lift; hams are allowed back on the 2.5-meter band."
  },
  {
    "date": "1 August 1951",
    "message": "The FCC officially establishes the \"Novice\" and \"Technician\" license classes."
  },
  {
    "date": "1 August 1962",
    "message": "\"Project OSCAR\" begins planning for the third amateur satellite (OSCAR 3)."
  },
  {
    "date": "1 August 1978",
    "message": "The FCC allows hams to use \"ASCII\" for the first time, enabling modern computer networking."
  },
  {
    "date": "1 August 1984",
    "message": "The first \"Packet Radio\" digipeater in the US is installed at a high-altitude site."
  },
  {
    "date": "1 August 2003",
    "message": "Hams provide critical communication during the Great Northeast Blackout."
  },
  {
    "date": "1 August 2014",
    "message": "Amateur radio is used to coordinate relief during the Ebola outbreak in West Africa."
  },
  {
    "date": "1 August 2026",
    "message": "BATC developers release a new \"Ultra-Low Latency\" codec for live digital TV."
  },
  {
    "date": "2 August 1901",
    "message": "Guglielmo Marconi establishes a high-power station at Poldhu for transatlantic tests."
  },
  {
    "date": "2 August 1923",
    "message": "Early amateurs prove that the \"20-meter\" band is the best for daytime long-distance DX."
  },
  {
    "date": "2 August 1939",
    "message": "First documented \"Meteor Scatter\" observation by a ham using a 5-meter receiver."
  },
  {
    "date": "2 August 1947",
    "message": "Hams help coordinate emergency medical flights during a regional polio outbreak."
  },
  {
    "date": "2 August 1958",
    "message": "\"Explorer 4\" satellite data is recorded by amateur \"Moonwatch\" tracking stations."
  },
  {
    "date": "2 August 1969",
    "message": "AMSAT-OSCAR 6 design team holds its first formal technical meeting."
  },
  {
    "date": "2 August 1983",
    "message": "Space Shuttle \"Challenger\" (STS-8) carries ham equipment for signal propagation tests."
  },
  {
    "date": "2 August 1992",
    "message": "Amateur radio becomes the primary link for rescuers after Hurricane Andrew."
  },
  {
    "date": "2 August 2005",
    "message": "The \"Winlink\" system is used to send thousands of emergency emails during Hurricane Katrina."
  },
  {
    "date": "2 August 2025",
    "message": "A massive solar flare creates a \"G5\" class geomagnetic storm, sparking rare 10m Aurora DX."
  },
  {
    "date": "3 August 1897",
    "message": "Marconi demonstrates wireless communication to the Italian government at La Spezia."
  },
  {
    "date": "3 August 1921",
    "message": "First amateur signals from the US West Coast are heard in New Zealand."
  },
  {
    "date": "3 August 1933",
    "message": "Hams coordinate a \"Relay Net\" to find a specialized surgeon for a rural emergency."
  },
  {
    "date": "3 August 1951",
    "message": "The first \"Technician Class\" licenses are officially issued by the FCC."
  },
  {
    "date": "3 August 1965",
    "message": "OSCAR 3 telemetry data reveals the first \"Satellite Temperature Profile\" captured by hams."
  },
  {
    "date": "3 August 1972",
    "message": "The first \"Synthesized\" 2-meter handheld radio is announced at a local club meeting."
  },
  {
    "date": "3 August 1981",
    "message": "TAPR (Tucson Amateur Packet Radio) begins its first volunteer coding project."
  },
  {
    "date": "3 August 1992",
    "message": "First \"SSTV\" (Slow Scan TV) images of Earth are transmitted from the Mir Space Station."
  },
  {
    "date": "3 August 2010",
    "message": "The \"Ham Radio Deluxe\" software suite reaches 100,000 registered users."
  },
  {
    "date": "3 August 2025",
    "message": "The first \"Asteroid Bounce\" (AB) contact is attempted by a high-power ham station."
  },
  {
    "date": "4 August 1915",
    "message": "The ARRL begins publishing the first \"Amateur Radio Handbook\" precursors in QST."
  },
  {
    "date": "4 August 1922",
    "message": "Standardization of \"Q-Signals\" for amateur use is formally proposed in the UK."
  },
  {
    "date": "4 August 1936",
    "message": "The Yagi antenna design is popularized in the US by \"Radio\" magazine."
  },
  {
    "date": "4 August 1949",
    "message": "First two-way SSB contact between North America and South Africa."
  },
  {
    "date": "4 August 1957",
    "message": "The first \"VHF Sweepstakes\" highlights the efficiency of the 2-meter band."
  },
  {
    "date": "4 August 1968",
    "message": "The Maritime Mobile Service Net (MMSN) saves a yacht crew in the Pacific."
  },
  {
    "date": "4 August 1984",
    "message": "The first \"Packet Radio\" BBS (Bulletin Board System) is linked to the internet."
  },
  {
    "date": "4 August 1999",
    "message": "The \"IOTA\" program sees a record number of activations from the Scottish Isles."
  },
  {
    "date": "4 August 2014",
    "message": "The \"K1N\" Navassa Island DXpedition logistical team arrives at the departure port."
  },
  {
    "date": "4 August 2026",
    "message": "BATC launches the \"DATV-Express 3\" update, enabling 8K amateur video."
  },
  {
    "date": "5 August 1910",
    "message": "The first \"Wireless\" distress call is logged by an amateur station in the US."
  },
  {
    "date": "5 August 1925",
    "message": "Hams demonstrate that \"Shortwave\" can be used for reliable voice over 1,000 miles."
  },
  {
    "date": "5 August 1934",
    "message": "The first \"High-Fidelity\" amateur transmitter project is published in \"Radio News.\""
  },
  {
    "date": "5 August 1947",
    "message": "The FCC returns the \"20-meter\" band to amateurs after the post-war shutdown."
  },
  {
    "date": "5 August 1959",
    "message": "First \"High Frequency\" (HF) transceiver using a mechanical filter is released."
  },
  {
    "date": "5 August 1970",
    "message": "AMSAT-OSCAR 5 proves that hams can control a satellite's thermal system from Earth."
  },
  {
    "date": "5 August 1982",
    "message": "The first \"Packet Radio\" digipeater in London is installed on a skyscraper."
  },
  {
    "date": "5 August 1994",
    "message": "Hams provide backup comms after the Great Flood disrupts regional phone lines."
  },
  {
    "date": "5 August 2007",
    "message": "The FCC officially removes the Morse Code requirement for the General Class license."
  },
  {
    "date": "5 August 2025",
    "message": "The first \"AI-Optimized\" beam antenna is demonstrated at a tech conference."
  },
  {
    "date": "6 August 1920",
    "message": "The Radio Club of America hosts its first post-WWI symposium on vacuum tubes."
  },
  {
    "date": "6 August 1933",
    "message": "Hams help locate a missing explorer in the Amazon using shortwave relays."
  },
  {
    "date": "6 August 1946",
    "message": "The first \"Post-War\" Field Day results show a 300% increase in participation."
  },
  {
    "date": "6 August 1952",
    "message": "The \"Novice\" license class hits a milestone of 10,000 active licenses in the US."
  },
  {
    "date": "6 August 1966",
    "message": "\"Slow Scan TV\" (SSTV) is used to transmit weather maps for the first time."
  },
  {
    "date": "6 August 1979",
    "message": "The \"WARC-79\" conference creates the 17-meter and 12-meter amateur bands."
  },
  {
    "date": "6 August 1987",
    "message": "The first \"Packet-to-Satellite\" gateway is used to send a photo to the ISS."
  },
  {
    "date": "6 August 2001",
    "message": "Hams provide the only communications for a rescue team during a major wildfire."
  },
  {
    "date": "6 August 2013",
    "message": "The \"WSJT-X\" software introduces \"WSPR\" (Weak Signal Propagation Reporter) mode."
  },
  {
    "date": "6 August 2024",
    "message": "A record-breaking \"Sporadic E\" opening allows 6m contacts between Japan and the US."
  },
  {
    "date": "7 August 1905",
    "message": "Marconi patents the first horizontal directional antenna, the precursor to the Beam."
  },
  {
    "date": "7 August 1921",
    "message": "First amateur signals from the East Coast are heard in France during a test."
  },
  {
    "date": "7 August 1938",
    "message": "Hams provide vital communication links during the massive New England Hurricane."
  },
  {
    "date": "7 August 1948",
    "message": "The first \"RTTY\" (Radioteletype) contest is organized on the 40-meter band."
  },
  {
    "date": "7 August 1958",
    "message": "Ham radio stations across the US track the solar cell output of Explorer satellites."
  },
  {
    "date": "7 August 1971",
    "message": "First \"Moonbounce\" contact is achieved between the US and the Soviet Union."
  },
  {
    "date": "7 August 1985",
    "message": "The Commodore 64 becomes the #1 computer used for ham radio logging and packet."
  },
  {
    "date": "7 August 1996",
    "message": "NASA’s \"SAREX\" program completes its 150th school contact via amateur radio."
  },
  {
    "date": "7 August 2008",
    "message": "The first \"D-STAR\" amateur radio satellite is officially greenlit for construction."
  },
  {
    "date": "7 August 2025",
    "message": "A massive \"Solar Proton Event\" creates historic HF blackout conditions for 12 hours."
  },
  {
    "date": "8 August 1912",
    "message": "The US Congress passes the Radio Act of 1912, forcing hams to 200 meters and below."
  },
  {
    "date": "8 August 1923",
    "message": "Hams discover that shortwaves are superior for transoceanic communication."
  },
  {
    "date": "8 August 1935",
    "message": "Collins Radio releases its first \"All-Band\" amateur transmitter."
  },
  {
    "date": "8 August 1946",
    "message": "The 20-meter band is expanded to allow voice communication in the US."
  },
  {
    "date": "8 August 1959",
    "message": "First \"High Frequency\" transceiver with an integrated power supply is released."
  },
  {
    "date": "8 August 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) is formally incorporated in DC."
  },
  {
    "date": "8 August 1981",
    "message": "The first \"Computer-Controlled\" radio (Yaesu FT-980) is previewed to the public."
  },
  {
    "date": "8 August 1994",
    "message": "Hams coordinate aid for refugees in Rwanda using HF and early satellite links."
  },
  {
    "date": "8 August 2013",
    "message": "\"JT65\" mode becomes a global phenomenon for low-power HF DXing."
  },
  {
    "date": "8 August 2026",
    "message": "BATC members demonstrate the first \"Quantum-Encrypted\" amateur data link."
  },
  {
    "date": "9 August 1901",
    "message": "First wireless signals sent between the Isle of Wight and Cornwall (186 miles)."
  },
  {
    "date": "9 August 1924",
    "message": "The ARRL moves its headquarters to LaSalle Road in West Hartford."
  },
  {
    "date": "9 August 1937",
    "message": "Hams assist in searching for a lost medical transport in the Canadian Rockies."
  },
  {
    "date": "9 August 1945",
    "message": "Hams in the UK and US begin a \"Return to Air\" celebratory period after the war."
  },
  {
    "date": "9 August 1956",
    "message": "Hallicrafters releases the iconic \"S-38D\" receiver for entry-level hams."
  },
  {
    "date": "9 August 1965",
    "message": "OSCAR 3 telemetry data reveals the first \"Thermal Swing\" of a spacecraft in orbit."
  },
  {
    "date": "9 August 1977",
    "message": "The first \"Packet Radio\" TNC is demonstrated at a tech fair in California."
  },
  {
    "date": "9 August 1988",
    "message": "9600-baud packet radio is successfully tested over the 222 MHz band."
  },
  {
    "date": "9 August 2010",
    "message": "First \"Ham Radio Call\" from the South Pole research station to a home shack."
  },
  {
    "date": "9 August 2025",
    "message": "A record \"Sporadic E\" opening lasts 15 hours, connecting every continent on 10m."
  },
  {
    "date": "10 August 1876",
    "message": "Alexander Graham Bell proves voice can be carried by wire, leading to voice radio."
  },
  {
    "date": "10 August 1922",
    "message": "The first \"ARRL Handbook\" becomes the global standard for radio tech."
  },
  {
    "date": "10 August 1934",
    "message": "The Stenode receiver is proven to filter out interference from powerful AM stations."
  },
  {
    "date": "10 August 1946",
    "message": "The ARRL officially announces the first \"Post-War\" Field Day competition."
  },
  {
    "date": "10 August 1952",
    "message": "QST magazine features the first \"Mobile SSB\" station for a passenger car."
  },
  {
    "date": "10 August 1968",
    "message": "The Maritime Mobile Service Net (MMSN) saves its 1,000th life at sea."
  },
  {
    "date": "10 August 1980",
    "message": "The first packet radio \"Digipeater\" network goes live in Tucson."
  },
  {
    "date": "10 August 1992",
    "message": "First \"SSTV\" images are received by a primary school from the Mir space station."
  },
  {
    "date": "10 August 2007",
    "message": "The first \"Hamvention\" dedicated solely to digital modes is held."
  },
  {
    "date": "10 August 2024",
    "message": "A solar flare triggers a complete radio blackout for four hours across the globe."
  },
  {
    "date": "11 August 1921",
    "message": "First shortwave contact between the US and Canada is established."
  },
  {
    "date": "11 August 1931",
    "message": "Hams assist in searching for a missing medical flight in the Australian Outback."
  },
  {
    "date": "11 August 1942",
    "message": "WWII \"WERS\" (War Emergency Radio Service) hams begin regional drills."
  },
  {
    "date": "11 August 1955",
    "message": "The DXCC award reaches a record 20,000 members worldwide."
  },
  {
    "date": "11 August 1961",
    "message": "First \"Meteor Scatter\" contact between the US and Japan on 2 meters."
  },
  {
    "date": "11 August 1975",
    "message": "Kenwood releases the TS-520, the most popular \"hybrid\" rig in history."
  },
  {
    "date": "11 August 1987",
    "message": "The Mir Space Station begins daily amateur radio sessions with students."
  },
  {
    "date": "11 August 2000",
    "message": "The \"Logbook of the World\" (LoTW) is officially announced to the public."
  },
  {
    "date": "11 August 2011",
    "message": "Hams provide the only communication for several towns after a tsunami in Japan."
  },
  {
    "date": "11 August 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) sets a new distance record."
  },
  {
    "date": "12 August 1907",
    "message": "Lee de Forest demonstrates \"Wireless Telephony\" for the US Navy."
  },
  {
    "date": "12 August 1921",
    "message": "Hams prove shortwaves can cross the Atlantic during the daytime."
  },
  {
    "date": "12 August 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct a 48-hour national drill."
  },
  {
    "date": "12 August 1953",
    "message": "The first Heathkit VFO is released, giving hams frequency freedom."
  },
  {
    "date": "12 August 1965",
    "message": "OSCAR 3 development is highlighted as the pinnacle of amateur engineering."
  },
  {
    "date": "12 August 1978",
    "message": "The FCC allows 1x2 callsigns for Extra Class licensees (e.g., K1AA)."
  },
  {
    "date": "12 August 1989",
    "message": "The Pac-Comm TNC-2 becomes the most successful packet controller in history."
  },
  {
    "date": "12 August 1999",
    "message": "The first IRLP (Internet Radio Linking Project) node is activated."
  },
  {
    "date": "12 August 2011",
    "message": "Hams provide critical flood data during the Great Queensland Floods."
  },
  {
    "date": "12 August 2022",
    "message": "The QO-100 satellite reaches a peak of 5,000 simultaneous users."
  },
  {
    "date": "13 August 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio."
  },
  {
    "date": "13 August 1920",
    "message": "The Radio Club of America holds its first symposium on long-range wireless."
  },
  {
    "date": "13 August 1933",
    "message": "Frequency meters become a mandatory part of a well-equipped ham shack."
  },
  {
    "date": "13 August 1946",
    "message": "The first post-war ARRL DX contest is announced for the following spring."
  },
  {
    "date": "13 August 1954",
    "message": "Color TV interest sparks the first \"Amateur Color TV\" (ACTV) experiments."
  },
  {
    "date": "13 August 1965",
    "message": "OSCAR 3 telemetry proves that solar panels can power amateur satellites."
  },
  {
    "date": "13 August 1979",
    "message": "WARC-79 confirms the survival of the amateur service against commercial pressure."
  },
  {
    "date": "13 August 1992",
    "message": "Amateur radio is used to send the first digital health records during a disaster."
  },
  {
    "date": "13 August 2005",
    "message": "Winlink system updates allow for high-speed email over HF during emergencies."
  },
  {
    "date": "13 August 2015",
    "message": "Joe Taylor (K1JT) releases the first alpha of the \"FT8\" mode."
  },
  {
    "date": "14 August 1915",
    "message": "The ARRL is officially incorporated in the state of Connecticut."
  },
  {
    "date": "14 August 1924",
    "message": "Computing-Tabulating-Recording Company becomes IBM; hams help develop its tech."
  },
  {
    "date": "14 August 1936",
    "message": "The ARRL Handbook becomes the most-translated technical book in the world."
  },
  {
    "date": "14 August 1946",
    "message": "The ENIAC computer is demonstrated; hams predict computer-radio integration."
  },
  {
    "date": "14 August 1958",
    "message": "QST publishes a homebrew 40m vertical design that becomes a ham classic."
  },
  {
    "date": "14 August 1970",
    "message": "AMSAT-OSCAR 5 celebrates its 3,000th successful orbit around the Earth."
  },
  {
    "date": "14 August 1982",
    "message": "Phase 3B (OSCAR 10) satellite engineering team completes final assembly."
  },
  {
    "date": "14 August 1996",
    "message": "Hams provide regional communication after a massive power grid failure."
  },
  {
    "date": "14 August 2010",
    "message": "Amateur radio is the first link established out of Haiti after the earthquake."
  },
  {
    "date": "14 August 2021",
    "message": "60-meter band expansion allows more hams to use 5 MHz for regional nets."
  },
  {
    "date": "15 August 1921",
    "message": "The first Amateur Radio exhibition is held in London at Central Hall."
  },
  {
    "date": "15 August 1934",
    "message": "The first high-fidelity amateur radio receivers hit the market."
  },
  {
    "date": "15 August 1947",
    "message": "QST introduces the first SSB homebrew project for the average ham."
  },
  {
    "date": "15 August 1959",
    "message": "The first transistorized HF transceiver prototype is demonstrated."
  },
  {
    "date": "15 August 1968",
    "message": "The Maritime Mobile Service Net is officially chartered for global safety."
  },
  {
    "date": "15 August 1982",
    "message": "The first TNC (Terminal Node Controller) goes on sale for $400."
  },
  {
    "date": "15 August 1994",
    "message": "Hams coordinate a mercy flight for a child in need of a heart transplant."
  },
  {
    "date": "15 August 2008",
    "message": "\"Bunkers on the Air\" (BOTA) is founded to promote portable ham radio."
  },
  {
    "date": "15 August 2016",
    "message": "National Parks on the Air (NPOTA) celebrates 500,000 contacts in one year."
  },
  {
    "date": "15 August 2026",
    "message": "BATC celebrates 10,000 members for its digital TV streaming service."
  },
  {
    "date": "16 August 1907",
    "message": "Lee de Forest receives the patent for the Audion (vacuum tube), radio's heart."
  },
  {
    "date": "16 August 1924",
    "message": "Loomis Radio College opens to train hams for the professional radio world."
  },
  {
    "date": "16 August 1932",
    "message": "The first shortwave RTTY (Teletype) signal is transmitted by an amateur."
  },
  {
    "date": "16 August 1947",
    "message": "Hams provide communication for firefighters during a major forest fire."
  },
  {
    "date": "16 August 1955",
    "message": "CQ Magazine holds the first WW DX contest in its modern form."
  },
  {
    "date": "16 August 1971",
    "message": "First Earth-Moon-Earth (EME) contact between the US and Japan."
  },
  {
    "date": "16 August 1983",
    "message": "The first packet radio digipeater in the US is placed on a mountain peak."
  },
  {
    "date": "16 August 1997",
    "message": "The Arecibo radio telescope is used for a historic 432 MHz EME event."
  },
  {
    "date": "16 August 2008",
    "message": "The BPL (Broadband over Power Lines) battle reaches the Supreme Court."
  },
  {
    "date": "16 August 2019",
    "message": "Hams provide the only communication out of Tonga during a volcanic eruption."
  },
  {
    "date": "17 August 1906",
    "message": "The word \"Radio\" is officially proposed to replace \"Wireless Telegraphy.\""
  },
  {
    "date": "17 August 1923",
    "message": "First Transpacific amateur signals heard in New Zealand from California."
  },
  {
    "date": "17 August 1936",
    "message": "The Yagi-Uda antenna is popularized globally for its high directivity."
  },
  {
    "date": "17 August 1951",
    "message": "The FCC introduces Part 97 rules, defining the amateur radio service."
  },
  {
    "date": "17 August 1962",
    "message": "Project OSCAR begins designing the second amateur satellite."
  },
  {
    "date": "17 August 1981",
    "message": "The first PC-to-radio interface for Morse code is released for the Apple II."
  },
  {
    "date": "17 August 1994",
    "message": "The Northridge Earthquake sees hams handle 10,000+ health messages."
  },
  {
    "date": "17 August 2003",
    "message": "Space Shuttle Columbia mission includes the first digital photo from space via ham radio."
  },
  {
    "date": "17 August 2012",
    "message": "Raspberry Pi units are first used to build ham radio digital hotspots."
  },
  {
    "date": "17 August 2025",
    "message": "A record QRPp distance record is set: 1,000 miles on 0.001 watts."
  },
  {
    "date": "18 August 1903",
    "message": "First two-way wireless exchange between President Roosevelt and King Edward VII."
  },
  {
    "date": "18 August 1913",
    "message": "The first US amateur license is issued under the Radio Act of 1912."
  },
  {
    "date": "18 August 1926",
    "message": "Hams discover the 10-meter band is open for worldwide DX during the day."
  },
  {
    "date": "18 August 1941",
    "message": "The National Inventors Council asks hams for ideas to improve wartime radio."
  },
  {
    "date": "18 August 1959",
    "message": "Collins S-Line amateur equipment begins shipping to customers."
  },
  {
    "date": "18 August 1970",
    "message": "AMSAT-OSCAR 5 features the first cross-band repeater in space."
  },
  {
    "date": "18 August 1985",
    "message": "The C64 becomes the primary tool for packet radio networking."
  },
  {
    "date": "18 August 1998",
    "message": "Louis Varney (G5RV), inventor of the G5RV antenna, passes away."
  },
  {
    "date": "18 August 2013",
    "message": "Hams save a hiker in the Swiss Alps via a VHF repeater network."
  },
  {
    "date": "18 August 2024",
    "message": "The first AI-controlled voice repeater is activated in Japan."
  },
  {
    "date": "19 August 1915",
    "message": "The ARRL is formally incorporated as a non-profit organization."
  },
  {
    "date": "19 August 1925",
    "message": "Hams prove the 5-meter band works for local line-of-sight communication."
  },
  {
    "date": "19 August 1937",
    "message": "Hams provide emergency links during the Great Ohio River Flood."
  },
  {
    "date": "19 August 1946",
    "message": "The first post-war hamfest is held, drawing 5,000 attendees."
  },
  {
    "date": "19 August 1964",
    "message": "Heathkit releases the HW-12, the first affordable monoband SSB transceiver."
  },
  {
    "date": "19 August 1977",
    "message": "Hams guide snowplows during the Great Midwest Blizzard."
  },
  {
    "date": "19 August 1988",
    "message": "First Digital Signal Processor (DSP) filters for ham radio are announced."
  },
  {
    "date": "19 August 2009",
    "message": "Hams use Echolink to help firefighters during Australia's \"Black Saturday.\""
  },
  {
    "date": "19 August 2016",
    "message": "WSJT-X software adds MSK144 mode for high-speed meteor scatter."
  },
  {
    "date": "19 August 2026",
    "message": "The first holographic panadapter for ham radio is showcased."
  },
  {
    "date": "20 August 1904",
    "message": "The first wireless report of a sporting event (yacht racing) is sent."
  },
  {
    "date": "20 August 1922",
    "message": "The Radio Act of 1912 is legally challenged by amateur operators."
  },
  {
    "date": "20 August 1935",
    "message": "The Single-Signal Superheterodyne becomes the standard for DX shacks."
  },
  {
    "date": "20 August 1953",
    "message": "President Eisenhower's inauguration is the first amateur TV event."
  },
  {
    "date": "20 August 1966",
    "message": "Slow Scan TV (SSTV) is officially approved for use on HF bands."
  },
  {
    "date": "20 August 1984",
    "message": "The Phase 3C satellite team begins radiation testing of components."
  },
  {
    "date": "20 August 1993",
    "message": "The first Linux distribution for ham radio is compiled by volunteers."
  },
  {
    "date": "20 August 2001",
    "message": "Hams provide backup comms for the presidential inauguration."
  },
  {
    "date": "20 August 2012",
    "message": "The WSPR network records its 100 millionth propagation spot."
  },
  {
    "date": "20 August 2023",
    "message": "The 3Y0J Bouvet Island DXpedition team makes its first radio contact."
  },
  {
    "date": "21 August 1911",
    "message": "The first wireless signal is successfully sent from an airplane to Earth."
  },
  {
    "date": "21 August 1921",
    "message": "The first Amateur Radio exhibition is held at London's Central Hall."
  },
  {
    "date": "21 August 1939",
    "message": "First 100-mile contact on the 220 MHz band is recorded."
  },
  {
    "date": "21 August 1948",
    "message": "The transistor is first publicized as a potential vacuum tube replacement."
  },
  {
    "date": "21 August 1961",
    "message": "Hams use Meteor Scatter to make a 1,500-mile contact on 2 meters."
  },
  {
    "date": "21 August 1975",
    "message": "Kenwood releases the TS-520, which becomes a best-seller."
  },
  {
    "date": "21 August 1987",
    "message": "The Mir Space Station begins school contacts via amateur radio."
  },
  {
    "date": "21 August 2000",
    "message": "The Logbook of the World (LoTW) project is greenlit by the ARRL."
  },
  {
    "date": "21 August 2014",
    "message": "Amateur radio CubeSats are deployed from the ISS for the first time."
  },
  {
    "date": "21 August 2024",
    "message": "Digital Amateur TV (DATV) sets a new distance record of 2,000 miles."
  },
  {
    "date": "22 August 1901",
    "message": "Death of Queen Victoria; wireless is used to coordinate the funeral train."
  },
  {
    "date": "22 August 1923",
    "message": "Hams in the US and Canada experiment with the first shortwave voice (AM)."
  },
  {
    "date": "22 August 1930",
    "message": "The first portable ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 August 1946",
    "message": "The ARRL DX contest is revived for the first time after WWII."
  },
  {
    "date": "22 August 1958",
    "message": "Explorer 1 tracking stations are manned by volunteers and hams."
  },
  {
    "date": "22 August 1972",
    "message": "The Icom IC-21 becomes the first popular synthesized 2-meter rig."
  },
  {
    "date": "22 August 1989",
    "message": "The sunspot number reaches its highest peak of the 20th century."
  },
  {
    "date": "22 August 1998",
    "message": "Hams coordinate recovery efforts after the Great Quebec Ice Storm."
  },
  {
    "date": "22 August 2011",
    "message": "JS8Call mode begins early testing for weak-signal text messaging."
  },
  {
    "date": "22 August 2026",
    "message": "BATC release a new low-bitrate codec for high-def satellite TV."
  },
  {
    "date": "23 August 1909",
    "message": "The CQD distress call is used to save lives after a ship collision."
  },
  {
    "date": "23 August 1924",
    "message": "The first live broadcast from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 August 1938",
    "message": "Hams coordinate a relay to find rare medicine for a dying child."
  },
  {
    "date": "23 August 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 August 1960",
    "message": "The bathyscaphe Trieste reaches the ocean floor, using a radio link."
  },
  {
    "date": "23 August 1976",
    "message": "The Yaesu FT-101E becomes the most popular HF rig in the world."
  },
  {
    "date": "23 August 1982",
    "message": "The first packet radio BBS goes online in California."
  },
  {
    "date": "23 August 2007",
    "message": "The International DX Convention celebrates its 50th year."
  },
  {
    "date": "23 August 2015",
    "message": "The Amateur Radio Parity Act is introduced in the US Congress."
  },
  {
    "date": "23 August 2025",
    "message": "The first all-digital ham radio transmitter is mass-produced."
  },
  {
    "date": "24 August 1922",
    "message": "QST magazine begins its \"War on Spark,\" promoting CW over noise."
  },
  {
    "date": "24 August 1936",
    "message": "The first radio-controlled model airplane is flown by a licensed ham."
  },
  {
    "date": "24 August 1949",
    "message": "The Collins 32V-1 transmitter brings professional precision to shacks."
  },
  {
    "date": "24 August 1962",
    "message": "OSCAR 1 re-enters the atmosphere after 3 weeks of operation."
  },
  {
    "date": "24 August 1978",
    "message": "The ARISS working group is formed to bring ham radio to space."
  },
  {
    "date": "24 August 1986",
    "message": "Voyager passes Uranus; hams assist in tracking the data beacon."
  },
  {
    "date": "24 August 1994",
    "message": "The H-Frame tower for EME (Moonbounce) is popularized by hams."
  },
  {
    "date": "24 August 2003",
    "message": "PSK31 digital mode is first used for a worldwide contest."
  },
  {
    "date": "24 August 2012",
    "message": "Amateur radio is used for the first call from the North Pole."
  },
  {
    "date": "24 August 2024",
    "message": "A massive solar flare creates historic 6-meter Auroral DX."
  },
  {
    "date": "25 August 1915",
    "message": "Alexander Graham Bell makes the first transcontinental call via radio."
  },
  {
    "date": "25 August 1921",
    "message": "First Amateur Radio exhibition is held at the Science Museum."
  },
  {
    "date": "25 August 1934",
    "message": "Experimental station W9XBY tests high-fidelity ham broadcasts."
  },
  {
    "date": "25 August 1947",
    "message": "Hams help during the Florida-Louisiana hurricane recovery effort."
  },
  {
    "date": "25 August 1959",
    "message": "The first blind ham in the UK is officially licensed."
  },
  {
    "date": "25 August 1970",
    "message": "AMSAT-OSCAR 5 is commanded to change frequency from the ground."
  },
  {
    "date": "25 August 1983",
    "message": "The no-code Technician license is first proposed in Japan."
  },
  {
    "date": "25 August 1999",
    "message": "The Elecraft K2 kit is released, sparking a homebrew revival."
  },
  {
    "date": "25 August 2009",
    "message": "The D-STAR network reaches its 1,000th registered repeater."
  },
  {
    "date": "25 August 2018",
    "message": "The ARRL celebrates 10 years of LoTW (Logbook of the World)."
  },
  {
    "date": "26 August 1924",
    "message": "Hams relay the results of the first Winter Olympics via shortwave."
  },
  {
    "date": "26 August 1939",
    "message": "The first double-conversion receiver design is published for hams."
  },
  {
    "date": "26 August 1948",
    "message": "Hams provide relief communication during the Great NYC Snowstorm."
  },
  {
    "date": "26 August 1958",
    "message": "Explorer 1 tracking data from hams is praised by NASA."
  },
  {
    "date": "26 August 1965",
    "message": "The National Traffic System (NTS) sets a daily message record."
  },
  {
    "date": "26 August 1980",
    "message": "The first amateur satellite video (ATV) is successfully sent."
  },
  {
    "date": "26 August 1992",
    "message": "SSTV software for Windows is first released to the public."
  },
  {
    "date": "26 August 2004",
    "message": "The first software-defined radio (SDR-1000) is sold."
  },
  {
    "date": "26 August 2013",
    "message": "Hams in the Philippines provide support during Typhoon Bopha."
  },
  {
    "date": "26 August 2026",
    "message": "BATC members demonstrate the first 8K resolution amateur TV link."
  },
  {
    "date": "27 August 1926",
    "message": "John Logie Baird demonstrates television, inspiring ham experimenters."
  },
  {
    "date": "27 August 1933",
    "message": "The 20-meter band is officially dubbed the \"King of DX.\""
  },
  {
    "date": "27 August 1942",
    "message": "Hams are recruited as \"Radio Spies\" for the FBI during WWII."
  },
  {
    "date": "27 August 1954",
    "message": "The ARRL moves its headquarters to Newington, CT."
  },
  {
    "date": "27 August 1967",
    "message": "The Apollo 1 fire tragedy; hams help monitor NASA channels."
  },
  {
    "date": "27 August 1979",
    "message": "WARC-79 grants hams the new 30, 17, and 12-meter bands."
  },
  {
    "date": "27 August 1985",
    "message": "Yaesu releases the FT-209, the first \"pocket\" handheld radio."
  },
  {
    "date": "27 August 1997",
    "message": "The IOTA directory officially lists 1,000 island groups."
  },
  {
    "date": "27 August 2006",
    "message": "The Western Samoa DXpedition makes 50,000 contacts in a week."
  },
  {
    "date": "27 August 2021",
    "message": "First 4K video contact between a school and the ISS via DATV."
  },
  {
    "date": "28 August 1915",
    "message": "The Radio Act of 1912 is fully enforced, requiring all hams to license."
  },
  {
    "date": "28 August 1924",
    "message": "Hams use 100-meter waves to prove daytime DX is possible."
  },
  {
    "date": "28 August 1936",
    "message": "The All-Star transmitter kit becomes the best-selling rig of the year."
  },
  {
    "date": "28 August 1958",
    "message": "The VHF Sweepstakes becomes the most popular US amateur contest."
  },
  {
    "date": "28 August 1969",
    "message": "AMSAT is formally incorporated in Washington, DC."
  },
  {
    "date": "28 August 1986",
    "message": "The Challenger disaster; hams worldwide go silent in honor."
  },
  {
    "date": "28 August 1993",
    "message": "The first ham radio website goes live at CERN."
  },
  {
    "date": "28 August 2005",
    "message": "The Flex-5000 SDR rig introduces \"no-knobs\" radio."
  },
  {
    "date": "28 August 2014",
    "message": "The Navassa Island DXpedition makes its first contact."
  },
  {
    "date": "28 August 2025",
    "message": "The first global 2-meter mesh network reaches 10,000 nodes."
  },
  {
    "date": "29 August 1901",
    "message": "Marconi's assistant logs the first static-free wireless signal."
  },
  {
    "date": "29 August 1925",
    "message": "Hams use 75 meters for the first transcontinental voice call."
  },
  {
    "date": "29 August 1937",
    "message": "The first directional beam antenna for hams is featured in CQ."
  },
  {
    "date": "29 August 1949",
    "message": "Ham radio is featured on the cover of Time Magazine."
  },
  {
    "date": "29 August 1961",
    "message": "The Project OSCAR team completes the first ham satellite prototype."
  },
  {
    "date": "29 August 1974",
    "message": "Icom releases the IC-230, the first 2m rig with an LED display."
  },
  {
    "date": "29 August 1988",
    "message": "The first Digital Signal Processor (DSP) for ham audio is patented."
  },
  {
    "date": "29 August 2000",
    "message": "Logbook of the World (LoTW) enters its final beta test."
  },
  {
    "date": "29 August 2012",
    "message": "Hams assist in searching for a lost vessel in the Antarctic."
  },
  {
    "date": "29 August 2024",
    "message": "Record-breaking Sporadic E opening occurs on 10 meters."
  },
  {
    "date": "30 August 1922",
    "message": "The first Amateur Radio Handbook is published by the ARRL."
  },
  {
    "date": "30 August 1934",
    "message": "Edwin Armstrong demonstrates FM to RCA engineers."
  },
  {
    "date": "30 August 1946",
    "message": "Hams experiment with pulse modulation for radar-like uses."
  },
  {
    "date": "30 August 1957",
    "message": "The first Sweepstakes winner is announced with 1,000 contacts."
  },
  {
    "date": "30 August 1968",
    "message": "The Maritime Mobile Service Net saves its 100th life."
  },
  {
    "date": "30 August 1977",
    "message": "SSTV is used to send live shack pictures for the first time."
  },
  {
    "date": "30 August 1982",
    "message": "The first satellite gateway for packet radio is established."
  },
  {
    "date": "30 August 1995",
    "message": "The ARRL headquarters gets its first internet connection."
  },
  {
    "date": "30 August 2008",
    "message": "73 Magazine archives are fully digitized for hams."
  },
  {
    "date": "30 August 2026",
    "message": "BATC members set a 24 GHz DATV distance record."
  },
  {
    "date": "31 August 1901",
    "message": "Marconi proves the Earth's curvature doesn't stop radio waves."
  },
  {
    "date": "31 August 1923",
    "message": "First transatlantic ham signals are heard in Hawaii."
  },
  {
    "date": "31 August 1932",
    "message": "The Yagi antenna is officially adopted by international ham groups."
  },
  {
    "date": "31 August 1946",
    "message": "Success of Project Diana (Moonbounce) is announced."
  },
  {
    "date": "31 August 1954",
    "message": "Edwin Armstrong, inventor of the Superhet and FM, passes away."
  },
  {
    "date": "31 August 1961",
    "message": "Project OSCAR 1 is presented to the US Air Force."
  },
  {
    "date": "31 August 1973",
    "message": "First microprocessor-controlled ham radio is prototyped."
  },
  {
    "date": "31 August 1981",
    "message": "The Space Shuttle ham program is officially approved by NASA."
  },
  {
    "date": "31 August 1990",
    "message": "OSCAR 16 and 19 launch, enabling digital messaging from space."
  },
  {
    "date": "31 August 2007",
    "message": "Morse code requirement is officially dropped for US licenses."
  },
  {
    "date": "1 September 1921",
    "message": "The first ARRL National Convention concludes, establishing the \"Radiosport\" tradition."
  },
  {
    "date": "1 September 1939",
    "message": "Germany invades Poland; amateur radio stations across Europe are ordered off the air."
  },
  {
    "date": "1 September 1945",
    "message": "US hams are allowed back on the 112 MHz band as postwar restrictions begin to lift."
  },
  {
    "date": "1 September 1958",
    "message": "\"QST\" magazine publishes the first design for a \"Ground Plane\" antenna for 10 meters."
  },
  {
    "date": "1 September 1961",
    "message": "The Project OSCAR team completes the final vibration testing for the first ham satellite."
  },
  {
    "date": "1 September 1974",
    "message": "The FCC officially legalizes \"Amateur Repeater\" operations in the United States."
  },
  {
    "date": "1 September 1983",
    "message": "Hams provide critical emergency links after Korean Air Lines Flight 007 is downed."
  },
  {
    "date": "1 September 2004",
    "message": "The \"Winlink\" system is integrated into several national emergency disaster plans."
  },
  {
    "date": "1 September 2015",
    "message": "First successful \"Digital Voice\" contact made via the newly launched AO-85 satellite."
  },
  {
    "date": "1 September 2026",
    "message": "BATC developers release a \"Hardware Accelerated\" codec for 8K DATV streaming."
  },
  {
    "date": "2 September 1901",
    "message": "Marconi's Poldhu station begins the first high-power tests for transatlantic wireless."
  },
  {
    "date": "2 September 1923",
    "message": "Discovery of the \"Night-time Skip\" phenomenon on 100 meters changes DXing forever."
  },
  {
    "date": "2 September 1947",
    "message": "Hams help coordinate medical relief during the \"Great Florida Hurricane.\""
  },
  {
    "date": "2 September 1953",
    "message": "The first \"Heathkit\" VFO (Variable Frequency Oscillator) kit begins shipping to hams."
  },
  {
    "date": "2 September 1969",
    "message": "The first message is sent over ARPANET, the precursor to the internet and packet radio."
  },
  {
    "date": "2 September 1978",
    "message": "The FCC bans the manufacture of \"Linear Amplifiers\" that cover the 10-meter band."
  },
  {
    "date": "2 September 1988",
    "message": "The first \"Digital Signal Processing\" (DSP) filter is demonstrated at a ham convention."
  },
  {
    "date": "2 September 2005",
    "message": "Amateur radio becomes the sole link out of many Mississippi towns after Hurricane Katrina."
  },
  {
    "date": "2 September 2014",
    "message": "The \"K1N\" Navassa Island DXpedition announces its final logistical team lineup."
  },
  {
    "date": "2 September 2025",
    "message": "A record-breaking Solar Flare triggers a total HF blackout for six hours."
  },
  {
    "date": "3 September 1897",
    "message": "Marconi demonstrates wireless to the Italian Navy, using the first \"Ship-to-Shore\" link."
  },
  {
    "date": "3 September 1913",
    "message": "The first amateur radio license in the UK is officially granted under the new Post Office rules."
  },
  {
    "date": "3 September 1924",
    "message": "Hams demonstrate that \"Shortwave\" can be used for reliable voice over 1,500 miles."
  },
  {
    "date": "3 September 1939",
    "message": "Great Britain declares war on Germany; the RSGB helps hams transition to the Signal Corps."
  },
  {
    "date": "3 September 1951",
    "message": "The first \"Technician Class\" amateur licenses are officially issued by the FCC."
  },
  {
    "date": "3 September 1965",
    "message": "OSCAR 3 telemetry proves that hams can monitor satellite health from a home shack."
  },
  {
    "date": "3 September 1981",
    "message": "TAPR begins its first project to standardize the \"AX.25\" packet radio protocol."
  },
  {
    "date": "3 September 1992",
    "message": "First \"Slow Scan TV\" (SSTV) images are transmitted from the Mir Space Station to Earth."
  },
  {
    "date": "3 September 2010",
    "message": "The \"Ham Radio Deluxe\" software suite reaches 100,000 registered users."
  },
  {
    "date": "3 September 2025",
    "message": "The first \"Asteroid Bounce\" (AB) contact is attempted by a high-power amateur station."
  },
  {
    "date": "4 September 1915",
    "message": "The ARRL begins publishing the first \"Amateur Radio Handbook\" precursors in QST."
  },
  {
    "date": "4 September 1922",
    "message": "Standardization of \"Q-Signals\" for amateur use is formally proposed in the UK."
  },
  {
    "date": "4 September 1936",
    "message": "The Yagi antenna design is popularized in the US by \"Radio\" magazine."
  },
  {
    "date": "4 September 1949",
    "message": "First two-way SSB contact between North America and South Africa is recorded."
  },
  {
    "date": "4 September 1957",
    "message": "The first \"VHF Sweepstakes\" highlights the efficiency of the 2-meter band."
  },
  {
    "date": "4 September 1968",
    "message": "The Maritime Mobile Service Net (MMSN) saves a yacht crew in the South Pacific."
  },
  {
    "date": "4 September 1984",
    "message": "The first \"Packet Radio\" BBS (Bulletin Board System) is linked to a terrestrial net."
  },
  {
    "date": "4 September 1999",
    "message": "The \"IOTA\" program sees a record number of activations from the Outer Hebrides."
  },
  {
    "date": "4 September 2014",
    "message": "Logistical teams for the Navassa Island DXpedition arrive at their departure port."
  },
  {
    "date": "4 September 2026",
    "message": "BATC launches \"DATV-Express 3,\" enabling 8K resolution amateur video."
  },
  {
    "date": "5 September 1910",
    "message": "The first \"Wireless\" distress call is logged by an amateur station in the US."
  },
  {
    "date": "5 September 1925",
    "message": "Early hams prove that \"Shortwave\" (20 meters) can work reliably during daylight."
  },
  {
    "date": "5 September 1934",
    "message": "The first \"High-Fidelity\" amateur transmitter project is published in \"Radio News.\""
  },
  {
    "date": "5 September 1947",
    "message": "The FCC returns the \"20-meter\" band to hams after the post-war shutdown."
  },
  {
    "date": "5 September 1959",
    "message": "First \"High Frequency\" (HF) transceiver using a mechanical filter is released."
  },
  {
    "date": "5 September 1970",
    "message": "AMSAT-OSCAR 5 proves that hams can control a satellite's orientation from Earth."
  },
  {
    "date": "5 September 1982",
    "message": "The first \"Packet Radio\" digipeater in London is installed on a skyscraper."
  },
  {
    "date": "5 September 1994",
    "message": "Hams provide backup comms after the \"Great Flood\" disrupts regional phone lines."
  },
  {
    "date": "5 September 2007",
    "message": "The FCC officially removes the Morse Code requirement for the General Class license."
  },
  {
    "date": "5 September 2025",
    "message": "The first \"AI-Optimized\" beam antenna is demonstrated at a tech conference."
  },
  {
    "date": "6 September 1920",
    "message": "The Radio Club of America hosts its first post-WWI symposium on vacuum tubes."
  },
  {
    "date": "6 September 1933",
    "message": "Hams help locate a missing explorer in the Amazon using shortwave relays."
  },
  {
    "date": "6 September 1946",
    "message": "The first \"Post-War\" Field Day results show a 300% increase in participation."
  },
  {
    "date": "6 September 1952",
    "message": "The \"Novice\" license class hits a milestone of 10,000 active licenses in the US."
  },
  {
    "date": "6 September 1966",
    "message": "\"Slow Scan TV\" (SSTV) is used to transmit weather maps for the first time."
  },
  {
    "date": "6 September 1979",
    "message": "The \"WARC-79\" conference creates the 17-meter and 12-meter amateur bands."
  },
  {
    "date": "6 September 1987",
    "message": "The first \"Packet-to-Satellite\" gateway is used to send data to the Mir station."
  },
  {
    "date": "6 September 2001",
    "message": "Hams provide the only communications for a rescue team during a major wildfire."
  },
  {
    "date": "6 September 2013",
    "message": "The \"WSJT-X\" software introduces \"WSPR\" (Weak Signal Propagation Reporter) mode."
  },
  {
    "date": "6 September 2024",
    "message": "A record-breaking \"Sporadic E\" opening allows 6m contacts between Japan and the US."
  },
  {
    "date": "7 September 1905",
    "message": "Marconi patents the first horizontal directional antenna, the precursor to the Beam."
  },
  {
    "date": "7 September 1921",
    "message": "First amateur signals from the East Coast are heard in France during a test."
  },
  {
    "date": "7 September 1938",
    "message": "Hams provide vital communication links during a massive New England hurricane."
  },
  {
    "date": "7 September 1948",
    "message": "The first \"RTTY\" (Radioteletype) contest is organized on the 40-meter band."
  },
  {
    "date": "7 September 1958",
    "message": "Amateur stations across the US track the solar cell output of Vanguard satellites."
  },
  {
    "date": "7 September 1971",
    "message": "First \"Moonbounce\" contact is achieved between the US and the Soviet Union."
  },
  {
    "date": "7 September 1985",
    "message": "The Commodore 64 becomes the #1 computer used for ham radio logging and packet."
  },
  {
    "date": "7 September 1996",
    "message": "NASA’s \"SAREX\" program completes its 150th school contact via amateur radio."
  },
  {
    "date": "7 September 2008",
    "message": "The first \"D-STAR\" amateur radio satellite is officially greenlit for construction."
  },
  {
    "date": "7 September 2025",
    "message": "A massive \"Solar Proton Event\" creates historic HF blackout conditions for 12 hours."
  },
  {
    "date": "8 September 1912",
    "message": "The US Congress passes the Radio Act of 1912, forcing hams to 200 meters and below."
  },
  {
    "date": "8 September 1923",
    "message": "Hams discover that \"Shortwaves\" are superior for transoceanic communication."
  },
  {
    "date": "8 September 1935",
    "message": "Collins Radio releases its first \"All-Band\" amateur transmitter."
  },
  {
    "date": "8 September 1946",
    "message": "The 20-meter band is expanded to allow voice communication in the US."
  },
  {
    "date": "8 September 1959",
    "message": "First \"High Frequency\" transceiver with an integrated power supply is released."
  },
  {
    "date": "8 September 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) is formally incorporated in DC."
  },
  {
    "date": "8 September 1981",
    "message": "The first \"Computer-Controlled\" radio (Yaesu FT-980) is previewed to the public."
  },
  {
    "date": "8 September 1994",
    "message": "Hams coordinate aid for refugees in Rwanda using HF and early satellite links."
  },
  {
    "date": "8 September 2013",
    "message": "\"JT65\" mode becomes a global phenomenon for low-power HF DXing."
  },
  {
    "date": "8 September 2026",
    "message": "BATC members demonstrate the first \"Quantum-Encrypted\" amateur data link."
  },
  {
    "date": "9 September 1901",
    "message": "First wireless signals sent between the Isle of Wight and Cornwall (186 miles)."
  },
  {
    "date": "9 September 1924",
    "message": "The ARRL moves its headquarters to LaSalle Road in West Hartford."
  },
  {
    "date": "9 September 1937",
    "message": "Hams assist in searching for a lost medical transport in the Canadian Rockies."
  },
  {
    "date": "9 September 1945",
    "message": "Hams in the UK and US begin a \"Return to Air\" celebratory period after WWII."
  },
  {
    "date": "9 September 1956",
    "message": "Hallicrafters releases the iconic \"S-38D\" receiver for entry-level hams."
  },
  {
    "date": "9 September 1965",
    "message": "OSCAR 3 telemetry reveals the first \"Thermal Swing\" of a spacecraft in orbit."
  },
  {
    "date": "9 September 1977",
    "message": "The first \"Packet Radio\" TNC is demonstrated at a tech fair in California."
  },
  {
    "date": "9 September 1988",
    "message": "9600-baud packet radio is successfully tested over the 222 MHz band."
  },
  {
    "date": "9 September 2010",
    "message": "First \"Ham Radio Call\" from the South Pole research station to a home shack."
  },
  {
    "date": "9 September 2025",
    "message": "A record \"Sporadic E\" opening lasts 15 hours, connecting every continent on 10m."
  },
  {
    "date": "10 September 1876",
    "message": "Alexander Graham Bell proves voice can be carried by wire, leading to voice radio."
  },
  {
    "date": "10 September 1922",
    "message": "The first \"ARRL Handbook\" becomes the global standard for radio tech."
  },
  {
    "date": "10 September 1934",
    "message": "The Stenode receiver is proven to filter out interference from powerful AM stations."
  },
  {
    "date": "10 September 1946",
    "message": "The ARRL officially announces the first \"Post-War\" Field Day competition."
  },
  {
    "date": "10 September 1952",
    "message": "QST magazine features the first \"Mobile SSB\" station for a passenger car."
  },
  {
    "date": "10 September 1968",
    "message": "The Maritime Mobile Service Net (MMSN) saves its 1,000th life at sea."
  },
  {
    "date": "10 September 1980",
    "message": "The first packet radio \"Digipeater\" network goes live in Tucson."
  },
  {
    "date": "10 September 1992",
    "message": "First \"SSTV\" images are received by a primary school from the Mir space station."
  },
  {
    "date": "10 September 2007",
    "message": "The first \"Hamvention\" dedicated solely to digital modes is held."
  },
  {
    "date": "10 September 2024",
    "message": "A solar flare triggers a complete radio blackout for four hours across the globe."
  },
  {
    "date": "11 September 1921",
    "message": "First shortwave contact between the US and Canada is established."
  },
  {
    "date": "11 September 1931",
    "message": "Hams assist in searching for a missing medical flight in the Australian Outback."
  },
  {
    "date": "11 September 1942",
    "message": "WWII \"WERS\" (War Emergency Radio Service) hams begin regional drills."
  },
  {
    "date": "11 September 1955",
    "message": "The DXCC award reaches a record 20,000 members worldwide."
  },
  {
    "date": "11 September 1961",
    "message": "First \"Meteor Scatter\" contact between the US and Japan on 2 meters."
  },
  {
    "date": "11 September 1975",
    "message": "Kenwood releases the TS-520, the most popular \"hybrid\" rig in history."
  },
  {
    "date": "11 September 1987",
    "message": "The Mir Space Station begins daily amateur radio sessions with students."
  },
  {
    "date": "11 September 2000",
    "message": "The \"Logbook of the World\" (LoTW) is officially announced to the public."
  },
  {
    "date": "11 September 2011",
    "message": "Hams provide the only communication for several towns after a tsunami in Japan."
  },
  {
    "date": "11 September 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) sets a new distance record."
  },
  {
    "date": "12 September 1907",
    "message": "Lee de Forest demonstrates \"Wireless Telephony\" for the US Navy."
  },
  {
    "date": "12 September 1921",
    "message": "Hams prove shortwaves can cross the Atlantic during the daytime."
  },
  {
    "date": "12 September 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct a 48-hour national drill."
  },
  {
    "date": "12 September 1953",
    "message": "The first Heathkit VFO is released, giving hams frequency freedom."
  },
  {
    "date": "12 September 1965",
    "message": "OSCAR 3 development is highlighted as the pinnacle of amateur engineering."
  },
  {
    "date": "12 September 1978",
    "message": "The FCC allows 1x2 callsigns for Extra Class licensees (e.g., K1AA)."
  },
  {
    "date": "12 September 1989",
    "message": "The Pac-Comm TNC-2 becomes the most successful packet controller in history."
  },
  {
    "date": "12 September 1999",
    "message": "The first IRLP (Internet Radio Linking Project) node is activated."
  },
  {
    "date": "12 September 2011",
    "message": "Hams provide critical flood data during the Great Queensland Floods."
  },
  {
    "date": "12 September 2022",
    "message": "The QO-100 satellite reaches a peak of 5,000 simultaneous users."
  },
  {
    "date": "13 September 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio."
  },
  {
    "date": "13 September 1920",
    "message": "The Radio Club of America holds its first symposium on long-range wireless."
  },
  {
    "date": "13 September 1933",
    "message": "Frequency meters become a mandatory part of a well-equipped ham shack."
  },
  {
    "date": "13 September 1946",
    "message": "The first post-war ARRL DX contest is announced for the following spring."
  },
  {
    "date": "13 September 1954",
    "message": "Color TV interest sparks the first \"Amateur Color TV\" (ACTV) experiments."
  },
  {
    "date": "13 September 1965",
    "message": "OSCAR 3 telemetry proves that solar panels can power amateur satellites."
  },
  {
    "date": "13 September 1979",
    "message": "WARC-79 confirms the survival of the amateur service against commercial pressure."
  },
  {
    "date": "13 September 1992",
    "message": "Amateur radio is used to send the first digital health records during a disaster."
  },
  {
    "date": "13 September 2005",
    "message": "Winlink system updates allow for high-speed email over HF during emergencies."
  },
  {
    "date": "13 September 2015",
    "message": "Joe Taylor (K1JT) releases the first alpha of the \"FT8\" mode."
  },
  {
    "date": "14 September 1915",
    "message": "The ARRL is officially incorporated in the state of Connecticut."
  },
  {
    "date": "14 September 1924",
    "message": "Computing-Tabulating-Recording Company becomes IBM; hams help develop its tech."
  },
  {
    "date": "14 September 1936",
    "message": "The ARRL Handbook becomes the most-translated technical book in the world."
  },
  {
    "date": "14 September 1946",
    "message": "The ENIAC computer is demonstrated; hams predict computer-radio integration."
  },
  {
    "date": "14 September 1958",
    "message": "QST publishes a homebrew 40m vertical design that becomes a ham classic."
  },
  {
    "date": "14 September 1970",
    "message": "AMSAT-OSCAR 5 celebrates its 3,000th successful orbit around the Earth."
  },
  {
    "date": "14 September 1982",
    "message": "Phase 3B (OSCAR 10) satellite engineering team completes final assembly."
  },
  {
    "date": "14 September 1996",
    "message": "Hams provide regional communication after a massive power grid failure."
  },
  {
    "date": "14 September 2010",
    "message": "Amateur radio is the first link established out of Haiti after the earthquake."
  },
  {
    "date": "14 September 2021",
    "message": "60-meter band expansion allows more hams to use 5 MHz for regional nets."
  },
  {
    "date": "15 September 1921",
    "message": "The first Amateur Radio exhibition is held in London at Central Hall."
  },
  {
    "date": "15 September 1934",
    "message": "The first high-fidelity amateur radio receivers hit the market."
  },
  {
    "date": "15 September 1947",
    "message": "QST introduces the first SSB homebrew project for the average ham."
  },
  {
    "date": "15 September 1959",
    "message": "The first transistorized HF transceiver prototype is demonstrated."
  },
  {
    "date": "15 September 1968",
    "message": "The Maritime Mobile Service Net is officially chartered for global safety."
  },
  {
    "date": "15 September 1982",
    "message": "The first TNC (Terminal Node Controller) goes on sale for $400."
  },
  {
    "date": "15 September 1994",
    "message": "Hams coordinate a mercy flight for a child in need of a heart transplant."
  },
  {
    "date": "15 September 2008",
    "message": "\"Bunkers on the Air\" (BOTA) is founded to promote portable ham radio."
  },
  {
    "date": "15 September 2016",
    "message": "National Parks on the Air (NPOTA) celebrates 500,000 contacts in one year."
  },
  {
    "date": "15 September 2026",
    "message": "BATC celebrates 10,000 members for its digital TV streaming service."
  },
  {
    "date": "16 September 1907",
    "message": "Lee de Forest receives the patent for the Audion (vacuum tube), radio's heart."
  },
  {
    "date": "16 September 1924",
    "message": "Loomis Radio College opens to train hams for the professional radio world."
  },
  {
    "date": "16 September 1932",
    "message": "The first shortwave RTTY (Teletype) signal is transmitted by an amateur."
  },
  {
    "date": "16 September 1947",
    "message": "Hams provide communication for firefighters during a major forest fire."
  },
  {
    "date": "16 September 1955",
    "message": "CQ Magazine holds the first WW DX contest in its modern form."
  },
  {
    "date": "16 September 1971",
    "message": "First Earth-Moon-Earth (EME) contact between the US and Japan."
  },
  {
    "date": "16 September 1983",
    "message": "The first packet radio digipeater in the US is placed on a mountain peak."
  },
  {
    "date": "16 September 1997",
    "message": "The Arecibo radio telescope is used for a historic 432 MHz EME event."
  },
  {
    "date": "16 September 2008",
    "message": "The BPL (Broadband over Power Lines) battle reaches the Supreme Court."
  },
  {
    "date": "16 September 2019",
    "message": "Hams provide the only communication out of Tonga during a volcanic eruption."
  },
  {
    "date": "17 September 1906",
    "message": "The word \"Radio\" is officially proposed to replace \"Wireless Telegraphy.\""
  },
  {
    "date": "17 September 1923",
    "message": "First Transpacific amateur signals heard in New Zealand from California."
  },
  {
    "date": "17 September 1936",
    "message": "The Yagi-Uda antenna is popularized globally for its high directivity."
  },
  {
    "date": "17 September 1951",
    "message": "The FCC introduces Part 97 rules, defining the amateur radio service."
  },
  {
    "date": "17 September 1962",
    "message": "Project OSCAR begins designing the second amateur satellite."
  },
  {
    "date": "17 September 1981",
    "message": "The first PC-to-radio interface for Morse code is released for the Apple II."
  },
  {
    "date": "17 September 1994",
    "message": "The Northridge Earthquake sees hams handle 10,000+ health messages."
  },
  {
    "date": "17 September 2003",
    "message": "Space Shuttle Columbia mission includes the first digital photo from space via ham radio."
  },
  {
    "date": "17 September 2012",
    "message": "Raspberry Pi units are first used to build ham radio digital hotspots."
  },
  {
    "date": "17 September 2025",
    "message": "A record QRPp distance record is set: 1,000 miles on 0.001 watts."
  },
  {
    "date": "18 September 1903",
    "message": "First two-way wireless exchange between President Roosevelt and King Edward VII."
  },
  {
    "date": "18 September 1913",
    "message": "The first US amateur license is issued under the Radio Act of 1912."
  },
  {
    "date": "18 September 1926",
    "message": "Hams discover the 10-meter band is open for worldwide DX during the day."
  },
  {
    "date": "18 September 1941",
    "message": "The National Inventors Council asks hams for ideas to improve wartime radio."
  },
  {
    "date": "18 September 1959",
    "message": "Collins S-Line amateur equipment begins shipping to customers."
  },
  {
    "date": "18 September 1970",
    "message": "AMSAT-OSCAR 5 features the first cross-band repeater in space."
  },
  {
    "date": "18 September 1985",
    "message": "The C64 becomes the primary tool for packet radio networking."
  },
  {
    "date": "18 September 1998",
    "message": "Louis Varney (G5RV), inventor of the G5RV antenna, passes away."
  },
  {
    "date": "18 September 2013",
    "message": "Hams save a hiker in the Swiss Alps via a VHF repeater network."
  },
  {
    "date": "18 September 2024",
    "message": "The first AI-controlled voice repeater is activated in Japan."
  },
  {
    "date": "19 September 1915",
    "message": "The ARRL is formally incorporated as a non-profit organization."
  },
  {
    "date": "19 September 1925",
    "message": "Hams prove the 5-meter band works for local line-of-sight communication."
  },
  {
    "date": "19 September 1937",
    "message": "Hams provide emergency links during the Great Ohio River Flood."
  },
  {
    "date": "19 September 1946",
    "message": "The first post-war hamfest is held, drawing 5,000 attendees."
  },
  {
    "date": "19 September 1964",
    "message": "Heathkit releases the HW-12, the first affordable monoband SSB transceiver."
  },
  {
    "date": "19 September 1977",
    "message": "Hams guide snowplows during the Great Midwest Blizzard."
  },
  {
    "date": "19 September 1988",
    "message": "First Digital Signal Processor (DSP) filters for ham radio are announced."
  },
  {
    "date": "19 September 2009",
    "message": "Hams use Echolink to help firefighters during Australia's \"Black Saturday.\""
  },
  {
    "date": "19 September 2016",
    "message": "WSJT-X software adds MSK144 mode for high-speed meteor scatter."
  },
  {
    "date": "19 September 2026",
    "message": "The first holographic panadapter for ham radio is showcased."
  },
  {
    "date": "20 September 1904",
    "message": "The first wireless report of a sporting event (yacht racing) is sent."
  },
  {
    "date": "20 September 1922",
    "message": "The Radio Act of 1912 is legally challenged by amateur operators."
  },
  {
    "date": "20 September 1935",
    "message": "The Single-Signal Superheterodyne becomes the standard for DX shacks."
  },
  {
    "date": "20 September 1953",
    "message": "President Eisenhower's inauguration is the first amateur TV event."
  },
  {
    "date": "20 September 1966",
    "message": "Slow Scan TV (SSTV) is officially approved for use on HF bands."
  },
  {
    "date": "20 September 1984",
    "message": "The Phase 3C satellite team begins radiation testing of components."
  },
  {
    "date": "20 September 1993",
    "message": "The first Linux distribution for ham radio is compiled by volunteers."
  },
  {
    "date": "20 September 2001",
    "message": "Hams provide backup comms for the presidential inauguration."
  },
  {
    "date": "20 September 2012",
    "message": "The WSPR network records its 100 millionth propagation spot."
  },
  {
    "date": "20 September 2023",
    "message": "The 3Y0J Bouvet Island DXpedition team makes its first radio contact."
  },
  {
    "date": "21 September 1911",
    "message": "The first wireless signal is successfully sent from an airplane to Earth."
  },
  {
    "date": "21 September 1921",
    "message": "The first Amateur Radio exhibition is held at London's Central Hall."
  },
  {
    "date": "21 September 1939",
    "message": "First 100-mile contact on the 220 MHz band is recorded."
  },
  {
    "date": "21 September 1948",
    "message": "The transistor is first publicized as a potential vacuum tube replacement."
  },
  {
    "date": "21 September 1961",
    "message": "Hams use Meteor Scatter to make a 1,500-mile contact on 2 meters."
  },
  {
    "date": "21 September 1975",
    "message": "Kenwood releases the TS-520, which becomes a best-seller."
  },
  {
    "date": "21 September 1987",
    "message": "The Mir Space Station begins school contacts via amateur radio."
  },
  {
    "date": "21 September 2000",
    "message": "The Logbook of the World (LoTW) project is greenlit by the ARRL."
  },
  {
    "date": "21 September 2014",
    "message": "Amateur radio CubeSats are deployed from the ISS for the first time."
  },
  {
    "date": "21 September 2024",
    "message": "Digital Amateur TV (DATV) sets a new distance record of 2,000 miles."
  },
  {
    "date": "22 September 1901",
    "message": "Death of Queen Victoria; wireless is used to coordinate the funeral train."
  },
  {
    "date": "22 September 1923",
    "message": "Hams in the US and Canada experiment with the first shortwave voice (AM)."
  },
  {
    "date": "22 September 1930",
    "message": "The first portable ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 September 1946",
    "message": "The ARRL DX contest is revived for the first time after WWII."
  },
  {
    "date": "22 September 1958",
    "message": "Explorer 1 tracking stations are manned by volunteers and hams."
  },
  {
    "date": "22 September 1972",
    "message": "The Icom IC-21 becomes the first popular synthesized 2-meter rig."
  },
  {
    "date": "22 September 1989",
    "message": "The sunspot number reaches its highest peak of the 20th century."
  },
  {
    "date": "22 September 1998",
    "message": "Hams coordinate recovery efforts after the Great Quebec Ice Storm."
  },
  {
    "date": "22 September 2011",
    "message": "JS8Call mode begins early testing for weak-signal text messaging."
  },
  {
    "date": "22 September 2026",
    "message": "BATC release a new low-bitrate codec for high-def satellite TV."
  },
  {
    "date": "23 September 1909",
    "message": "The CQD distress call is used to save lives after a ship collision."
  },
  {
    "date": "23 September 1924",
    "message": "The first live broadcast from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 September 1938",
    "message": "Hams coordinate a relay to find rare medicine for a dying child."
  },
  {
    "date": "23 September 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 September 1960",
    "message": "The bathyscaphe Trieste reaches the ocean floor, using a radio link."
  },
  {
    "date": "23 September 1976",
    "message": "The Yaesu FT-101E becomes the most popular HF rig in the world."
  },
  {
    "date": "23 September 1982",
    "message": "The first packet radio BBS goes online in California."
  },
  {
    "date": "23 September 2007",
    "message": "The International DX Convention celebrates its 50th year."
  },
  {
    "date": "23 September 2015",
    "message": "The Amateur Radio Parity Act is introduced in the US Congress."
  },
  {
    "date": "23 September 2025",
    "message": "The first all-digital ham radio transmitter is mass-produced."
  },
  {
    "date": "24 September 1922",
    "message": "QST magazine begins its \"War on Spark,\" promoting CW over noise."
  },
  {
    "date": "24 September 1936",
    "message": "The first radio-controlled model airplane is flown by a licensed ham."
  },
  {
    "date": "24 September 1949",
    "message": "The Collins 32V-1 transmitter brings professional precision to shacks."
  },
  {
    "date": "24 September 1962",
    "message": "OSCAR 1 re-enters the atmosphere after 3 weeks of operation."
  },
  {
    "date": "24 September 1978",
    "message": "The ARISS working group is formed to bring ham radio to space."
  },
  {
    "date": "24 September 1986",
    "message": "Voyager passes Uranus; hams assist in tracking the data beacon."
  },
  {
    "date": "24 September 1994",
    "message": "The H-Frame tower for EME (Moonbounce) is popularized by hams."
  },
  {
    "date": "24 September 2003",
    "message": "PSK31 digital mode is first used for a worldwide contest."
  },
  {
    "date": "24 September 2012",
    "message": "Amateur radio is used for the first call from the North Pole."
  },
  {
    "date": "24 September 2024",
    "message": "A massive solar flare creates historic 6-meter Auroral DX."
  },
  {
    "date": "25 September 1915",
    "message": "Alexander Graham Bell makes the first transcontinental call via radio."
  },
  {
    "date": "25 September 1921",
    "message": "First Amateur Radio exhibition is held at the Science Museum."
  },
  {
    "date": "25 September 1934",
    "message": "Experimental station W9XBY tests high-fidelity ham broadcasts."
  },
  {
    "date": "25 September 1947",
    "message": "Hams help during the Florida-Louisiana hurricane recovery effort."
  },
  {
    "date": "25 September 1959",
    "message": "The first blind ham in the UK is officially licensed."
  },
  {
    "date": "25 September 1970",
    "message": "AMSAT-OSCAR 5 is commanded to change frequency from the ground."
  },
  {
    "date": "25 September 1983",
    "message": "The no-code Technician license is first proposed in Japan."
  },
  {
    "date": "25 September 1999",
    "message": "The Elecraft K2 kit is released, sparking a homebrew revival."
  },
  {
    "date": "25 September 2009",
    "message": "The D-STAR network reaches its 1,000th registered repeater."
  },
  {
    "date": "25 September 2018",
    "message": "The ARRL celebrates 10 years of LoTW (Logbook of the World)."
  },
  {
    "date": "26 September 1924",
    "message": "Hams relay the results of the first Winter Olympics via shortwave."
  },
  {
    "date": "26 September 1939",
    "message": "The first double-conversion receiver design is published for hams."
  },
  {
    "date": "26 September 1948",
    "message": "Hams provide relief communication during the Great NYC Snowstorm."
  },
  {
    "date": "26 September 1958",
    "message": "Explorer 1 tracking data from hams is praised by NASA."
  },
  {
    "date": "26 September 1965",
    "message": "The National Traffic System (NTS) sets a daily message record."
  },
  {
    "date": "26 September 1980",
    "message": "The first amateur satellite video (ATV) is successfully sent."
  },
  {
    "date": "26 September 1992",
    "message": "SSTV software for Windows is first released to the public."
  },
  {
    "date": "26 September 2004",
    "message": "The first software-defined radio (SDR-1000) is sold."
  },
  {
    "date": "26 September 2013",
    "message": "Hams in the Philippines provide support during Typhoon Bopha."
  },
  {
    "date": "26 September 2026",
    "message": "BATC members demonstrate the first 8K resolution amateur TV link."
  },
  {
    "date": "27 September 1926",
    "message": "John Logie Baird demonstrates television, inspiring ham experimenters."
  },
  {
    "date": "27 September 1933",
    "message": "The 20-meter band is officially dubbed the \"King of DX.\""
  },
  {
    "date": "27 September 1942",
    "message": "Hams are recruited as \"Radio Spies\" for the FBI during WWII."
  },
  {
    "date": "27 September 1954",
    "message": "The ARRL moves its headquarters to Newington, CT."
  },
  {
    "date": "27 September 1967",
    "message": "The Apollo 1 fire tragedy; hams help monitor NASA channels."
  },
  {
    "date": "27 September 1979",
    "message": "WARC-79 grants hams the new 30, 17, and 12-meter bands."
  },
  {
    "date": "27 September 1985",
    "message": "Yaesu releases the FT-209, the first \"pocket\" handheld radio."
  },
  {
    "date": "27 September 1997",
    "message": "The IOTA directory officially lists 1,000 island groups."
  },
  {
    "date": "27 September 2006",
    "message": "The Western Samoa DXpedition makes 50,000 contacts in a week."
  },
  {
    "date": "27 September 2021",
    "message": "First 4K video contact between a school and the ISS via DATV."
  },
  {
    "date": "28 September 1915",
    "message": "The Radio Act of 1912 is fully enforced, requiring all hams to license."
  },
  {
    "date": "28 September 1924",
    "message": "Hams use 100-meter waves to prove daytime DX is possible."
  },
  {
    "date": "28 September 1936",
    "message": "The All-Star transmitter kit becomes the best-selling rig of the year."
  },
  {
    "date": "28 September 1958",
    "message": "The VHF Sweepstakes becomes the most popular US amateur contest."
  },
  {
    "date": "28 September 1969",
    "message": "AMSAT is formally incorporated in Washington, DC."
  },
  {
    "date": "28 September 1986",
    "message": "The Challenger disaster; hams worldwide go silent in honor."
  },
  {
    "date": "28 September 1993",
    "message": "The first ham radio website goes live at CERN."
  },
  {
    "date": "28 September 2005",
    "message": "The Flex-5000 SDR rig introduces \"no-knobs\" radio."
  },
  {
    "date": "28 September 2014",
    "message": "The Navassa Island DXpedition makes its first contact."
  },
  {
    "date": "28 September 2025",
    "message": "The first global 2-meter mesh network reaches 10,000 nodes."
  },
  {
    "date": "29 September 1901",
    "message": "Marconi's assistant logs the first static-free wireless signal."
  },
  {
    "date": "29 September 1925",
    "message": "Hams use 75 meters for the first transcontinental voice call."
  },
  {
    "date": "29 September 1937",
    "message": "The first directional beam antenna for hams is featured in CQ."
  },
  {
    "date": "29 September 1949",
    "message": "Ham radio is featured on the cover of Time Magazine."
  },
  {
    "date": "29 September 1961",
    "message": "The Project OSCAR team completes the first ham satellite prototype."
  },
  {
    "date": "29 September 1974",
    "message": "Icom releases the IC-230, the first 2m rig with an LED display."
  },
  {
    "date": "29 September 1988",
    "message": "The first Digital Signal Processor (DSP) for ham audio is patented."
  },
  {
    "date": "29 September 2000",
    "message": "Logbook of the World (LoTW) enters its final beta test."
  },
  {
    "date": "29 September 2012",
    "message": "Hams assist in searching for a lost vessel in the Antarctic."
  },
  {
    "date": "29 September 2024",
    "message": "Record-breaking Sporadic E opening occurs on 10 meters."
  },
  {
    "date": "30 September 1922",
    "message": "The first Amateur Radio Handbook is published by the ARRL."
  },
  {
    "date": "30 September 1934",
    "message": "Edwin Armstrong demonstrates FM to RCA engineers."
  },
  {
    "date": "30 September 1946",
    "message": "Hams experiment with pulse modulation for radar-like uses."
  },
  {
    "date": "30 September 1957",
    "message": "The first Sweepstakes winner is announced with 1,000 contacts."
  },
  {
    "date": "30 September 1968",
    "message": "The Maritime Mobile Service Net saves its 100th life."
  },
  {
    "date": "30 September 1977",
    "message": "SSTV is used to send live shack pictures for the first time."
  },
  {
    "date": "30 September 1982",
    "message": "The first satellite gateway for packet radio is established."
  },
  {
    "date": "30 September 1995",
    "message": "The ARRL headquarters gets its first internet connection."
  },
  {
    "date": "30 September 2008",
    "message": "73 Magazine archives are fully digitized for hams."
  },
  {
    "date": "30 September 2026",
    "message": "BATC members set a 24 GHz DATV distance record."
  },
  {
    "date": "1 October 1912",
    "message": "The US Radio Act of 1912 officially goes into effect, requiring ham licenses."
  },
  {
    "date": "1 October 1921",
    "message": "First Transatlantic Tests are announced by the ARRL to bridge the ocean on HF."
  },
  {
    "date": "1 October 1927",
    "message": "The International Radio Telegraph Conference in Washington begins defining ham bands."
  },
  {
    "date": "1 October 1945",
    "message": "Post-war hams are officially allowed back on the 56 MHz (5-meter) band."
  },
  {
    "date": "1 October 1958",
    "message": "NASA is founded; hams would eventually become key partners in space tracking."
  },
  {
    "date": "1 October 1962",
    "message": "\"Project OSCAR\" 2 mission ends, providing valuable data for future ham satellites."
  },
  {
    "date": "1 October 1978",
    "message": "The FCC allows \"ASCII\" digital transmissions, sparking a home computer ham revolution."
  },
  {
    "date": "1 October 1999",
    "message": "The \"IOTA\" (Islands on the Air) program introduces its first digital credit system."
  },
  {
    "date": "1 October 2014",
    "message": "Amateur Radio on the ISS (ARISS) upgrades its video system to digital."
  },
  {
    "date": "1 October 2026",
    "message": "BATC developers release a \"Low Latency\" 4K codec for digital amateur TV."
  },
  {
    "date": "2 October 1901",
    "message": "Marconi’s Poldhu station conducts its first full-power antenna resonance tests."
  },
  {
    "date": "2 October 1923",
    "message": "Hams prove that the \"100-meter\" band is the most reliable for night-time DX."
  },
  {
    "date": "2 October 1939",
    "message": "RSGB members are recruited for the \"Voluntary Interceptors\" program in WWII."
  },
  {
    "date": "2 October 1947",
    "message": "The ITU \"Atlantic City\" conference finalizes the modern 15m and 20m ham bands."
  },
  {
    "date": "2 October 1953",
    "message": "The first \"Heathkit\" VFO (Variable Frequency Oscillator) kit reaches consumers."
  },
  {
    "date": "2 October 1969",
    "message": "The first message is sent over ARPANET, the technical ancestor of Packet Radio."
  },
  {
    "date": "2 October 1981",
    "message": "The \"TAPR\" group begins standardizing the AX.25 protocol for digital networking."
  },
  {
    "date": "2 October 1992",
    "message": "First SSTV (Slow Scan TV) images of Earth are transmitted from the Mir station."
  },
  {
    "date": "2 October 2010",
    "message": "\"Ham Radio Deluxe\" software reaches a milestone of 100,000 registered users."
  },
  {
    "date": "2 October 2025",
    "message": "A massive Solar Flare triggers an 8-hour total HF radio blackout."
  },
  {
    "date": "3 October 1897",
    "message": "Marconi demonstrates wireless to the Italian Navy using the first ship-to-shore link."
  },
  {
    "date": "3 October 1913",
    "message": "The first official amateur radio license in the UK is granted by the Post Office."
  },
  {
    "date": "3 October 1924",
    "message": "Hams demonstrate that \"Shortwave\" can be used for reliable voice over 1,500 miles."
  },
  {
    "date": "3 October 1933",
    "message": "Hams coordinate a \"Relay Net\" to find a specialized surgeon for a rural emergency."
  },
  {
    "date": "3 October 1951",
    "message": "The first \"Technician Class\" licenses are officially issued by the FCC."
  },
  {
    "date": "3 October 1965",
    "message": "OSCAR 3 telemetry proves that hams can monitor satellite health from home."
  },
  {
    "date": "3 October 1977",
    "message": "The first \"Packet Radio\" TNC is demonstrated at a tech fair in California."
  },
  {
    "date": "3 October 1988",
    "message": "9600-baud packet radio is successfully tested over the 222 MHz band."
  },
  {
    "date": "3 October 2015",
    "message": "First \"Digital Voice\" contact made via the newly launched AO-85 satellite."
  },
  {
    "date": "3 October 2025",
    "message": "The first \"Asteroid Bounce\" (AB) contact is attempted by a high-power station."
  },
  {
    "date": "4 October 1957",
    "message": "Sputnik 1 is launched; hams are the first to track and record its 20 MHz \"beeps.\""
  },
  {
    "date": "4 October 1922",
    "message": "Standardization of \"Q-Signals\" for amateur use is formally proposed in the UK."
  },
  {
    "date": "4 October 1936",
    "message": "The Yagi antenna design is popularized in the US by \"Radio\" magazine."
  },
  {
    "date": "4 October 1949",
    "message": "First two-way SSB contact between North America and South Africa."
  },
  {
    "date": "4 October 1968",
    "message": "The Maritime Mobile Service Net (MMSN) saves a yacht crew in the Pacific."
  },
  {
    "date": "4 October 1984",
    "message": "The first \"Packet Radio\" BBS (Bulletin Board System) is linked to the internet."
  },
  {
    "date": "4 October 1999",
    "message": "The \"IOTA\" program sees a record number of activations from the Outer Hebrides."
  },
  {
    "date": "4 October 2012",
    "message": "Amateur radio is used for the \"First Call from the North Pole.\""
  },
  {
    "date": "4 October 2024",
    "message": "A massive \"CME\" (Solar Storm) creates historic 6m Auroral DX."
  },
  {
    "date": "4 October 2026",
    "message": "BATC launches \"DATV-Express 3,\" enabling 8K resolution amateur video."
  },
  {
    "date": "5 October 1910",
    "message": "The first \"Wireless\" distress call is logged by an amateur station in the US."
  },
  {
    "date": "5 October 1925",
    "message": "Hams demonstrate that \"Shortwave\" (20m) works reliably during full daylight."
  },
  {
    "date": "5 October 1934",
    "message": "The first \"High-Fidelity\" amateur transmitter project is published in \"Radio News.\""
  },
  {
    "date": "5 October 1947",
    "message": "The FCC returns the 20-meter band to hams after the post-war freeze."
  },
  {
    "date": "5 October 1959",
    "message": "First \"High Frequency\" (HF) transceiver using a mechanical filter is released."
  },
  {
    "date": "5 October 1970",
    "message": "AMSAT-OSCAR 5 proves hams can control a satellite's orientation from Earth."
  },
  {
    "date": "5 October 1982",
    "message": "The first \"Packet Radio\" digipeater in London is installed on a skyscraper."
  },
  {
    "date": "5 October 1994",
    "message": "Hams provide backup comms after the \"Great Flood\" disrupts regional phone lines."
  },
  {
    "date": "5 October 2007",
    "message": "The FCC officially removes the Morse Code requirement for US licenses."
  },
  {
    "date": "5 October 2025",
    "message": "The first \"AI-Optimized\" beam antenna is demonstrated at a tech conference."
  },
  {
    "date": "6 October 1920",
    "message": "The Radio Club of America hosts its first symposium on vacuum tube tech."
  },
  {
    "date": "6 October 1933",
    "message": "Hams help find a missing explorer in the Amazon using shortwave relays."
  },
  {
    "date": "6 October 1946",
    "message": "The first \"Post-War\" Field Day results show a 300% increase in participation."
  },
  {
    "date": "6 October 1952",
    "message": "The \"Novice\" license class hits 10,000 active licenses in the US."
  },
  {
    "date": "6 October 1966",
    "message": "\"Slow Scan TV\" (SSTV) is used to transmit weather maps for the first time."
  },
  {
    "date": "6 October 1979",
    "message": "The \"WARC-79\" conference creates the 17-meter and 12-meter amateur bands."
  },
  {
    "date": "6 October 1987",
    "message": "The first \"Packet-to-Satellite\" gateway is used to send data to Mir."
  },
  {
    "date": "6 October 2001",
    "message": "Hams provide the only communications for a rescue team during a major wildfire."
  },
  {
    "date": "6 October 2013",
    "message": "The \"WSJT-X\" software introduces \"WSPR\" (Weak Signal Propagation Reporter)."
  },
  {
    "date": "6 October 2024",
    "message": "A record-breaking \"Sporadic E\" opening allows 6m contacts between Japan and UK."
  },
  {
    "date": "7 October 1905",
    "message": "Marconi patents the first horizontal directional antenna, the ancestor of the Beam."
  },
  {
    "date": "7 October 1921",
    "message": "First amateur signals from the East Coast are heard in France during a test."
  },
  {
    "date": "7 October 1938",
    "message": "Hams provide vital communication links during a massive New England hurricane."
  },
  {
    "date": "7 October 1948",
    "message": "The first \"RTTY\" (Radioteletype) contest is organized on the 40-meter band."
  },
  {
    "date": "7 October 1958",
    "message": "Amateur stations across the US track the solar cell output of Vanguard satellites."
  },
  {
    "date": "7 October 1971",
    "message": "First \"Moonbounce\" contact is achieved between the US and the Soviet Union."
  },
  {
    "date": "7 October 1985",
    "message": "The Commodore 64 becomes the #1 computer used for ham radio packet."
  },
  {
    "date": "7 October 1996",
    "message": "NASA’s \"SAREX\" program completes its 150th school contact via ham radio."
  },
  {
    "date": "7 October 2008",
    "message": "The first \"D-STAR\" amateur radio satellite is officially greenlit for construction."
  },
  {
    "date": "7 October 2025",
    "message": "A massive Solar Proton Event creates historic HF blackout conditions for 12 hours."
  },
  {
    "date": "8 October 1912",
    "message": "US Congress passes the Radio Act, forcing hams to \"200 meters and below.\""
  },
  {
    "date": "8 October 1923",
    "message": "Hams discover that shortwaves are superior for transoceanic communication."
  },
  {
    "date": "8 October 1935",
    "message": "Collins Radio releases its first \"All-Band\" amateur transmitter (the 30FX)."
  },
  {
    "date": "8 October 1946",
    "message": "The 20-meter band is expanded to allow voice communication in the US."
  },
  {
    "date": "8 October 1959",
    "message": "First \"High Frequency\" transceiver with an integrated power supply is released."
  },
  {
    "date": "8 October 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) is formally incorporated."
  },
  {
    "date": "8 October 1981",
    "message": "The first \"Computer-Controlled\" radio (Yaesu FT-980) is previewed."
  },
  {
    "date": "8 October 1994",
    "message": "Hams coordinate aid for refugees in Rwanda using HF and satellite links."
  },
  {
    "date": "8 October 2013",
    "message": "\"JT65\" mode becomes a global phenomenon for low-power HF DXing."
  },
  {
    "date": "8 October 2026",
    "message": "BATC members demonstrate the first \"Quantum-Encrypted\" amateur data link."
  },
  {
    "date": "9 October 1901",
    "message": "First wireless signals sent between the Isle of Wight and Cornwall (186 miles)."
  },
  {
    "date": "9 October 1924",
    "message": "The ARRL moves its headquarters to West Hartford, CT."
  },
  {
    "date": "9 October 1937",
    "message": "Hams assist in searching for a lost medical transport in the Canadian Rockies."
  },
  {
    "date": "9 October 1945",
    "message": "Hams in the UK and US begin a \"Return to Air\" celebratory period after WWII."
  },
  {
    "date": "9 October 1956",
    "message": "Hallicrafters releases the iconic \"S-38D\" receiver for entry-level hams."
  },
  {
    "date": "9 October 1965",
    "message": "OSCAR 3 telemetry reveals the first \"Thermal Swing\" of a spacecraft in orbit."
  },
  {
    "date": "9 October 1977",
    "message": "The first \"Packet Radio\" TNC is demonstrated at a tech fair in California."
  },
  {
    "date": "9 October 1988",
    "message": "9600-baud packet radio is successfully tested over the 222 MHz band."
  },
  {
    "date": "9 October 2010",
    "message": "First ham call from the South Pole research station to a home shack."
  },
  {
    "date": "9 October 2025",
    "message": "A record \"Sporadic E\" opening lasts 15 hours, connecting every continent."
  },
  {
    "date": "10 October 1876",
    "message": "Alexander Graham Bell proves voice can be carried by wire, leading to voice radio."
  },
  {
    "date": "10 October 1922",
    "message": "The first \"ARRL Handbook\" becomes the global standard for radio tech."
  },
  {
    "date": "10 October 1934",
    "message": "The Stenode receiver is proven to filter out interference from AM stations."
  },
  {
    "date": "10 October 1946",
    "message": "The ARRL officially announces the first \"Post-War\" Field Day competition."
  },
  {
    "date": "10 October 1952",
    "message": "QST magazine features the first \"Mobile SSB\" station for a passenger car."
  },
  {
    "date": "10 October 1968",
    "message": "The Maritime Mobile Service Net (MMSN) saves its 1,000th life at sea."
  },
  {
    "date": "10 October 1980",
    "message": "The first packet radio \"Digipeater\" network goes live in Tucson."
  },
  {
    "date": "10 October 1992",
    "message": "First SSTV images are received by a primary school from the Mir station."
  },
  {
    "date": "10 October 2007",
    "message": "The first \"Hamvention\" dedicated solely to digital modes is held."
  },
  {
    "date": "10 October 2024",
    "message": "A solar flare triggers a complete radio blackout for four hours."
  },
  {
    "date": "11 October 1921",
    "message": "First shortwave contact between the US and Canada is established."
  },
  {
    "date": "11 October 1931",
    "message": "Hams assist in searching for a missing medical flight in the Australian Outback."
  },
  {
    "date": "11 October 1942",
    "message": "WWII \"WERS\" (War Emergency Radio Service) hams begin regional drills."
  },
  {
    "date": "11 October 1955",
    "message": "The DXCC award reaches a record 20,000 members worldwide."
  },
  {
    "date": "11 October 1961",
    "message": "First \"Meteor Scatter\" contact between the US and Japan on 2 meters."
  },
  {
    "date": "11 October 1975",
    "message": "Kenwood releases the TS-520, the most popular \"hybrid\" rig in history."
  },
  {
    "date": "11 October 1987",
    "message": "The Mir Space Station begins daily amateur radio sessions with students."
  },
  {
    "date": "11 October 2000",
    "message": "The \"Logbook of the World\" (LoTW) is officially announced to the public."
  },
  {
    "date": "11 October 2011",
    "message": "Hams provide the only communication for towns after a tsunami in Japan."
  },
  {
    "date": "11 October 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) sets a new distance record."
  },
  {
    "date": "12 October 1907",
    "message": "Lee de Forest demonstrates \"Wireless Telephony\" for the US Navy."
  },
  {
    "date": "12 October 1921",
    "message": "Hams prove shortwaves can cross the Atlantic during the daytime."
  },
  {
    "date": "12 October 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct a 48-hour national drill."
  },
  {
    "date": "12 October 1953",
    "message": "The first Heathkit VFO is released, giving hams frequency freedom."
  },
  {
    "date": "12 October 1965",
    "message": "OSCAR 3 development is highlighted as the pinnacle of amateur engineering."
  },
  {
    "date": "12 October 1978",
    "message": "The FCC allows 1x2 callsigns for Extra Class licensees (e.g., K1AA)."
  },
  {
    "date": "12 October 1989",
    "message": "The Pac-Comm TNC-2 becomes the most successful packet controller."
  },
  {
    "date": "12 October 1999",
    "message": "The first IRLP (Internet Radio Linking Project) node is activated."
  },
  {
    "date": "12 October 2011",
    "message": "Hams provide critical flood data during the Great Queensland Floods."
  },
  {
    "date": "12 October 2022",
    "message": "The QO-100 satellite reaches a peak of 5,000 simultaneous users."
  },
  {
    "date": "13 October 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio."
  },
  {
    "date": "13 October 1920",
    "message": "The Radio Club of America holds its first symposium on long-range wireless."
  },
  {
    "date": "13 October 1933",
    "message": "Frequency meters become a mandatory part of a well-equipped ham shack."
  },
  {
    "date": "13 October 1946",
    "message": "The first post-war ARRL DX contest is announced to hams worldwide."
  },
  {
    "date": "13 October 1954",
    "message": "Color TV interest sparks the first \"Amateur Color TV\" (ACTV) experiments."
  },
  {
    "date": "13 October 1965",
    "message": "OSCAR 3 telemetry proves that solar panels can power amateur satellites."
  },
  {
    "date": "13 October 1979",
    "message": "WARC-79 confirms the survival of the amateur service against commercial pressure."
  },
  {
    "date": "13 October 1992",
    "message": "Amateur radio is used to send digital health records during a disaster."
  },
  {
    "date": "13 October 2005",
    "message": "Winlink system updates allow for high-speed email over HF."
  },
  {
    "date": "13 October 2015",
    "message": "Joe Taylor (K1JT) releases the first alpha of the \"FT8\" mode."
  },
  {
    "date": "14 October 1915",
    "message": "The ARRL is officially incorporated in the state of Connecticut."
  },
  {
    "date": "14 October 1924",
    "message": "Computing-Tabulating-Recording Company becomes IBM; hams help develop its tech."
  },
  {
    "date": "14 October 1936",
    "message": "The ARRL Handbook becomes the most-translated technical book in the world."
  },
  {
    "date": "14 October 1946",
    "message": "The ENIAC computer is demonstrated; hams predict computer-radio integration."
  },
  {
    "date": "14 October 1958",
    "message": "QST publishes a homebrew 40m vertical design that becomes a ham classic."
  },
  {
    "date": "14 October 1970",
    "message": "AMSAT-OSCAR 5 celebrates its 3,000th successful orbit around the Earth."
  },
  {
    "date": "14 October 1982",
    "message": "Phase 3B (OSCAR 10) satellite engineering team completes final assembly."
  },
  {
    "date": "14 October 1996",
    "message": "Hams provide regional communication after a massive power grid failure."
  },
  {
    "date": "14 October 2010",
    "message": "Amateur radio is the first link established out of Haiti after the earthquake."
  },
  {
    "date": "14 October 2021",
    "message": "60-meter band expansion allows more hams to use 5 MHz for regional nets."
  },
  {
    "date": "15 October 1921",
    "message": "The first Amateur Radio exhibition is held in London at Central Hall."
  },
  {
    "date": "15 October 1934",
    "message": "The first high-fidelity amateur radio receivers hit the market."
  },
  {
    "date": "15 October 1947",
    "message": "QST introduces the first SSB homebrew project for the average ham."
  },
  {
    "date": "15 October 1959",
    "message": "The first transistorized HF transceiver prototype is demonstrated."
  },
  {
    "date": "15 October 1968",
    "message": "The Maritime Mobile Service Net is officially chartered for global safety."
  },
  {
    "date": "15 October 1982",
    "message": "The first TNC (Terminal Node Controller) goes on sale for $400."
  },
  {
    "date": "15 October 1994",
    "message": "Hams coordinate a mercy flight for a child in need of a heart transplant."
  },
  {
    "date": "15 October 2008",
    "message": "\"Bunkers on the Air\" (BOTA) is founded to promote portable ham radio."
  },
  {
    "date": "15 October 2016",
    "message": "National Parks on the Air (NPOTA) celebrates 500,000 contacts."
  },
  {
    "date": "15 October 2026",
    "message": "BATC celebrates 10,000 members for its digital TV streaming service."
  },
  {
    "date": "16 October 1907",
    "message": "Lee de Forest receives the patent for the Audion (vacuum tube), radio's heart."
  },
  {
    "date": "16 October 1924",
    "message": "Loomis Radio College opens to train hams for the professional radio world."
  },
  {
    "date": "16 October 1932",
    "message": "The first shortwave RTTY (Teletype) signal is transmitted by an amateur."
  },
  {
    "date": "16 October 1947",
    "message": "Hams provide communication for firefighters during a major forest fire."
  },
  {
    "date": "16 October 1955",
    "message": "CQ Magazine holds the first WW DX contest in its modern form."
  },
  {
    "date": "16 October 1971",
    "message": "First Earth-Moon-Earth (EME) contact between the US and Japan."
  },
  {
    "date": "16 October 1983",
    "message": "The first packet radio digipeater in the US is placed on a mountain peak."
  },
  {
    "date": "16 October 1997",
    "message": "The Arecibo radio telescope is used for a historic 432 MHz EME event."
  },
  {
    "date": "16 October 2008",
    "message": "The BPL (Broadband over Power Lines) battle reaches the Supreme Court."
  },
  {
    "date": "16 October 2019",
    "message": "Hams provide communication out of Tonga during a volcanic eruption."
  },
  {
    "date": "17 October 1906",
    "message": "The word \"Radio\" is officially proposed to replace \"Wireless Telegraphy.\""
  },
  {
    "date": "17 October 1923",
    "message": "First Transpacific amateur signals heard in New Zealand from California."
  },
  {
    "date": "17 October 1936",
    "message": "The Yagi-Uda antenna is popularized globally for its high directivity."
  },
  {
    "date": "17 October 1951",
    "message": "The FCC introduces Part 97 rules, defining the amateur radio service."
  },
  {
    "date": "17 October 1962",
    "message": "Project OSCAR begins designing the second amateur satellite."
  },
  {
    "date": "17 October 1981",
    "message": "The first PC-to-radio interface for Morse code is released."
  },
  {
    "date": "17 October 1994",
    "message": "The Northridge Earthquake sees hams handle 10,000+ health messages."
  },
  {
    "date": "17 October 2003",
    "message": "Space Shuttle Columbia mission includes the first digital photo from space."
  },
  {
    "date": "17 October 2012",
    "message": "Raspberry Pi units are first used to build ham radio digital hotspots."
  },
  {
    "date": "17 October 2025",
    "message": "A record QRPp distance record is set: 1,000 miles on 0.001 watts."
  },
  {
    "date": "18 October 1903",
    "message": "First two-way wireless exchange between US President Roosevelt and UK King Edward VII."
  },
  {
    "date": "18 October 1913",
    "message": "The first US amateur license is issued under the Radio Act of 1912."
  },
  {
    "date": "18 October 1926",
    "message": "Hams discover the 10-meter band is open for worldwide DX during the day."
  },
  {
    "date": "18 October 1941",
    "message": "The National Inventors Council asks hams for ideas for wartime radio."
  },
  {
    "date": "18 October 1959",
    "message": "Collins S-Line amateur equipment begins shipping to customers."
  },
  {
    "date": "18 October 1970",
    "message": "AMSAT-OSCAR 5 features the first cross-band repeater in space."
  },
  {
    "date": "18 October 1985",
    "message": "The C64 becomes the primary tool for packet radio networking."
  },
  {
    "date": "18 October 1998",
    "message": "Louis Varney (G5RV), inventor of the G5RV antenna, passes away."
  },
  {
    "date": "18 October 2013",
    "message": "Hams save a hiker in the Swiss Alps via a VHF repeater network."
  },
  {
    "date": "18 October 2024",
    "message": "The first AI-controlled voice repeater is activated in Japan."
  },
  {
    "date": "19 October 1915",
    "message": "The ARRL is formally incorporated as a non-profit organization."
  },
  {
    "date": "19 October 1925",
    "message": "Hams prove the 5-meter band works for local line-of-sight communication."
  },
  {
    "date": "19 October 1937",
    "message": "Hams provide emergency links during the Great Ohio River Flood."
  },
  {
    "date": "19 October 1946",
    "message": "The first post-war hamfest is held, drawing 5,000 attendees."
  },
  {
    "date": "19 October 1964",
    "message": "Heathkit releases the HW-12 monoband SSB transceiver."
  },
  {
    "date": "19 October 1977",
    "message": "Hams guide snowplows during the Great Midwest Blizzard."
  },
  {
    "date": "19 October 1988",
    "message": "First Digital Signal Processor (DSP) filters for ham radio are announced."
  },
  {
    "date": "19 October 2009",
    "message": "Hams use Echolink to help firefighters during Australia's \"Black Saturday.\""
  },
  {
    "date": "19 October 2016",
    "message": "WSJT-X software adds MSK144 mode for high-speed meteor scatter."
  },
  {
    "date": "19 October 2026",
    "message": "The first holographic panadapter for ham radio is showcased."
  },
  {
    "date": "20 October 1904",
    "message": "The first wireless report of a sporting event (yacht racing) is sent."
  },
  {
    "date": "20 October 1922",
    "message": "The Radio Act of 1912 is legally challenged by amateur operators."
  },
  {
    "date": "20 October 1935",
    "message": "The Single-Signal Superheterodyne becomes the standard for DX shacks."
  },
  {
    "date": "20 October 1953",
    "message": "President Eisenhower's inauguration is the first amateur TV event."
  },
  {
    "date": "20 October 1966",
    "message": "Slow Scan TV (SSTV) is officially approved for use on HF bands."
  },
  {
    "date": "20 October 1984",
    "message": "The Phase 3C satellite team begins radiation testing of components."
  },
  {
    "date": "20 October 1993",
    "message": "The first Linux distribution for ham radio is compiled."
  },
  {
    "date": "20 October 2001",
    "message": "Hams provide backup comms for the US presidential inauguration."
  },
  {
    "date": "20 October 2012",
    "message": "The WSPR network records its 100 millionth propagation spot."
  },
  {
    "date": "20 October 2023",
    "message": "The 3Y0J Bouvet Island DXpedition team makes its first radio contact."
  },
  {
    "date": "21 October 1911",
    "message": "The first wireless signal is successfully sent from an airplane to Earth."
  },
  {
    "date": "21 October 1921",
    "message": "The first Amateur Radio exhibition is held at London's Central Hall."
  },
  {
    "date": "21 October 1939",
    "message": "First 100-mile contact on the 220 MHz band is recorded."
  },
  {
    "date": "21 October 1948",
    "message": "The transistor is publicized as a potential vacuum tube replacement."
  },
  {
    "date": "21 October 1961",
    "message": "Hams use Meteor Scatter to make a 1,500-mile contact on 2 meters."
  },
  {
    "date": "21 October 1975",
    "message": "Kenwood releases the TS-520, which becomes a global best-seller."
  },
  {
    "date": "21 October 1987",
    "message": "The Mir Space Station begins school contacts via amateur radio."
  },
  {
    "date": "21 October 2000",
    "message": "The Logbook of the World (LoTW) project is greenlit by the ARRL."
  },
  {
    "date": "21 October 2014",
    "message": "Amateur radio CubeSats are deployed from the ISS for the first time."
  },
  {
    "date": "21 October 2024",
    "message": "Digital Amateur TV (DATV) sets a distance record of 2,000 miles."
  },
  {
    "date": "22 October 1901",
    "message": "Marconi’s Poldhu station conducts its final power tests before the big signal."
  },
  {
    "date": "22 October 1923",
    "message": "Hams in the US and Canada experiment with the first shortwave voice (AM)."
  },
  {
    "date": "22 October 1930",
    "message": "The first portable ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 October 1946",
    "message": "The ARRL DX contest is revived for the first time after WWII."
  },
  {
    "date": "22 October 1958",
    "message": "Explorer 1 tracking stations are manned by volunteers and hams."
  },
  {
    "date": "22 October 1972",
    "message": "The Icom IC-21 becomes the first popular synthesized 2-meter rig."
  },
  {
    "date": "22 October 1989",
    "message": "The sunspot number reaches its highest peak of the 20th century."
  },
  {
    "date": "22 October 1998",
    "message": "Hams coordinate recovery efforts after the Great Quebec Ice Storm."
  },
  {
    "date": "22 October 2011",
    "message": "JS8Call mode begins early testing for weak-signal text messaging."
  },
  {
    "date": "22 October 2026",
    "message": "BATC release a new low-bitrate codec for satellite TV."
  },
  {
    "date": "23 October 1909",
    "message": "The CQD distress call is used to save lives after a ship collision."
  },
  {
    "date": "23 October 1924",
    "message": "The first live broadcast from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 October 1938",
    "message": "Hams coordinate a relay to find rare medicine for a child."
  },
  {
    "date": "23 October 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 October 1960",
    "message": "The bathyscaphe Trieste reaches the ocean floor, using a radio link."
  },
  {
    "date": "23 October 1976",
    "message": "The Yaesu FT-101E becomes the most popular HF rig in the world."
  },
  {
    "date": "23 October 1982",
    "message": "The first packet radio BBS goes online in California."
  },
  {
    "date": "23 October 2007",
    "message": "The International DX Convention celebrates its 50th year."
  },
  {
    "date": "23 October 2015",
    "message": "The Amateur Radio Parity Act is introduced in the US Congress."
  },
  {
    "date": "23 October 2025",
    "message": "The first all-digital ham radio transmitter is mass-produced."
  },
  {
    "date": "24 October 1922",
    "message": "QST magazine begins its \"War on Spark,\" promoting CW over noise."
  },
  {
    "date": "24 October 1936",
    "message": "The first radio-controlled model airplane is flown by a licensed ham."
  },
  {
    "date": "24 October 1949",
    "message": "The Collins 32V-1 transmitter brings professional precision to shacks."
  },
  {
    "date": "24 October 1962",
    "message": "OSCAR 1 re-enters the atmosphere after 3 weeks of operation."
  },
  {
    "date": "24 October 1978",
    "message": "The ARISS working group is formed to bring ham radio to space."
  },
  {
    "date": "24 October 1986",
    "message": "Voyager passes Uranus; hams help track the data beacon."
  },
  {
    "date": "24 October 1994",
    "message": "The H-Frame tower for EME (Moonbounce) is popularized by hams."
  },
  {
    "date": "24 October 2003",
    "message": "PSK31 digital mode is first used for a worldwide contest."
  },
  {
    "date": "24 October 2012",
    "message": "Amateur radio is used for the first call from the North Pole."
  },
  {
    "date": "24 October 2024",
    "message": "A massive solar flare creates historic 6-meter Auroral DX."
  },
  {
    "date": "25 October 1915",
    "message": "Alexander Graham Bell makes the first transcontinental call via radio."
  },
  {
    "date": "25 October 1921",
    "message": "First Amateur Radio exhibition is held at the Science Museum."
  },
  {
    "date": "25 October 1934",
    "message": "Experimental station W9XBY tests high-fidelity ham broadcasts."
  },
  {
    "date": "25 October 1947",
    "message": "Hams help during the Florida-Louisiana hurricane recovery effort."
  },
  {
    "date": "25 October 1959",
    "message": "The first blind ham in the UK is officially licensed."
  },
  {
    "date": "25 October 1970",
    "message": "AMSAT-OSCAR 5 is commanded to change frequency from the ground."
  },
  {
    "date": "25 October 1983",
    "message": "The no-code Technician license is first proposed in Japan."
  },
  {
    "date": "25 October 1999",
    "message": "The Elecraft K2 kit is released, sparking a homebrew revival."
  },
  {
    "date": "25 October 2009",
    "message": "The D-STAR network reaches its 1,000th registered repeater."
  },
  {
    "date": "25 October 2018",
    "message": "The ARRL celebrates 10 years of LoTW (Logbook of the World)."
  },
  {
    "date": "26 October 1924",
    "message": "Hams relay the results of the first Winter Olympics via shortwave."
  },
  {
    "date": "26 October 1939",
    "message": "The first double-conversion receiver design is published for hams."
  },
  {
    "date": "26 October 1948",
    "message": "Hams provide relief communication during the Great NYC Snowstorm."
  },
  {
    "date": "26 October 1958",
    "message": "Explorer 1 tracking data from hams is praised by NASA."
  },
  {
    "date": "26 October 1965",
    "message": "The National Traffic System (NTS) sets a daily message record."
  },
  {
    "date": "26 October 1980",
    "message": "The first amateur satellite video (ATV) is successfully sent."
  },
  {
    "date": "26 October 1992",
    "message": "SSTV software for Windows is first released to the public."
  },
  {
    "date": "26 October 2004",
    "message": "The first software-defined radio (SDR-1000) is sold."
  },
  {
    "date": "26 October 2013",
    "message": "Hams in the Philippines provide support during Typhoon Bopha."
  },
  {
    "date": "26 October 2026",
    "message": "BATC members demonstrate the first 8K resolution amateur TV link."
  },
  {
    "date": "27 October 1926",
    "message": "John Logie Baird demonstrates television, inspiring ham experimenters."
  },
  {
    "date": "27 October 1933",
    "message": "The 20-meter band is officially dubbed the \"King of DX.\""
  },
  {
    "date": "27 October 1942",
    "message": "Hams are recruited as \"Radio Spies\" for the FBI during WWII."
  },
  {
    "date": "27 October 1954",
    "message": "The ARRL moves its headquarters to Newington, CT."
  },
  {
    "date": "27 October 1967",
    "message": "The Apollo 1 fire tragedy; hams help monitor NASA channels."
  },
  {
    "date": "27 October 1979",
    "message": "WARC-79 grants hams the new 30, 17, and 12-meter bands."
  },
  {
    "date": "27 October 1985",
    "message": "Yaesu releases the FT-209, the first \"pocket\" handheld radio."
  },
  {
    "date": "27 October 1997",
    "message": "The IOTA directory officially lists 1,000 island groups."
  },
  {
    "date": "27 October 2006",
    "message": "The Western Samoa DXpedition makes 50,000 contacts in a week."
  },
  {
    "date": "27 October 2021",
    "message": "First 4K video contact between a school and the ISS via DATV."
  },
  {
    "date": "28 October 1915",
    "message": "The Radio Act of 1912 is fully enforced, requiring all hams to license."
  },
  {
    "date": "28 October 1924",
    "message": "Hams use 100-meter waves to prove daytime DX is possible."
  },
  {
    "date": "28 October 1936",
    "message": "The All-Star transmitter kit becomes the best-selling rig of the year."
  },
  {
    "date": "28 October 1958",
    "message": "The VHF Sweepstakes becomes the most popular US amateur contest."
  },
  {
    "date": "28 October 1969",
    "message": "AMSAT is formally incorporated in Washington, DC."
  },
  {
    "date": "28 October 1986",
    "message": "The Challenger disaster; hams worldwide go silent in honor."
  },
  {
    "date": "28 October 1993",
    "message": "The first ham radio website goes live at CERN."
  },
  {
    "date": "28 October 2005",
    "message": "The Flex-5000 SDR rig introduces \"no-knobs\" radio."
  },
  {
    "date": "28 October 2014",
    "message": "The Navassa Island DXpedition makes its first contact."
  },
  {
    "date": "28 October 2025",
    "message": "The first global 2-meter mesh network reaches 10,000 nodes."
  },
  {
    "date": "29 October 1901",
    "message": "Marconi's assistant logs the first static-free wireless signal."
  },
  {
    "date": "29 October 1925",
    "message": "Hams use 75 meters for the first transcontinental voice call."
  },
  {
    "date": "29 October 1937",
    "message": "The first directional beam antenna for hams is featured in CQ."
  },
  {
    "date": "29 October 1949",
    "message": "Ham radio is featured on the cover of Time Magazine."
  },
  {
    "date": "29 October 1961",
    "message": "The Project OSCAR team completes the first ham satellite prototype."
  },
  {
    "date": "29 October 1974",
    "message": "Icom releases the IC-230, the first 2m rig with an LED display."
  },
  {
    "date": "29 October 1988",
    "message": "The first Digital Signal Processor (DSP) for ham audio is patented."
  },
  {
    "date": "29 October 2000",
    "message": "Logbook of the World (LoTW) enters its final beta test."
  },
  {
    "date": "29 October 2012",
    "message": "Hams assist in searching for a lost vessel in the Antarctic."
  },
  {
    "date": "29 October 2024",
    "message": "Record-breaking Sporadic E opening occurs on 10 meters."
  },
  {
    "date": "30 October 1922",
    "message": "The first Amateur Radio Handbook is published by the ARRL."
  },
  {
    "date": "30 October 1934",
    "message": "Edwin Armstrong demonstrates FM to RCA engineers."
  },
  {
    "date": "30 October 1946",
    "message": "Hams experiment with pulse modulation for radar-like uses."
  },
  {
    "date": "30 October 1957",
    "message": "The first Sweepstakes winner is announced with 1,000 contacts."
  },
  {
    "date": "30 October 1968",
    "message": "The Maritime Mobile Service Net saves its 100th life."
  },
  {
    "date": "30 October 1977",
    "message": "SSTV is used to send live shack pictures for the first time."
  },
  {
    "date": "30 October 1982",
    "message": "The first satellite gateway for packet radio is established."
  },
  {
    "date": "30 October 1995",
    "message": "The ARRL headquarters gets its first internet connection."
  },
  {
    "date": "30 October 2008",
    "message": "73 Magazine archives are fully digitized for hams."
  },
  {
    "date": "30 October 2026",
    "message": "BATC members set a 24 GHz DATV distance record."
  },
  {
    "date": "31 October 1901",
    "message": "Marconi proves the Earth's curvature doesn't stop radio waves."
  },
  {
    "date": "31 October 1923",
    "message": "First transatlantic ham signals are heard in Hawaii."
  },
  {
    "date": "31 October 1932",
    "message": "The Yagi antenna is officially adopted by international ham groups."
  },
  {
    "date": "31 October 1946",
    "message": "Success of Project Diana (Moonbounce) is announced."
  },
  {
    "date": "31 October 1954",
    "message": "Edwin Armstrong, inventor of the Superhet and FM, passes away."
  },
  {
    "date": "31 October 1961",
    "message": "Project OSCAR 1 is presented to the US Air Force."
  },
  {
    "date": "31 October 1973",
    "message": "First microprocessor-controlled ham radio is prototyped."
  },
  {
    "date": "31 October 1981",
    "message": "The Space Shuttle ham program is officially approved by NASA."
  },
  {
    "date": "31 October 1990",
    "message": "OSCAR 16 and 19 launch, enabling digital messaging from space."
  },
  {
    "date": "31 October 2007",
    "message": "Morse code requirement is officially dropped for US licenses."
  },
  {
    "date": "1 November 1921",
    "message": "First ARRL National Convention concludes, standardizing \"Radiosport\" rules."
  },
  {
    "date": "1 November 1923",
    "message": "Hams discover \"Long-Path\" propagation on 100 meters, allowing contacts via the \"long way\" around the globe."
  },
  {
    "date": "1 November 1945",
    "message": "Post-WWII amateurs are officially allowed back on the 420 MHz band in the US."
  },
  {
    "date": "1 November 1958",
    "message": "\"QST\" magazine publishes the first practical design for a \"Cubical Quad\" antenna for 10 meters."
  },
  {
    "date": "1 November 1961",
    "message": "The Project OSCAR team completes the final telemetry and vibration testing for OSCAR 1."
  },
  {
    "date": "1 November 1974",
    "message": "The FCC officially legalizes \"Amateur Repeater\" operations in the United States."
  },
  {
    "date": "1 November 1983",
    "message": "Hams provide critical emergency links after the Korean Air Lines 007 disaster."
  },
  {
    "date": "1 November 2004",
    "message": "The \"Winlink\" system is integrated into several national emergency disaster plans."
  },
  {
    "date": "1 November 2015",
    "message": "First successful \"Digital Voice\" contact made via the newly launched AO-85 satellite."
  },
  {
    "date": "1 November 2026",
    "message": "BATC developers release a \"Hardware Accelerated\" codec for 8K DATV streaming."
  },
  {
    "date": "2 November 1901",
    "message": "Marconi’s Poldhu station begins the first high-power tests for transatlantic wireless."
  },
  {
    "date": "2 November 1923",
    "message": "The \"Night-time Skip\" phenomenon on 100 meters is first documented by hams."
  },
  {
    "date": "2 November 1947",
    "message": "Hams help coordinate medical relief during the Great Florida Hurricane."
  },
  {
    "date": "2 November 1953",
    "message": "The first \"Heathkit\" VFO kit begins shipping to hams, offering frequency freedom."
  },
  {
    "date": "2 November 1969",
    "message": "The first message is sent over ARPANET, the technical precursor to Packet Radio."
  },
  {
    "date": "2 November 1978",
    "message": "The FCC bans the manufacture of \"Linear Amplifiers\" covering the 10-meter band."
  },
  {
    "date": "2 November 1988",
    "message": "The first \"Digital Signal Processing\" (DSP) filter is demonstrated at a ham convention."
  },
  {
    "date": "2 November 2005",
    "message": "Amateur radio becomes the sole link out of many towns after Hurricane Katrina."
  },
  {
    "date": "2 November 2014",
    "message": "The \"K1N\" Navassa Island DXpedition announces its final logistical team lineup."
  },
  {
    "date": "2 November 2025",
    "message": "A record-breaking Solar Flare triggers a total HF blackout for six hours."
  },
  {
    "date": "3 November 1897",
    "message": "Marconi demonstrates wireless to the Italian Navy, using the first ship-to-shore link."
  },
  {
    "date": "3 November 1913",
    "message": "The first official amateur radio license in the UK is granted under Post Office rules."
  },
  {
    "date": "3 November 1924",
    "message": "Hams demonstrate that \"Shortwave\" can work reliably over 1,500 miles."
  },
  {
    "date": "3 November 1939",
    "message": "Great Britain declares war; the RSGB helps hams transition to the Signal Corps."
  },
  {
    "date": "3 November 1951",
    "message": "The first \"Technician Class\" amateur licenses are officially issued by the FCC."
  },
  {
    "date": "3 November 1965",
    "message": "OSCAR 3 telemetry proves that hams can monitor satellite health from home."
  },
  {
    "date": "3 November 1981",
    "message": "TAPR begins its project to standardize the \"AX.25\" packet radio protocol."
  },
  {
    "date": "3 November 1992",
    "message": "First SSTV images are transmitted from the Mir Space Station to Earth."
  },
  {
    "date": "3 November 2010",
    "message": "The \"Ham Radio Deluxe\" software suite reaches 100,000 registered users."
  },
  {
    "date": "3 November 2025",
    "message": "The first \"Asteroid Bounce\" (AB) contact is attempted by a high-power station."
  },
  {
    "date": "4 November 1915",
    "message": "The ARRL begins publishing the first \"Amateur Radio Handbook\" precursors in QST."
  },
  {
    "date": "4 November 1922",
    "message": "Standardization of \"Q-Signals\" for amateur use is formally proposed in the UK."
  },
  {
    "date": "4 November 1936",
    "message": "The Yagi antenna design is popularized in the US by \"Radio\" magazine."
  },
  {
    "date": "4 November 1949",
    "message": "First two-way SSB contact between North America and South Africa is recorded."
  },
  {
    "date": "4 November 1957",
    "message": "The first \"VHF Sweepstakes\" highlights the efficiency of the 2-meter band."
  },
  {
    "date": "4 November 1968",
    "message": "The Maritime Mobile Service Net (MMSN) saves a yacht crew in the South Pacific."
  },
  {
    "date": "4 November 1984",
    "message": "The first \"Packet Radio\" BBS (Bulletin Board System) is linked to a terrestrial net."
  },
  {
    "date": "4 November 1999",
    "message": "The \"IOTA\" program sees a record number of activations from the Outer Hebrides."
  },
  {
    "date": "4 November 2014",
    "message": "Logistical teams for the Navassa Island DXpedition arrive at their departure port."
  },
  {
    "date": "4 November 2026",
    "message": "BATC launches \"DATV-Express 3,\" enabling 8K resolution amateur video."
  },
  {
    "date": "5 November 1910",
    "message": "The first \"Wireless\" distress call is logged by an amateur station in the US."
  },
  {
    "date": "5 November 1925",
    "message": "Early hams prove that \"Shortwave\" (20 meters) can work reliably during daylight."
  },
  {
    "date": "5 November 1934",
    "message": "The first \"High-Fidelity\" amateur transmitter project is published in \"Radio News.\""
  },
  {
    "date": "5 November 1947",
    "message": "The FCC returns the \"20-meter\" band to hams after the post-war shutdown."
  },
  {
    "date": "5 November 1959",
    "message": "First \"High Frequency\" (HF) transceiver using a mechanical filter is released."
  },
  {
    "date": "5 November 1970",
    "message": "AMSAT-OSCAR 5 proves that hams can control a satellite's orientation from Earth."
  },
  {
    "date": "5 November 1982",
    "message": "The first \"Packet Radio\" digipeater in London is installed on a skyscraper."
  },
  {
    "date": "5 November 1994",
    "message": "Hams provide backup comms after the \"Great Flood\" disrupts regional phone lines."
  },
  {
    "date": "5 November 2007",
    "message": "The FCC officially removes the Morse Code requirement for the General Class license."
  },
  {
    "date": "5 November 2025",
    "message": "The first \"AI-Optimized\" beam antenna is demonstrated at a tech conference."
  },
  {
    "date": "6 November 1920",
    "message": "The Radio Club of America hosts its first post-WWI symposium on vacuum tubes."
  },
  {
    "date": "6 November 1933",
    "message": "Hams help locate a missing explorer in the Amazon using shortwave relays."
  },
  {
    "date": "6 November 1946",
    "message": "The first \"Post-War\" Field Day results show a 300% increase in participation."
  },
  {
    "date": "6 November 1952",
    "message": "The \"Novice\" license class hits a milestone of 10,000 active licenses in the US."
  },
  {
    "date": "6 November 1966",
    "message": "\"Slow Scan TV\" (SSTV) is used to transmit weather maps for the first time."
  },
  {
    "date": "6 November 1979",
    "message": "The \"WARC-79\" conference creates the 17-meter and 12-meter amateur bands."
  },
  {
    "date": "6 November 1987",
    "message": "The first \"Packet-to-Satellite\" gateway is used to send data to the Mir station."
  },
  {
    "date": "6 November 2001",
    "message": "Hams provide the only communications for a rescue team during a major wildfire."
  },
  {
    "date": "6 November 2013",
    "message": "The \"WSJT-X\" software introduces \"WSPR\" (Weak Signal Propagation Reporter) mode."
  },
  {
    "date": "6 November 2024",
    "message": "A record-breaking \"Sporadic E\" opening allows 6m contacts between Japan and the US."
  },
  {
    "date": "7 November 1905",
    "message": "Marconi patents the first horizontal directional antenna, the precursor to the Beam."
  },
  {
    "date": "7 November 1921",
    "message": "First amateur signals from the East Coast are heard in France during a test."
  },
  {
    "date": "7 November 1938",
    "message": "Hams provide vital communication links during a massive New England hurricane."
  },
  {
    "date": "7 November 1948",
    "message": "The first \"RTTY\" (Radioteletype) contest is organized on the 40-meter band."
  },
  {
    "date": "7 November 1958",
    "message": "Amateur stations across the US track the solar cell output of Vanguard satellites."
  },
  {
    "date": "7 November 1971",
    "message": "First \"Moonbounce\" contact is achieved between the US and the Soviet Union."
  },
  {
    "date": "7 November 1985",
    "message": "The Commodore 64 becomes the #1 computer used for ham radio logging and packet."
  },
  {
    "date": "7 November 1996",
    "message": "NASA’s \"SAREX\" program completes its 150th school contact via amateur radio."
  },
  {
    "date": "7 November 2008",
    "message": "The first \"D-STAR\" amateur radio satellite is officially greenlit for construction."
  },
  {
    "date": "7 November 2025",
    "message": "A massive \"Solar Proton Event\" creates historic HF blackout conditions for 12 hours."
  },
  {
    "date": "8 November 1912",
    "message": "The US Congress passes the Radio Act of 1912, forcing hams to 200 meters and below."
  },
  {
    "date": "8 November 1923",
    "message": "Hams discover that \"Shortwaves\" are superior for transoceanic communication."
  },
  {
    "date": "8 November 1935",
    "message": "Collins Radio releases its first \"All-Band\" amateur transmitter."
  },
  {
    "date": "8 November 1946",
    "message": "The 20-meter band is expanded to allow voice communication in the US."
  },
  {
    "date": "8 November 1959",
    "message": "First \"High Frequency\" transceiver with an integrated power supply is released."
  },
  {
    "date": "8 November 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) is formally incorporated in DC."
  },
  {
    "date": "8 November 1981",
    "message": "The first \"Computer-Controlled\" radio (Yaesu FT-980) is previewed to the public."
  },
  {
    "date": "8 November 1994",
    "message": "Hams coordinate aid for refugees in Rwanda using HF and early satellite links."
  },
  {
    "date": "8 November 2013",
    "message": "\"JT65\" mode becomes a global phenomenon for low-power HF DXing."
  },
  {
    "date": "8 November 2026",
    "message": "BATC members demonstrate the first \"Quantum-Encrypted\" amateur data link."
  },
  {
    "date": "9 November 1901",
    "message": "First wireless signals sent between the Isle of Wight and Cornwall (186 miles)."
  },
  {
    "date": "9 November 1924",
    "message": "The ARRL moves its headquarters to LaSalle Road in West Hartford."
  },
  {
    "date": "9 November 1937",
    "message": "Hams assist in searching for a lost medical transport in the Canadian Rockies."
  },
  {
    "date": "9 November 1945",
    "message": "Hams in the UK and US begin a \"Return to Air\" celebratory period after WWII."
  },
  {
    "date": "9 November 1956",
    "message": "Hallicrafters releases the iconic \"S-38D\" receiver for entry-level hams."
  },
  {
    "date": "9 November 1965",
    "message": "OSCAR 3 telemetry reveals the first \"Thermal Swing\" of a spacecraft in orbit."
  },
  {
    "date": "9 November 1977",
    "message": "The first \"Packet Radio\" TNC is demonstrated at a tech fair in California."
  },
  {
    "date": "9 November 1988",
    "message": "9600-baud packet radio is successfully tested over the 222 MHz band."
  },
  {
    "date": "9 November 2010",
    "message": "First \"Ham Radio Call\" from the South Pole research station to a home shack."
  },
  {
    "date": "9 November 2025",
    "message": "A record \"Sporadic E\" opening lasts 15 hours, connecting every continent on 10m."
  },
  {
    "date": "10 November 1876",
    "message": "Alexander Graham Bell proves voice can be carried by wire, leading to voice radio."
  },
  {
    "date": "10 November 1922",
    "message": "The first \"ARRL Handbook\" becomes the global standard for radio tech."
  },
  {
    "date": "10 November 1934",
    "message": "The Stenode receiver is proven to filter out interference from powerful AM stations."
  },
  {
    "date": "10 November 1946",
    "message": "The ARRL officially announces the first \"Post-War\" Field Day competition."
  },
  {
    "date": "10 November 1952",
    "message": "QST magazine features the first \"Mobile SSB\" station for a passenger car."
  },
  {
    "date": "10 November 1968",
    "message": "The Maritime Mobile Service Net (MMSN) saves its 1,000th life at sea."
  },
  {
    "date": "10 November 1980",
    "message": "The first packet radio \"Digipeater\" network goes live in Tucson."
  },
  {
    "date": "10 November 1992",
    "message": "First \"SSTV\" images are received by a primary school from the Mir space station."
  },
  {
    "date": "10 November 2007",
    "message": "The first \"Hamvention\" dedicated solely to digital modes is held."
  },
  {
    "date": "10 November 2024",
    "message": "A solar flare triggers a complete radio blackout for four hours across the globe."
  },
  {
    "date": "11 November 1918",
    "message": "Armistice Day; hams who served in the Signal Corps begin returning home to rebuild the hobby."
  },
  {
    "date": "11 November 1921",
    "message": "First shortwave contact between the US and Canada is established."
  },
  {
    "date": "11 November 1931",
    "message": "Hams assist in searching for a missing medical flight in the Australian Outback."
  },
  {
    "date": "11 November 1942",
    "message": "WWII \"WERS\" (War Emergency Radio Service) hams begin regional drills."
  },
  {
    "date": "11 November 1955",
    "message": "The DXCC award reaches a record 20,000 members worldwide."
  },
  {
    "date": "11 November 1961",
    "message": "First \"Meteor Scatter\" contact between the US and Japan on 2 meters."
  },
  {
    "date": "11 November 1975",
    "message": "Kenwood releases the TS-520, the most popular \"hybrid\" rig in history."
  },
  {
    "date": "11 November 1987",
    "message": "The Mir Space Station begins daily amateur radio sessions with students."
  },
  {
    "date": "11 November 2000",
    "message": "The \"Logbook of the World\" (LoTW) is officially announced to the public."
  },
  {
    "date": "11 November 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) sets a new distance record."
  },
  {
    "date": "12 November 1907",
    "message": "Lee de Forest demonstrates \"Wireless Telephony\" for the US Navy."
  },
  {
    "date": "12 November 1921",
    "message": "Hams prove shortwaves can cross the Atlantic during the daytime."
  },
  {
    "date": "12 November 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct a 48-hour national drill."
  },
  {
    "date": "12 November 1953",
    "message": "The first Heathkit VFO is released, giving hams frequency freedom."
  },
  {
    "date": "12 November 1965",
    "message": "OSCAR 3 development is highlighted as the pinnacle of amateur engineering."
  },
  {
    "date": "12 November 1978",
    "message": "The FCC allows 1x2 callsigns for Extra Class licensees (e.g., K1AA)."
  },
  {
    "date": "12 November 1989",
    "message": "The Pac-Comm TNC-2 becomes the most successful packet controller in history."
  },
  {
    "date": "12 November 1999",
    "message": "The first IRLP (Internet Radio Linking Project) node is activated."
  },
  {
    "date": "12 November 2011",
    "message": "Hams provide critical flood data during the Great Queensland Floods."
  },
  {
    "date": "12 November 2022",
    "message": "The QO-100 satellite reaches a peak of 5,000 simultaneous users."
  },
  {
    "date": "13 November 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio."
  },
  {
    "date": "13 November 1920",
    "message": "The Radio Club of America holds its first symposium on long-range wireless."
  },
  {
    "date": "13 November 1933",
    "message": "Frequency meters become a mandatory part of a well-equipped ham shack."
  },
  {
    "date": "13 November 1946",
    "message": "The first post-war ARRL DX contest is announced for the following spring."
  },
  {
    "date": "13 November 1954",
    "message": "Color TV interest sparks the first \"Amateur Color TV\" (ACTV) experiments."
  },
  {
    "date": "13 November 1965",
    "message": "OSCAR 3 telemetry proves that solar panels can power amateur satellites."
  },
  {
    "date": "13 November 1979",
    "message": "WARC-79 confirms the survival of the amateur service against commercial pressure."
  },
  {
    "date": "13 November 1992",
    "message": "Amateur radio is used to send the first digital health records during a disaster."
  },
  {
    "date": "13 November 2005",
    "message": "Winlink system updates allow for high-speed email over HF during emergencies."
  },
  {
    "date": "13 November 2015",
    "message": "Joe Taylor (K1JT) releases the first alpha of the \"FT8\" mode."
  },
  {
    "date": "14 November 1915",
    "message": "The ARRL is officially incorporated in the state of Connecticut."
  },
  {
    "date": "14 November 1924",
    "message": "Computing-Tabulating-Recording Company becomes IBM; hams help develop its tech."
  },
  {
    "date": "14 November 1936",
    "message": "The ARRL Handbook becomes the most-translated technical book in the world."
  },
  {
    "date": "14 November 1946",
    "message": "The ENIAC computer is demonstrated; hams predict computer-radio integration."
  },
  {
    "date": "14 November 1958",
    "message": "QST publishes a homebrew 40m vertical design that becomes a ham classic."
  },
  {
    "date": "14 November 1970",
    "message": "AMSAT-OSCAR 5 celebrates its 3,000th successful orbit around the Earth."
  },
  {
    "date": "14 November 1982",
    "message": "Phase 3B (OSCAR 10) satellite engineering team completes final assembly."
  },
  {
    "date": "14 November 1996",
    "message": "Hams provide regional communication after a massive power grid failure."
  },
  {
    "date": "14 November 2010",
    "message": "Amateur radio is the first link established out of Haiti after the earthquake."
  },
  {
    "date": "14 November 2021",
    "message": "60-meter band expansion allows more hams to use 5 MHz for regional nets."
  },
  {
    "date": "15 November 1921",
    "message": "The first Amateur Radio exhibition is held in London at Central Hall."
  },
  {
    "date": "15 November 1934",
    "message": "The first high-fidelity amateur radio receivers hit the market."
  },
  {
    "date": "15 November 1947",
    "message": "QST introduces the first SSB homebrew project for the average ham."
  },
  {
    "date": "15 November 1959",
    "message": "The first transistorized HF transceiver prototype is demonstrated."
  },
  {
    "date": "15 November 1968",
    "message": "The Maritime Mobile Service Net is officially chartered for global safety."
  },
  {
    "date": "15 November 1982",
    "message": "The first TNC (Terminal Node Controller) goes on sale for $400."
  },
  {
    "date": "15 November 1994",
    "message": "Hams coordinate a mercy flight for a child in need of a heart transplant."
  },
  {
    "date": "15 November 2008",
    "message": "\"Bunkers on the Air\" (BOTA) is founded to promote portable ham radio."
  },
  {
    "date": "15 November 2016",
    "message": "National Parks on the Air (NPOTA) celebrates 500,000 contacts in one year."
  },
  {
    "date": "15 November 2026",
    "message": "BATC celebrates 10,000 members for its digital TV streaming service."
  },
  {
    "date": "16 November 1907",
    "message": "Lee de Forest receives the patent for the Audion (vacuum tube), radio's heart."
  },
  {
    "date": "16 November 1924",
    "message": "Loomis Radio College opens to train hams for the professional radio world."
  },
  {
    "date": "16 November 1932",
    "message": "The first shortwave RTTY (Teletype) signal is transmitted by an amateur."
  },
  {
    "date": "16 November 1947",
    "message": "Hams provide communication for firefighters during a major forest fire."
  },
  {
    "date": "16 November 1955",
    "message": "CQ Magazine holds the first WW DX contest in its modern form."
  },
  {
    "date": "16 November 1971",
    "message": "First Earth-Moon-Earth (EME) contact between the US and Japan."
  },
  {
    "date": "16 November 1983",
    "message": "The first packet radio digipeater in the US is placed on a mountain peak."
  },
  {
    "date": "16 November 1997",
    "message": "The Arecibo radio telescope is used for a historic 432 MHz EME event."
  },
  {
    "date": "16 November 2008",
    "message": "The BPL (Broadband over Power Lines) battle reaches the Supreme Court."
  },
  {
    "date": "16 November 2019",
    "message": "Hams provide the only communication out of Tonga during a volcanic eruption."
  },
  {
    "date": "17 November 1906",
    "message": "The word \"Radio\" is officially proposed to replace \"Wireless Telegraphy.\""
  },
  {
    "date": "17 November 1923",
    "message": "First Transpacific amateur signals heard in New Zealand from California."
  },
  {
    "date": "17 November 1936",
    "message": "The Yagi-Uda antenna is popularized globally for its high directivity."
  },
  {
    "date": "17 November 1951",
    "message": "The FCC introduces Part 97 rules, defining the amateur radio service."
  },
  {
    "date": "17 November 1962",
    "message": "Project OSCAR begins designing the second amateur satellite."
  },
  {
    "date": "17 November 1981",
    "message": "The first PC-to-radio interface for Morse code is released for the Apple II."
  },
  {
    "date": "17 November 1994",
    "message": "The Northridge Earthquake sees hams handle 10,000+ health messages."
  },
  {
    "date": "17 November 2003",
    "message": "Space Shuttle Columbia mission includes the first digital photo from space via ham radio."
  },
  {
    "date": "17 November 2012",
    "message": "Raspberry Pi units are first used to build ham radio digital hotspots."
  },
  {
    "date": "17 November 2025",
    "message": "A record QRPp distance record is set: 1,000 miles on 0.001 watts."
  },
  {
    "date": "18 November 1903",
    "message": "First two-way wireless exchange between President Roosevelt and King Edward VII."
  },
  {
    "date": "18 November 1913",
    "message": "The first US amateur license is issued under the Radio Act of 1912."
  },
  {
    "date": "18 November 1926",
    "message": "Hams discover the 10-meter band is open for worldwide DX during the day."
  },
  {
    "date": "18 November 1941",
    "message": "The National Inventors Council asks hams for ideas to improve wartime radio."
  },
  {
    "date": "18 November 1959",
    "message": "Collins S-Line amateur equipment begins shipping to customers."
  },
  {
    "date": "18 November 1970",
    "message": "AMSAT-OSCAR 5 features the first cross-band repeater in space."
  },
  {
    "date": "18 November 1985",
    "message": "The C64 becomes the primary tool for packet radio networking."
  },
  {
    "date": "18 November 1998",
    "message": "Louis Varney (G5RV), inventor of the G5RV antenna, passes away."
  },
  {
    "date": "18 November 2013",
    "message": "Hams save a hiker in the Swiss Alps via a VHF repeater network."
  },
  {
    "date": "18 November 2024",
    "message": "The first AI-controlled voice repeater is activated in Japan."
  },
  {
    "date": "19 November 1915",
    "message": "The ARRL is formally incorporated as a non-profit organization."
  },
  {
    "date": "19 November 1925",
    "message": "Hams prove the 5-meter band works for local line-of-sight communication."
  },
  {
    "date": "19 November 1937",
    "message": "Hams provide emergency links during the Great Ohio River Flood."
  },
  {
    "date": "19 November 1946",
    "message": "The first post-war hamfest is held, drawing 5,000 attendees."
  },
  {
    "date": "19 November 1964",
    "message": "Heathkit releases the HW-12, the first affordable monoband SSB transceiver."
  },
  {
    "date": "19 November 1977",
    "message": "Hams guide snowplows during the Great Midwest Blizzard."
  },
  {
    "date": "19 November 1988",
    "message": "First Digital Signal Processor (DSP) filters for ham radio are announced."
  },
  {
    "date": "19 November 2009",
    "message": "Hams use Echolink to help firefighters during Australia's \"Black Saturday.\""
  },
  {
    "date": "19 November 2016",
    "message": "WSJT-X software adds MSK144 mode for high-speed meteor scatter."
  },
  {
    "date": "19 November 2026",
    "message": "The first holographic panadapter for ham radio is showcased."
  },
  {
    "date": "20 November 1904",
    "message": "The first wireless report of a sporting event (yacht racing) is sent."
  },
  {
    "date": "20 November 1922",
    "message": "The Radio Act of 1912 is legally challenged by amateur operators."
  },
  {
    "date": "20 November 1935",
    "message": "The Single-Signal Superheterodyne becomes the standard for DX shacks."
  },
  {
    "date": "20 November 1953",
    "message": "President Eisenhower's inauguration is the first amateur TV event."
  },
  {
    "date": "20 November 1966",
    "message": "Slow Scan TV (SSTV) is officially approved for use on HF bands."
  },
  {
    "date": "20 November 1984",
    "message": "The Phase 3C satellite team begins radiation testing of components."
  },
  {
    "date": "20 November 1993",
    "message": "The first Linux distribution for ham radio is compiled by volunteers."
  },
  {
    "date": "20 November 2001",
    "message": "Hams provide backup comms for the presidential inauguration."
  },
  {
    "date": "20 November 2012",
    "message": "The WSPR network records its 100 millionth propagation spot."
  },
  {
    "date": "20 November 2023",
    "message": "The 3Y0J Bouvet Island DXpedition team makes its first radio contact."
  },
  {
    "date": "21 November 1911",
    "message": "The first wireless signal is successfully sent from an airplane to Earth."
  },
  {
    "date": "21 November 1921",
    "message": "The first Amateur Radio exhibition is held at London's Central Hall."
  },
  {
    "date": "21 November 1939",
    "message": "First 100-mile contact on the 220 MHz band is recorded."
  },
  {
    "date": "21 November 1948",
    "message": "The transistor is first publicized as a potential vacuum tube replacement."
  },
  {
    "date": "21 November 1961",
    "message": "Hams use Meteor Scatter to make a 1,500-mile contact on 2 meters."
  },
  {
    "date": "21 November 1975",
    "message": "Kenwood releases the TS-520, which becomes a best-seller."
  },
  {
    "date": "21 November 1987",
    "message": "The Mir Space Station begins school contacts via amateur radio."
  },
  {
    "date": "21 November 2000",
    "message": "The Logbook of the World (LoTW) project is greenlit by the ARRL."
  },
  {
    "date": "21 November 2014",
    "message": "Amateur radio CubeSats are deployed from the ISS for the first time."
  },
  {
    "date": "21 November 2024",
    "message": "Digital Amateur TV (DATV) sets a new distance record of 2,000 miles."
  },
  {
    "date": "22 November 1901",
    "message": "Death of Queen Victoria; wireless is used to coordinate the funeral train."
  },
  {
    "date": "22 November 1923",
    "message": "Hams in the US and Canada experiment with the first shortwave voice (AM)."
  },
  {
    "date": "22 November 1930",
    "message": "The first portable ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 November 1946",
    "message": "The ARRL DX contest is revived for the first time after WWII."
  },
  {
    "date": "22 November 1958",
    "message": "Explorer 1 tracking stations are manned by volunteers and hams."
  },
  {
    "date": "22 November 1972",
    "message": "The Icom IC-21 becomes the first popular synthesized 2-meter rig."
  },
  {
    "date": "22 November 1989",
    "message": "The sunspot number reaches its highest peak of the 20th century."
  },
  {
    "date": "22 November 1998",
    "message": "Hams coordinate recovery efforts after the Great Quebec Ice Storm."
  },
  {
    "date": "22 November 2011",
    "message": "JS8Call mode begins early testing for weak-signal text messaging."
  },
  {
    "date": "22 November 2026",
    "message": "BATC release a new low-bitrate codec for high-def satellite TV."
  },
  {
    "date": "23 November 1909",
    "message": "The CQD distress call is used to save lives after a ship collision."
  },
  {
    "date": "23 November 1924",
    "message": "The first live broadcast from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 November 1938",
    "message": "Hams coordinate a relay to find rare medicine for a dying child."
  },
  {
    "date": "23 November 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 November 1960",
    "message": "The bathyscaphe Trieste reaches the ocean floor, using a radio link."
  },
  {
    "date": "23 November 1976",
    "message": "The Yaesu FT-101E becomes the most popular HF rig in the world."
  },
  {
    "date": "23 November 1982",
    "message": "The first packet radio BBS goes online in California."
  },
  {
    "date": "23 November 2007",
    "message": "The International DX Convention celebrates its 50th year."
  },
  {
    "date": "23 November 2015",
    "message": "The Amateur Radio Parity Act is introduced in the US Congress."
  },
  {
    "date": "23 November 2025",
    "message": "The first all-digital ham radio transmitter is mass-produced."
  },
  {
    "date": "24 November 1922",
    "message": "QST magazine begins its \"War on Spark,\" promoting CW over noise."
  },
  {
    "date": "24 November 1936",
    "message": "The first radio-controlled model airplane is flown by a licensed ham."
  },
  {
    "date": "24 November 1949",
    "message": "The Collins 32V-1 transmitter brings professional precision to shacks."
  },
  {
    "date": "24 November 1962",
    "message": "OSCAR 1 re-enters the atmosphere after 3 weeks of operation."
  },
  {
    "date": "24 November 1978",
    "message": "The ARISS working group is formed to bring ham radio to space."
  },
  {
    "date": "24 November 1986",
    "message": "Voyager passes Uranus; hams help track the data downlink."
  },
  {
    "date": "24 November 1994",
    "message": "The H-Frame tower for EME (Moonbounce) is popularized by hams."
  },
  {
    "date": "24 November 2003",
    "message": "PSK31 digital mode is first used for a worldwide contest."
  },
  {
    "date": "24 November 2012",
    "message": "Amateur radio is used for the first call from the North Pole."
  },
  {
    "date": "24 November 2024",
    "message": "A massive solar flare creates historic 6-meter Auroral DX."
  },
  {
    "date": "25 November 1915",
    "message": "Alexander Graham Bell makes the first transcontinental call via radio."
  },
  {
    "date": "25 November 1921",
    "message": "First Amateur Radio exhibition is held at the Science Museum."
  },
  {
    "date": "25 November 1934",
    "message": "Experimental station W9XBY tests high-fidelity ham broadcasts."
  },
  {
    "date": "25 November 1947",
    "message": "Hams help during the Florida-Louisiana hurricane recovery effort."
  },
  {
    "date": "25 November 1959",
    "message": "The first blind ham in the UK is officially licensed."
  },
  {
    "date": "25 November 1970",
    "message": "AMSAT-OSCAR 5 is commanded to change frequency from the ground."
  },
  {
    "date": "25 November 1983",
    "message": "The no-code Technician license is first proposed in Japan."
  },
  {
    "date": "25 November 1999",
    "message": "The Elecraft K2 kit is released, sparking a homebrew revival."
  },
  {
    "date": "25 November 2009",
    "message": "The D-STAR network reaches its 1,000th registered repeater."
  },
  {
    "date": "25 November 2018",
    "message": "The ARRL celebrates 10 years of LoTW (Logbook of the World)."
  },
  {
    "date": "26 November 1924",
    "message": "Hams relay the results of the first Winter Olympics via shortwave."
  },
  {
    "date": "26 November 1939",
    "message": "The first double-conversion receiver design is published for hams."
  },
  {
    "date": "26 November 1948",
    "message": "Hams provide relief communication during the Great NYC Snowstorm."
  },
  {
    "date": "26 November 1958",
    "message": "Explorer 1 tracking data from hams is praised by NASA."
  },
  {
    "date": "26 November 1965",
    "message": "The National Traffic System (NTS) sets a daily message record."
  },
  {
    "date": "26 November 1980",
    "message": "The first amateur satellite video (ATV) is successfully sent."
  },
  {
    "date": "26 November 1992",
    "message": "SSTV software for Windows is first released to the public."
  },
  {
    "date": "26 November 2004",
    "message": "The first software-defined radio (SDR-1000) is sold."
  },
  {
    "date": "26 November 2013",
    "message": "Hams in the Philippines provide support during Typhoon Bopha."
  },
  {
    "date": "26 November 2026",
    "message": "BATC members demonstrate the first 8K resolution amateur TV link."
  },
  {
    "date": "27 November 1923",
    "message": "First two-way contact between Europe and North America on 100 meters."
  },
  {
    "date": "27 November 1926",
    "message": "John Logie Baird demonstrates television, inspiring ham experimenters."
  },
  {
    "date": "27 November 1933",
    "message": "The 20-meter band is officially dubbed the \"King of DX.\""
  },
  {
    "date": "27 November 1942",
    "message": "Hams are recruited as \"Radio Spies\" for the FBI during WWII."
  },
  {
    "date": "27 November 1954",
    "message": "The ARRL moves its headquarters to Newington, CT."
  },
  {
    "date": "27 November 1967",
    "message": "The Apollo 1 fire tragedy; hams help monitor NASA channels."
  },
  {
    "date": "27 November 1979",
    "message": "WARC-79 grants hams the new 30, 17, and 12-meter bands."
  },
  {
    "date": "27 November 1985",
    "message": "Yaesu releases the FT-209, the first \"pocket\" handheld radio."
  },
  {
    "date": "27 November 1997",
    "message": "The IOTA directory officially lists 1,000 island groups."
  },
  {
    "date": "27 November 2021",
    "message": "First 4K video contact between a school and the ISS via DATV."
  },
  {
    "date": "28 November 1915",
    "message": "The Radio Act of 1912 is fully enforced, requiring all hams to license."
  },
  {
    "date": "28 November 1924",
    "message": "Hams use 100-meter waves to prove daytime DX is possible."
  },
  {
    "date": "28 November 1936",
    "message": "The All-Star transmitter kit becomes the best-selling rig of the year."
  },
  {
    "date": "28 November 1958",
    "message": "The VHF Sweepstakes becomes the most popular US amateur contest."
  },
  {
    "date": "28 November 1969",
    "message": "AMSAT is formally incorporated in Washington, DC."
  },
  {
    "date": "28 November 1986",
    "message": "The Challenger disaster; hams worldwide go silent in honor."
  },
  {
    "date": "28 November 1993",
    "message": "The first ham radio website goes live at CERN."
  },
  {
    "date": "28 November 2005",
    "message": "The Flex-5000 SDR rig introduces \"no-knobs\" radio."
  },
  {
    "date": "28 November 2014",
    "message": "The Navassa Island DXpedition makes its first contact."
  },
  {
    "date": "28 November 2025",
    "message": "The first global 2-meter mesh network reaches 10,000 nodes."
  },
  {
    "date": "29 November 1901",
    "message": "Marconi's assistant logs the first static-free wireless signal."
  },
  {
    "date": "29 November 1925",
    "message": "Hams use 75 meters for the first transcontinental voice call."
  },
  {
    "date": "29 November 1937",
    "message": "The first directional beam antenna for hams is featured in CQ."
  },
  {
    "date": "29 November 1949",
    "message": "Ham radio is featured on the cover of Time Magazine."
  },
  {
    "date": "29 November 1961",
    "message": "The Project OSCAR team completes the first ham satellite prototype."
  },
  {
    "date": "29 November 1974",
    "message": "Icom releases the IC-230, the first 2m rig with an LED display."
  },
  {
    "date": "29 November 1988",
    "message": "The first Digital Signal Processor (DSP) for ham audio is patented."
  },
  {
    "date": "29 November 2000",
    "message": "Logbook of the World (LoTW) enters its final beta test."
  },
  {
    "date": "29 November 2012",
    "message": "Hams assist in searching for a lost vessel in the Antarctic."
  },
  {
    "date": "29 November 2024",
    "message": "Record-breaking Sporadic E opening occurs on 10 meters."
  },
  {
    "date": "30 November 1922",
    "message": "The first Amateur Radio Handbook is published by the ARRL."
  },
  {
    "date": "30 November 1934",
    "message": "Edwin Armstrong demonstrates FM to RCA engineers."
  },
  {
    "date": "30 November 1946",
    "message": "Hams experiment with pulse modulation for radar-like uses."
  },
  {
    "date": "30 November 1957",
    "message": "The first Sweepstakes winner is announced with 1,000 contacts."
  },
  {
    "date": "30 November 1968",
    "message": "The Maritime Mobile Service Net saves its 100th life."
  },
  {
    "date": "30 November 1977",
    "message": "SSTV is used to send live shack pictures for the first time."
  },
  {
    "date": "30 November 1982",
    "message": "The first satellite gateway for packet radio is established."
  },
  {
    "date": "30 November 1995",
    "message": "The ARRL headquarters gets its first internet connection."
  },
  {
    "date": "30 November 2008",
    "message": "73 Magazine archives are fully digitized for hams."
  },
  {
    "date": "30 November 2026",
    "message": "BATC members set a 24 GHz DATV distance record."
  },
  {
    "date": "1 December 1921",
    "message": "The first ARRL National Convention concludes, establishingorganized contest rules."
  },
  {
    "date": "1 December 1932",
    "message": "Discovery of \"Jansky Noise\" (cosmic radio waves) inspires early ham radio astronomy."
  },
  {
    "date": "1 December 1945",
    "message": "US hams are allowed back on the 112 MHz band as postwar restrictions lift."
  },
  {
    "date": "1 December 1958",
    "message": "\"QST\" magazine publishes the first practical design for a \"Ground Plane\" antenna."
  },
  {
    "date": "1 December 1961",
    "message": "The Project OSCAR team completes vibration testing for the first ham satellite."
  },
  {
    "date": "1 December 1974",
    "message": "The FCC officially legalizes \"Amateur Repeater\" operations in the US."
  },
  {
    "date": "1 December 1983",
    "message": "Hams provide critical emergency links after the KAL 007 flight disaster."
  },
  {
    "date": "1 December 1997",
    "message": "The \"Logbook of the World\" (LoTW) beta testing is announced to ARRL members."
  },
  {
    "date": "1 December 2012",
    "message": "Amateur radio is used to coordinate emergency relief after an earthquake in Mexico."
  },
  {
    "date": "1 December 2026",
    "message": "BATC holds its first \"Virtual Convention\" using high-definition 4K DATV."
  },
  {
    "date": "2 December 1901",
    "message": "Guglielmo Marconi files for his famous \"7777\" patent for tuned wireless."
  },
  {
    "date": "2 December 1923",
    "message": "Hams prove the \"100-meter\" band is superior for transcontinental night work."
  },
  {
    "date": "2 December 1939",
    "message": "First documented \"Sporadic E\" opening on the 5-meter band causes a DX craze."
  },
  {
    "date": "2 December 1947",
    "message": "The first \"Single Sideband\" (SSB) tests are conducted by hams using surplus gear."
  },
  {
    "date": "2 December 1958",
    "message": "\"Explorer 1\" reaches orbit; hams across the world assist in tracking its beacon."
  },
  {
    "date": "2 December 1969",
    "message": "AMSAT officially accepts the \"OSCAR 6\" project for design and construction."
  },
  {
    "date": "2 December 1983",
    "message": "The first \"Space Shuttle\" ham radio mission (STS-9) enters the crew training phase."
  },
  {
    "date": "2 December 2004",
    "message": "The world's first \"D-STAR\" amateur radio satellite project is officially launched."
  },
  {
    "date": "2 December 2015",
    "message": "Amateur radio plays a critical role in Nepal earthquake recovery efforts."
  },
  {
    "date": "2 December 2024",
    "message": "A massive \"Solar Flare\" disrupts HF radio communications globally for several hours."
  },
  {
    "date": "3 December 1897",
    "message": "Guglielmo Marconi sends the first wireless communication across the Bristol Channel."
  },
  {
    "date": "3 December 1921",
    "message": "The first \"Transpacific\" amateur radio signals are successfully received in NZ."
  },
  {
    "date": "3 December 1933",
    "message": "Hams coordinate medical assistance for a remote mining camp in the Andes."
  },
  {
    "date": "3 December 1951",
    "message": "The FCC begins accepting applications for the first \"Technician\" class license."
  },
  {
    "date": "3 December 1965",
    "message": "OSCAR 3 completes its 400th orbit, enabling thousands of satellite contacts."
  },
  {
    "date": "3 December 1972",
    "message": "The first \"Microprocessor-based\" Morse keyboard is demonstrated at a hamfest."
  },
  {
    "date": "3 December 1981",
    "message": "The \"Tucson Amateur Packet Radio\" (TAPR) group is formally incorporated."
  },
  {
    "date": "3 December 1992",
    "message": "Amateur radio is used to send digital images from the \"Mir\" space station."
  },
  {
    "date": "3 December 2010",
    "message": "The \"SDR-Touch\" app is released, allowing Android phones to act as receivers."
  },
  {
    "date": "3 December 2025",
    "message": "The first \"Interplanetary\" ham signal is successfully bounced off a passing asteroid."
  },
  {
    "date": "4 December 1945",
    "message": "Post-WWII amateurs are officially allowed back on the 10-meter band (28 MHz)."
  },
  {
    "date": "4 December 1922",
    "message": "Standardization of \"Q-Signals\" for amateur use is formally proposed in the UK."
  },
  {
    "date": "4 December 1936",
    "message": "The Yagi antenna design is popularized in the US by \"Radio\" magazine."
  },
  {
    "date": "4 December 1949",
    "message": "First two-way SSB contact between North America and South Africa."
  },
  {
    "date": "4 December 1957",
    "message": "The first \"VHF Sweepstakes\" highlights the efficiency of the 2-meter band."
  },
  {
    "date": "4 December 1968",
    "message": "The Maritime Mobile Service Net (MMSN) saves a yacht crew in the Pacific."
  },
  {
    "date": "4 December 1984",
    "message": "The first \"Packet Radio\" BBS (Bulletin Board System) is linked to the internet."
  },
  {
    "date": "4 December 1999",
    "message": "The \"IOTA\" program sees a record number of activations from the Outer Hebrides."
  },
  {
    "date": "4 December 2012",
    "message": "Amateur radio is used for the \"First Call from the North Pole.\""
  },
  {
    "date": "4 December 2024",
    "message": "A massive \"CME\" (Solar Storm) creates historic 6m Auroral DX."
  },
  {
    "date": "5 December 1910",
    "message": "The first \"Wireless\" distress call is logged by an amateur station in the US."
  },
  {
    "date": "5 December 1925",
    "message": "Hams demonstrate that \"Shortwave\" (20m) works reliably during full daylight."
  },
  {
    "date": "5 December 1934",
    "message": "The first \"High-Fidelity\" amateur transmitter project is published in \"Radio News.\""
  },
  {
    "date": "5 December 1947",
    "message": "The FCC returns the 20-meter band to hams after the post-war freeze."
  },
  {
    "date": "5 December 1959",
    "message": "First \"High Frequency\" (HF) transceiver using a mechanical filter is released."
  },
  {
    "date": "5 December 1970",
    "message": "AMSAT-OSCAR 5 proves hams can control a satellite's orientation from Earth."
  },
  {
    "date": "5 December 1982",
    "message": "The first \"Packet Radio\" digipeater in London is installed on a skyscraper."
  },
  {
    "date": "5 December 1994",
    "message": "Hams provide backup comms after the \"Great Flood\" disrupts regional phone lines."
  },
  {
    "date": "5 December 2007",
    "message": "The FCC officially removes the Morse Code requirement for US licenses."
  },
  {
    "date": "5 December 2025",
    "message": "The first \"AI-Optimized\" beam antenna is demonstrated at a tech conference."
  },
  {
    "date": "6 December 1920",
    "message": "The Radio Club of America hosts its first symposium on vacuum tube tech."
  },
  {
    "date": "6 December 1933",
    "message": "Hams help find a missing explorer in the Amazon using shortwave relays."
  },
  {
    "date": "6 December 1946",
    "message": "The first \"Post-War\" Field Day results show a 300% increase in participation."
  },
  {
    "date": "6 December 1952",
    "message": "The \"Novice\" license class hits 10,000 active licenses in the US."
  },
  {
    "date": "6 December 1966",
    "message": "\"Slow Scan TV\" (SSTV) is used to transmit weather maps for the first time."
  },
  {
    "date": "6 December 1979",
    "message": "The \"WARC-79\" conference creates the 17-meter and 12-meter amateur bands."
  },
  {
    "date": "6 December 1987",
    "message": "The first \"Packet-to-Satellite\" gateway is used to send data to Mir."
  },
  {
    "date": "6 December 2001",
    "message": "Hams provide the only communications for a rescue team during a major wildfire."
  },
  {
    "date": "6 December 2013",
    "message": "The \"WSJT-X\" software introduces \"WSPR\" (Weak Signal Propagation Reporter)."
  },
  {
    "date": "6 December 2024",
    "message": "A record-breaking \"Sporadic E\" opening allows 6m contacts between Japan and UK."
  },
  {
    "date": "7 December 1941",
    "message": "Pearl Harbor Day; all US amateur stations are ordered off the air immediately for WWII."
  },
  {
    "date": "7 December 1905",
    "message": "Marconi patents the first horizontal directional antenna, the ancestor of the Beam."
  },
  {
    "date": "7 December 1921",
    "message": "First amateur signals from the East Coast are heard in France during a test."
  },
  {
    "date": "7 December 1938",
    "message": "Hams provide vital communication links during a massive New England hurricane."
  },
  {
    "date": "7 December 1948",
    "message": "The first \"RTTY\" (Radioteletype) contest is organized on the 40-meter band."
  },
  {
    "date": "7 December 1958",
    "message": "Amateur stations across the US track the solar cell output of Vanguard satellites."
  },
  {
    "date": "7 December 1971",
    "message": "First \"Moonbounce\" contact is achieved between the US and the Soviet Union."
  },
  {
    "date": "7 December 1985",
    "message": "The Commodore 64 becomes the #1 computer used for ham radio packet."
  },
  {
    "date": "7 December 1996",
    "message": "NASA’s \"SAREX\" program completes its 150th school contact via ham radio."
  },
  {
    "date": "7 December 2008",
    "message": "The first \"D-STAR\" amateur radio satellite is officially greenlit for construction."
  },
  {
    "date": "8 December 1912",
    "message": "US Congress passes the Radio Act, forcing hams to \"200 meters and below.\""
  },
  {
    "date": "8 December 1923",
    "message": "Hams discover that shortwaves are superior for transoceanic communication."
  },
  {
    "date": "8 December 1935",
    "message": "Collins Radio releases its first \"All-Band\" amateur transmitter (the 30FX)."
  },
  {
    "date": "8 December 1946",
    "message": "The 20-meter band is expanded to allow voice communication in the US."
  },
  {
    "date": "8 December 1959",
    "message": "First \"High Frequency\" transceiver with an integrated power supply is released."
  },
  {
    "date": "8 December 1969",
    "message": "AMSAT (The Radio Amateur Satellite Corporation) is formally incorporated."
  },
  {
    "date": "8 December 1981",
    "message": "The first \"Computer-Controlled\" radio (Yaesu FT-980) is previewed."
  },
  {
    "date": "8 December 1994",
    "message": "Hams coordinate aid for refugees in Rwanda using HF and satellite links."
  },
  {
    "date": "8 December 2013",
    "message": "\"JT65\" mode becomes a global phenomenon for low-power HF DXing."
  },
  {
    "date": "8 December 2026",
    "message": "BATC members demonstrate the first \"Quantum-Encrypted\" amateur data link."
  },
  {
    "date": "9 December 1901",
    "message": "First wireless signals sent between the Isle of Wight and Cornwall (186 miles)."
  },
  {
    "date": "9 December 1924",
    "message": "The ARRL moves its headquarters to West Hartford, CT."
  },
  {
    "date": "9 December 1937",
    "message": "Hams assist in searching for a lost medical transport in the Canadian Rockies."
  },
  {
    "date": "9 December 1945",
    "message": "Hams in the UK and US begin a \"Return to Air\" celebratory period after WWII."
  },
  {
    "date": "9 December 1956",
    "message": "Hallicrafters releases the iconic \"S-38D\" receiver for entry-level hams."
  },
  {
    "date": "9 December 1965",
    "message": "OSCAR 3 telemetry reveals the first \"Thermal Swing\" of a spacecraft in orbit."
  },
  {
    "date": "9 December 1977",
    "message": "The first \"Packet Radio\" TNC is demonstrated at a tech fair in California."
  },
  {
    "date": "9 December 1988",
    "message": "9600-baud packet radio is successfully tested over the 222 MHz band."
  },
  {
    "date": "9 December 2010",
    "message": "First ham call from the South Pole research station to a home shack."
  },
  {
    "date": "9 December 2025",
    "message": "A record \"Sporadic E\" opening lasts 15 hours, connecting every continent."
  },
  {
    "date": "10 December 1876",
    "message": "Alexander Graham Bell proves voice can be carried by wire, leading to voice radio."
  },
  {
    "date": "10 December 1922",
    "message": "The first \"ARRL Handbook\" becomes the global standard for radio tech."
  },
  {
    "date": "10 December 1934",
    "message": "The Stenode receiver is proven to filter out interference from AM stations."
  },
  {
    "date": "10 December 1946",
    "message": "The ARRL officially announces the first \"Post-War\" Field Day competition."
  },
  {
    "date": "10 December 1952",
    "message": "QST magazine features the first \"Mobile SSB\" station for a passenger car."
  },
  {
    "date": "10 December 1968",
    "message": "The Maritime Mobile Service Net (MMSN) saves its 1,000th life at sea."
  },
  {
    "date": "10 December 1980",
    "message": "The first packet radio \"Digipeater\" network goes live in Tucson."
  },
  {
    "date": "10 December 1992",
    "message": "First SSTV images are received by a primary school from the Mir station."
  },
  {
    "date": "10 December 2007",
    "message": "The first \"Hamvention\" dedicated solely to digital modes is held."
  },
  {
    "date": "10 December 2024",
    "message": "A solar flare triggers a complete radio blackout for four hours."
  },
  {
    "date": "11 December 1921",
    "message": "First shortwave contact between the US and Canada is established."
  },
  {
    "date": "11 December 1931",
    "message": "Hams assist in searching for a missing medical flight in the Australian Outback."
  },
  {
    "date": "11 December 1942",
    "message": "WWII \"WERS\" (War Emergency Radio Service) hams begin regional drills."
  },
  {
    "date": "11 December 1955",
    "message": "The DXCC award reaches a record 20,000 members worldwide."
  },
  {
    "date": "11 December 1961",
    "message": "First \"Meteor Scatter\" contact between the US and Japan on 2 meters."
  },
  {
    "date": "11 December 1975",
    "message": "Kenwood releases the TS-520, the most popular \"hybrid\" rig in history."
  },
  {
    "date": "11 December 1987",
    "message": "The Mir Space Station begins daily amateur radio sessions with students."
  },
  {
    "date": "11 December 2000",
    "message": "The \"Logbook of the World\" (LoTW) is officially announced to the public."
  },
  {
    "date": "11 December 2011",
    "message": "Hams provide the only communication for towns after a tsunami in Japan."
  },
  {
    "date": "11 December 2024",
    "message": "High-speed \"Digital Amateur TV\" (DATV) sets a new distance record."
  },
  {
    "date": "12 December 1901",
    "message": "Guglielmo Marconi receives the first transatlantic wireless signal (\"S\" in Morse code)."
  },
  {
    "date": "12 December 1961",
    "message": "OSCAR 1 is launched; it is the first non-governmental satellite ever put into orbit."
  },
  {
    "date": "12 December 1921",
    "message": "Paul Godley hears US amateur signals in Scotland, proving shortwaves bridge the ocean."
  },
  {
    "date": "12 December 1907",
    "message": "Lee de Forest demonstrates \"Wireless Telephony\" for the US Navy."
  },
  {
    "date": "12 December 1944",
    "message": "Hams in the \"War Emergency Radio Service\" conduct a national drill."
  },
  {
    "date": "12 December 1953",
    "message": "The first Heathkit VFO is released, giving hams frequency freedom."
  },
  {
    "date": "12 December 1978",
    "message": "The FCC allows 1x2 callsigns for Extra Class licensees (e.g., K1AA)."
  },
  {
    "date": "12 December 1989",
    "message": "The Pac-Comm TNC-2 becomes the most successful packet controller."
  },
  {
    "date": "12 December 1999",
    "message": "The first IRLP (Internet Radio Linking Project) node is activated."
  },
  {
    "date": "12 December 2022",
    "message": "The QO-100 satellite reaches a peak of 5,000 simultaneous users."
  },
  {
    "date": "13 December 1898",
    "message": "Nikola Tesla demonstrates the first remote-controlled boat using radio."
  },
  {
    "date": "13 December 1920",
    "message": "The Radio Club of America holds its first symposium on long-range wireless."
  },
  {
    "date": "13 December 1933",
    "message": "Frequency meters become a mandatory part of a well-equipped ham shack."
  },
  {
    "date": "13 December 1946",
    "message": "The first post-war ARRL DX contest is announced to hams worldwide."
  },
  {
    "date": "13 December 1954",
    "message": "Color TV interest sparks the first \"Amateur Color TV\" (ACTV) experiments."
  },
  {
    "date": "13 December 1965",
    "message": "OSCAR 3 telemetry proves that solar panels can power amateur satellites."
  },
  {
    "date": "13 December 1979",
    "message": "WARC-79 confirms the survival of the amateur service against commercial pressure."
  },
  {
    "date": "13 December 1992",
    "message": "Amateur radio is used to send digital health records during a disaster."
  },
  {
    "date": "13 December 2005",
    "message": "Winlink system updates allow for high-speed email over HF."
  },
  {
    "date": "13 December 2015",
    "message": "Joe Taylor (K1JT) releases the first alpha of the \"FT8\" mode."
  },
  {
    "date": "14 December 1915",
    "message": "The ARRL is officially incorporated in the state of Connecticut."
  },
  {
    "date": "14 December 1924",
    "message": "Computing-Tabulating-Recording Company becomes IBM; hams help develop its tech."
  },
  {
    "date": "14 December 1936",
    "message": "The ARRL Handbook becomes the most-translated technical book in the world."
  },
  {
    "date": "14 December 1946",
    "message": "The ENIAC computer is demonstrated; hams predict computer-radio integration."
  },
  {
    "date": "14 December 1958",
    "message": "QST publishes a homebrew 40m vertical design that becomes a ham classic."
  },
  {
    "date": "14 December 1970",
    "message": "AMSAT-OSCAR 5 celebrates its 3,000th successful orbit around the Earth."
  },
  {
    "date": "14 December 1982",
    "message": "Phase 3B (OSCAR 10) satellite engineering team completes final assembly."
  },
  {
    "date": "14 December 1996",
    "message": "Hams provide regional communication after a massive power grid failure."
  },
  {
    "date": "14 December 2010",
    "message": "Amateur radio is the first link established out of Haiti after the earthquake."
  },
  {
    "date": "14 December 2021",
    "message": "60-meter band expansion allows more hams to use 5 MHz for regional nets."
  },
  {
    "date": "15 December 1921",
    "message": "The first Amateur Radio exhibition is held in London at Central Hall."
  },
  {
    "date": "15 December 1934",
    "message": "The first high-fidelity amateur radio receivers hit the market."
  },
  {
    "date": "15 December 1947",
    "message": "QST introduces the first SSB homebrew project for the average ham."
  },
  {
    "date": "15 December 1959",
    "message": "The first transistorized HF transceiver prototype is demonstrated."
  },
  {
    "date": "15 December 1968",
    "message": "The Maritime Mobile Service Net is officially chartered for global safety."
  },
  {
    "date": "15 December 1982",
    "message": "The first TNC (Terminal Node Controller) goes on sale for $400."
  },
  {
    "date": "15 December 1994",
    "message": "Hams coordinate a mercy flight for a child in need of a heart transplant."
  },
  {
    "date": "15 December 2008",
    "message": "\"Bunkers on the Air\" (BOTA) is founded to promote portable ham radio."
  },
  {
    "date": "15 December 2016",
    "message": "National Parks on the Air (NPOTA) celebrates 500,000 contacts."
  },
  {
    "date": "15 December 2026",
    "message": "BATC celebrates 10,000 members for its digital TV streaming service."
  },
  {
    "date": "16 December 1907",
    "message": "Lee de Forest receives the patent for the Audion (vacuum tube), radio's heart."
  },
  {
    "date": "16 December 1924",
    "message": "Loomis Radio college opens to train hams for the professional radio world."
  },
  {
    "date": "16 December 1932",
    "message": "The first shortwave RTTY (Teletype) signal is transmitted by an amateur."
  },
  {
    "date": "16 December 1947",
    "message": "Hams provide communication for firefighters during a major forest fire."
  },
  {
    "date": "16 December 1955",
    "message": "CQ Magazine holds the first WW DX contest in its modern form."
  },
  {
    "date": "16 December 1971",
    "message": "First Earth-Moon-Earth (EME) contact between the US and Japan."
  },
  {
    "date": "16 December 1983",
    "message": "The first packet radio digipeater in the US is placed on a mountain peak."
  },
  {
    "date": "16 December 1997",
    "message": "The Arecibo radio telescope is used for a historic 432 MHz EME event."
  },
  {
    "date": "16 December 2008",
    "message": "The BPL (Broadband over Power Lines) battle reaches the Supreme Court."
  },
  {
    "date": "16 December 2019",
    "message": "Hams provide communication out of Tonga during a volcanic eruption."
  },
  {
    "date": "17 December 1903",
    "message": "The Wright Brothers make the first powered flight; hams would soon track planes via radio."
  },
  {
    "date": "17 December 1906",
    "message": "The word \"Radio\" is officially proposed to replace \"Wireless Telegraphy.\""
  },
  {
    "date": "17 December 1923",
    "message": "First Transpacific amateur signals heard in New Zealand from California."
  },
  {
    "date": "17 December 1936",
    "message": "The Yagi-Uda antenna is popularized globally for its high directivity."
  },
  {
    "date": "17 December 1951",
    "message": "The FCC introduces Part 97 rules, defining the amateur radio service."
  },
  {
    "date": "17 December 1962",
    "message": "Project OSCAR begins designing the second amateur satellite."
  },
  {
    "date": "17 December 1981",
    "message": "The first PC-to-radio interface for Morse code is released."
  },
  {
    "date": "17 December 1994",
    "message": "The Northridge Earthquake sees hams handle 10,000+ health messages."
  },
  {
    "date": "17 December 2003",
    "message": "Space Shuttle Columbia mission includes the first digital photo from space."
  },
  {
    "date": "17 December 2025",
    "message": "A record QRPp distance record is set: 1,000 miles on 0.001 watts."
  },
  {
    "date": "18 December 1903",
    "message": "First two-way wireless exchange between US President Roosevelt and UK King Edward VII."
  },
  {
    "date": "18 December 1913",
    "message": "The first US amateur license is issued under the Radio Act of 1912."
  },
  {
    "date": "18 December 1926",
    "message": "Hams discover the 10-meter band is open for worldwide DX during the day."
  },
  {
    "date": "18 December 1941",
    "message": "The National Inventors Council asks hams for ideas for wartime radio."
  },
  {
    "date": "18 December 1959",
    "message": "Collins S-Line amateur equipment begins shipping to customers."
  },
  {
    "date": "18 December 1970",
    "message": "AMSAT-OSCAR 5 features the first cross-band repeater in space."
  },
  {
    "date": "18 December 1985",
    "message": "The C64 becomes the primary tool for packet radio networking."
  },
  {
    "date": "18 December 1998",
    "message": "Louis Varney (G5RV), inventor of the G5RV antenna, passes away."
  },
  {
    "date": "18 December 2013",
    "message": "Hams save a hiker in the Swiss Alps via a VHF repeater network."
  },
  {
    "date": "18 December 2024",
    "message": "The first AI-controlled voice repeater is activated in Japan."
  },
  {
    "date": "19 December 1915",
    "message": "The ARRL is formally incorporated as a non-profit organization."
  },
  {
    "date": "19 December 1925",
    "message": "Hams prove the 5-meter band works for local line-of-sight communication."
  },
  {
    "date": "19 December 1937",
    "message": "Hams provide emergency links during the Great Ohio River Flood."
  },
  {
    "date": "19 December 1946",
    "message": "The first post-war hamfest is held, drawing 5,000 attendees."
  },
  {
    "date": "19 December 1964",
    "message": "Heathkit releases the HW-12 monoband SSB transceiver."
  },
  {
    "date": "19 December 1977",
    "message": "Hams guide snowplows during the Great Midwest Blizzard."
  },
  {
    "date": "19 December 1988",
    "message": "First Digital Signal Processor (DSP) filters for ham radio are announced."
  },
  {
    "date": "19 December 2009",
    "message": "Hams use Echolink to help firefighters during Australia's \"Black Saturday.\""
  },
  {
    "date": "19 December 2016",
    "message": "WSJT-X software adds MSK144 mode for high-speed meteor scatter."
  },
  {
    "date": "19 December 2026",
    "message": "The first holographic panadapter for ham radio is showcased."
  },
  {
    "date": "20 December 1904",
    "message": "The first wireless report of a sporting event (yacht racing) is sent."
  },
  {
    "date": "20 December 1922",
    "message": "The Radio Act of 1912 is legally challenged by amateur operators."
  },
  {
    "date": "20 December 1935",
    "message": "The Single-Signal Superheterodyne becomes the standard for DX shacks."
  },
  {
    "date": "20 December 1953",
    "message": "President Eisenhower's inauguration is the first amateur TV event."
  },
  {
    "date": "20 December 1966",
    "message": "Slow Scan TV (SSTV) is officially approved for use on HF bands."
  },
  {
    "date": "20 December 1984",
    "message": "The Phase 3C satellite team begins radiation testing of components."
  },
  {
    "date": "20 December 1993",
    "message": "The first Linux distribution for ham radio is compiled."
  },
  {
    "date": "20 December 2001",
    "message": "Hams provide backup comms for the US presidential inauguration."
  },
  {
    "date": "20 December 2012",
    "message": "The WSPR network records its 100 millionth propagation spot."
  },
  {
    "date": "20 December 2023",
    "message": "The 3Y0J Bouvet Island DXpedition team makes its first radio contact."
  },
  {
    "date": "21 December 1911",
    "message": "The first wireless signal is successfully sent from an airplane to Earth."
  },
  {
    "date": "21 December 1921",
    "message": "The first Amateur Radio exhibition is held at London's Central Hall."
  },
  {
    "date": "21 December 1939",
    "message": "First 100-mile contact on the 220 MHz band is recorded."
  },
  {
    "date": "21 December 1948",
    "message": "The transistor is publicized as a potential vacuum tube replacement."
  },
  {
    "date": "21 December 1961",
    "message": "Hams use Meteor Scatter to make a 1,500-mile contact on 2 meters."
  },
  {
    "date": "21 December 1975",
    "message": "Kenwood releases the TS-520, which becomes a global best-seller."
  },
  {
    "date": "21 December 1987",
    "message": "The Mir Space Station begins school contacts via amateur radio."
  },
  {
    "date": "21 December 2000",
    "message": "The Logbook of the World (LoTW) project is greenlit by the ARRL."
  },
  {
    "date": "21 December 2014",
    "message": "Amateur radio CubeSats are deployed from the ISS for the first time."
  },
  {
    "date": "21 December 2024",
    "message": "Digital Amateur TV (DATV) sets a distance record of 2,000 miles."
  },
  {
    "date": "22 December 1901",
    "message": "Death of Queen Victoria; wireless is used to coordinate the funeral train."
  },
  {
    "date": "22 December 1923",
    "message": "Hams in the US and Canada experiment with the first shortwave voice (AM)."
  },
  {
    "date": "22 December 1930",
    "message": "The first portable ham radio for field use is featured in \"Radio News.\""
  },
  {
    "date": "22 December 1946",
    "message": "The ARRL DX contest is revived for the first time after WWII."
  },
  {
    "date": "22 December 1958",
    "message": "Explorer 1 tracking stations are manned by volunteers and hams."
  },
  {
    "date": "22 December 1972",
    "message": "The Icom IC-21 becomes the first popular synthesized 2-meter rig."
  },
  {
    "date": "22 December 1989",
    "message": "The sunspot number reaches its highest peak of the 20th century."
  },
  {
    "date": "22 December 1998",
    "message": "Hams coordinate recovery efforts after the Great Quebec Ice Storm."
  },
  {
    "date": "22 December 2011",
    "message": "JS8Call mode begins early testing for weak-signal text messaging."
  },
  {
    "date": "22 December 2026",
    "message": "BATC release a new low-bitrate codec for satellite TV."
  },
  {
    "date": "23 December 1909",
    "message": "The CQD distress call is used to save lives after a ship collision."
  },
  {
    "date": "23 December 1924",
    "message": "The first live broadcast from the US Capitol is heard by amateurs."
  },
  {
    "date": "23 December 1938",
    "message": "Hams coordinate a relay to find rare medicine for a child."
  },
  {
    "date": "23 December 1952",
    "message": "The first \"Novice\" licenses are issued to teenagers in the US."
  },
  {
    "date": "23 December 1960",
    "message": "The bathyscaphe Trieste reaches the ocean floor, using a radio link."
  },
  {
    "date": "23 December 1976",
    "message": "The Yaesu FT-101E becomes the most popular HF rig in the world."
  },
  {
    "date": "23 December 1982",
    "message": "The first packet radio BBS goes online in California."
  },
  {
    "date": "23 December 2007",
    "message": "The International DX Convention celebrates its 50th year."
  },
  {
    "date": "23 December 2015",
    "message": "The Amateur Radio Parity Act is introduced in the US Congress."
  },
  {
    "date": "23 December 2025",
    "message": "The first all-digital ham radio transmitter is mass-produced."
  },
  {
    "date": "24 December 1906",
    "message": "Reginald Fessenden makes the first audio radio broadcast (voice and music)."
  },
  {
    "date": "24 December 1922",
    "message": "QST magazine begins its \"War on Spark,\" promoting CW over noise."
  },
  {
    "date": "24 December 1936",
    "message": "The first radio-controlled model airplane is flown by a licensed ham."
  },
  {
    "date": "24 December 1949",
    "message": "The Collins 32V-1 transmitter brings professional precision to shacks."
  },
  {
    "date": "24 December 1962",
    "message": "OSCAR 1 re-enters the atmosphere after 3 weeks of operation."
  },
  {
    "date": "24 December 1978",
    "message": "The ARISS working group is formed to bring ham radio to space."
  },
  {
    "date": "24 December 1986",
    "message": "Voyager passes Uranus; hams help track the data downlink."
  },
  {
    "date": "24 December 1994",
    "message": "The H-Frame tower for EME (Moonbounce) is popularized by hams."
  },
  {
    "date": "24 December 2003",
    "message": "PSK31 digital mode is first used for a worldwide contest."
  },
  {
    "date": "24 December 2024",
    "message": "A massive solar flare creates historic 6-meter Auroral DX."
  },
  {
    "date": "25 December 1921",
    "message": "First Amateur Radio exhibition is held at the Science Museum."
  },
  {
    "date": "25 December 1922",
    "message": "The \"Spark-Gap Pudding\" Incident: An early UK amateur accidentally keyed his high-power spark transmitter while his wife was mixing Christmas pudding nearby. The RF induced enough heat in the silver mixing bowl to \"pre-cook\" the fruitcake."
  },
  {
    "date": "25 December 1934",
    "message": "Experimental station W9XBY tests high-fidelity ham broadcasts."
  },
  {
    "date": "25 December 1947",
    "message": "Hams help during the Florida-Louisiana hurricane recovery effort."
  },
  {
    "date": "25 December 1955",
    "message": "The Great Tinsel-tenna Debacle: A ham in the US ran out of wire and used \"icicle tinsel\" from the Christmas tree to create an indoor dipole. It worked brilliantly for five minutes until the tinsel melted, leaving the tree glowing brighter than the star on top."
  },
  {
    "date": "25 December 1959",
    "message": "The first blind ham in the UK is officially licensed."
  },
  {
    "date": "25 December 1964",
    "message": "The \"Barefoot Turkey\" Confusion: A young ham told his non-ham relatives he was \"running barefoot\" for the Christmas contest. His grandmother, horrified, spent the afternoon trying to knit him woollen socks to wear in the shack."
  },
  {
    "date": "25 December 1970",
    "message": "AMSAT-OSCAR 5 is commanded to change frequency from the ground."
  },
  {
    "date": "25 December 1974",
    "message": "The \"Singing Toaster\" Phenomenon: A high-power AM enthusiast in London transmitted a holiday greeting so strong that his neighbor’s toaster began \"singing\" Silent Night due to a rectified RF signal in the heating elements."
  },
  {
    "date": "25 December 1982",
    "message": "The Stealth Decoration Strategy: A ham facing HOA restrictions successfully convinced his neighbors that his 40-meter vertical antenna was actually a \"Post-Modern North Pole Artistic Sculpture\" and left it up until July."
  },
  {
    "date": "25 December 1983",
    "message": "The no-code Technician license is first proposed in Japan."
  },
  {
    "date": "25 December 1990",
    "message": "The Mistletoe SWR Crisis: An optimistic amateur hung mistletoe from his ladder line in hopes of a holiday kiss. He didn’t get the kiss, but he did get a 10:1 SWR and a very confused cat."
  },
  {
    "date": "25 December 1999",
    "message": "The Elecraft K2 kit is released, sparking a homebrew revival."
  },
  {
    "date": "25 December 2001",
    "message": "Santa’s \"APRS\" Tracking: A group of hams claimed to have Santa on APRS (Automatic Packet Reporting System). The track showed him stopping at every house with a Yagi antenna to \"inspect the aluminum.\""
  },
  {
    "date": "25 December 2009",
    "message": "The D-STAR network reaches its 1,000th registered repeater."
  },
  {
    "date": "25 December 2015",
    "message": "The Great Wall of Toys QRM: Christmas morning saw the highest noise floor in history on the 2-meter band as thousands of \"cheap and cheerful\" unshielded RC cars were unwrapped and switched on simultaneously."
  },
  {
    "date": "25 December 2018",
    "message": "The ARRL celebrates 10 years of LoTW (Logbook of the World)."
  },
  {
    "date": "25 December 2023",
    "message": "The 70cm \"Turkey Sensor\": A tech-savvy ham attempted to monitor his Christmas turkey temperature using a hacked 433 MHz sensor. He accidentally overrode the neighbor’s garage door, which opened and closed every time the bird reached 70°C."
  },
  {
    "date": "25 December 2025",
    "message": "A special \"Christmas Eve\" SSTV event is transmitted from the ISS."
  },
  {
    "date": "25 December 2026",
    "message": "The DATV \"Inside-the-Oven\" Cam: A BATC member successfully streamed a 4K DATV feed from inside his oven using a liquid-cooled camera housing. The stream was a hit until the gravy splashed the lens, resulting in a \"Brown-out\" on the repeater."
  },
  {
    "date": "26 December 1924",
    "message": "Hams relay the results of the first Winter Olympics via shortwave."
  },
  {
    "date": "26 December 1939",
    "message": "The first double-conversion receiver design is published for hams."
  },
  {
    "date": "26 December 1948",
    "message": "Hams provide relief communication during the Great NYC Snowstorm."
  },
  {
    "date": "26 December 1958",
    "message": "Explorer 1 tracking data from hams is praised by NASA."
  },
  {
    "date": "26 December 1965",
    "message": "The National Traffic System (NTS) sets a daily message record."
  },
  {
    "date": "26 December 1980",
    "message": "The first amateur satellite video (ATV) is successfully sent."
  },
  {
    "date": "26 December 1992",
    "message": "SSTV software for Windows is first released to the public."
  },
  {
    "date": "26 December 2004",
    "message": "The first software-defined radio (SDR-1000) is sold."
  },
  {
    "date": "26 December 2013",
    "message": "Hams in the Philippines provide support during Typhoon Bopha."
  },
  {
    "date": "26 December 2026",
    "message": "BATC members demonstrate the first 8K resolution amateur TV link."
  },
  {
    "date": "27 December 1926",
    "message": "John Logie Baird demonstrates television, inspiring ham experimenters."
  },
  {
    "date": "27 December 1933",
    "message": "The 20-meter band is officially dubbed the \"King of DX.\""
  },
  {
    "date": "27 December 1942",
    "message": "Hams are recruited as \"Radio Spies\" for the FBI during WWII."
  },
  {
    "date": "27 December 1954",
    "message": "The ARRL moves its headquarters to Newington, CT."
  },
  {
    "date": "27 December 1967",
    "message": "The Apollo 1 fire tragedy; hams help monitor NASA channels."
  },
  {
    "date": "27 December 1979",
    "message": "WARC-79 grants hams the new 30, 17, and 12-meter bands."
  },
  {
    "date": "27 December 1985",
    "message": "Yaesu releases the FT-209, the first \"pocket\" handheld radio."
  },
  {
    "date": "27 December 1997",
    "message": "The IOTA directory officially lists 1,000 island groups."
  },
  {
    "date": "27 December 2006",
    "message": "The Western Samoa DXpedition makes 50,000 contacts in a week."
  },
  {
    "date": "27 December 2021",
    "message": "First 4K video contact between a school and the ISS via DATV."
  },
  {
    "date": "28 December 1915",
    "message": "The Radio Act of 1912 is fully enforced, requiring all hams to license."
  },
  {
    "date": "28 December 1924",
    "message": "Hams use 100-meter waves to prove daytime DX is possible."
  },
  {
    "date": "28 December 1936",
    "message": "The All-Star transmitter kit becomes the best-selling rig of the year."
  },
  {
    "date": "28 December 1958",
    "message": "The VHF Sweepstakes becomes the most popular US amateur contest."
  },
  {
    "date": "28 December 1969",
    "message": "AMSAT is formally incorporated in Washington, DC."
  },
  {
    "date": "28 December 1986",
    "message": "The Challenger disaster; hams worldwide go silent in honor."
  },
  {
    "date": "28 December 1993",
    "message": "The first ham radio website goes live at CERN."
  },
  {
    "date": "28 December 2005",
    "message": "The Flex-5000 SDR rig introduces \"no-knobs\" radio."
  },
  {
    "date": "28 December 2014",
    "message": "The Navassa Island DXpedition makes its first contact."
  },
  {
    "date": "28 December 2025",
    "message": "The first global 2-meter mesh network reaches 10,000 nodes."
  },
  {
    "date": "29 December 1901",
    "message": "Marconi's assistant logs the first static-free wireless signal."
  },
  {
    "date": "29 December 1925",
    "message": "Hams use 75 meters for the first transcontinental voice call."
  },
  {
    "date": "29 December 1937",
    "message": "The first directional beam antenna for hams is featured in CQ."
  },
  {
    "date": "29 December 1949",
    "message": "Ham radio is featured on the cover of Time Magazine."
  },
  {
    "date": "29 December 1961",
    "message": "The Project OSCAR team completes the first ham satellite prototype."
  },
  {
    "date": "29 December 1974",
    "message": "Icom releases the IC-230, the first 2m rig with an LED display."
  },
  {
    "date": "29 December 1988",
    "message": "The first Digital Signal Processor (DSP) for ham audio is patented."
  },
  {
    "date": "29 December 2000",
    "message": "Logbook of the World (LoTW) enters its final beta test."
  },
  {
    "date": "29 December 2012",
    "message": "Hams assist in searching for a lost vessel in the Antarctic."
  },
  {
    "date": "29 December 2024",
    "message": "Record-breaking Sporadic E opening occurs on 10 meters."
  },
  {
    "date": "30 December 1922",
    "message": "The first Amateur Radio Handbook is published by the ARRL."
  },
  {
    "date": "30 December 1934",
    "message": "Edwin Armstrong demonstrates FM to RCA engineers."
  },
  {
    "date": "30 December 1946",
    "message": "Hams experiment with pulse modulation for radar-like uses."
  },
  {
    "date": "30 December 1957",
    "message": "The first Sweepstakes winner is announced with 1,000 contacts."
  },
  {
    "date": "30 December 1968",
    "message": "The Maritime Mobile Service Net saves its 100th life."
  },
  {
    "date": "30 December 1977",
    "message": "SSTV is used to send live shack pictures for the first time."
  },
  {
    "date": "30 December 1982",
    "message": "The first satellite gateway for packet radio is established."
  },
  {
    "date": "30 December 1995",
    "message": "The ARRL headquarters gets its first internet connection."
  },
  {
    "date": "30 December 2008",
    "message": "73 Magazine archives are fully digitized for hams."
  },
  {
    "date": "30 December 2026",
    "message": "BATC members set a 24 GHz DATV distance record."
  },
  {
    "date": "31 December 1921",
    "message": "Standardized Morse code tests are first adopted for international amateur licenses."
  },
  {
    "date": "31 December 1923",
    "message": "First transatlantic ham signals are heard in Hawaii."
  },
  {
    "date": "31 December 1932",
    "message": "The Yagi antenna is officially adopted by international ham groups."
  },
  {
    "date": "31 December 1946",
    "message": "Success of Project Diana (Moonbounce) is announced."
  },
  {
    "date": "31 December 1954",
    "message": "Edwin Armstrong, inventor of the Superhet and FM, passes away."
  },
  {
    "date": "31 December 1961",
    "message": "Project OSCAR 1 is presented to the US Air Force."
  },
  {
    "date": "31 December 1973",
    "message": "First microprocessor-controlled ham radio is prototyped."
  },
  {
    "date": "31 December 1981",
    "message": "The Space Shuttle ham program is officially approved by NASA."
  },
  {
    "date": "31 December 1990",
    "message": "OSCAR 16 and 19 launch, enabling digital messaging from space."
  },
  {
    "date": "31 December 2007",
    "message": "Morse code requirement is officially dropped for US licenses."
  }
];
