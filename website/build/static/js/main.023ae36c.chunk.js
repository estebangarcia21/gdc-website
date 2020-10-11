(this.webpackJsonpwebsite = this.webpackJsonpwebsite || []).push([
  [0],
  {
    115: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        i = a.n(n),
        r = a(34),
        l = a.n(r),
        c = a(82),
        o = a(9),
        m = (a(89), a(43)),
        s = a(83),
        u = a(117),
        d = a(47),
        p = a(76),
        h = a(68),
        g = a.n(h),
        E = a(69),
        f = a.n(E),
        v = a(70),
        b = a.n(v),
        y = a(71),
        x = a.n(y),
        w = a(72),
        j = a.n(w),
        N = a(73),
        C = a.n(N),
        O = a(74),
        q = a.n(O),
        k = a(75),
        T = a.n(k),
        A = function (e) {
          return i.a.createElement(
            "div",
            { className: "info-card" },
            i.a.createElement("img", {
              className: "horizontal-center",
              src: e.icon,
              width: "35px",
              height: "35px",
              alt: "Icon",
            }),
            i.a.createElement("p", { className: "info-card--title" }, e.title),
            i.a.createElement(
              "p",
              { className: "text--gray info-card--text center-text" },
              e.children
            )
          );
        },
        L = function () {
          var e = Object(n.useState)({ joinTeamCards: !1 }),
            t = Object(s.a)(e, 2),
            a = t[0],
            r = t[1];
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(
              "div",
              { id: "home-banner" },
              i.a.createElement(
                "div",
                { className: "vertical-center" },
                i.a.createElement(
                  "div",
                  { id: "home-banner-left-panel" },
                  i.a.createElement(
                    "h1",
                    { className: "title" },
                    "Game Development Club"
                  ),
                  i.a.createElement(
                    "h2",
                    { className: "subtitle" },
                    "The Community of Communities"
                  )
                )
              ),
              i.a.createElement(
                "div",
                { id: "home-banner-right-panel" },
                i.a.createElement("img", {
                  className: "box-shadow",
                  src: f.a,
                  width: "80%",
                  height: "150%",
                  alt: "Images from our games",
                })
              )
            ),
            i.a.createElement(
              d.a.div,
              {
                style: Object(d.b)({
                  config: { duration: 500 },
                  opacity: 1,
                  from: { opacity: 0 },
                }),
              },
              i.a.createElement(
                "p",
                { className: "title center-text" },
                "What is Game Development Club?"
              ),
              i.a.createElement(
                "p",
                { id: "home-description", className: "text center-text" },
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit soluta, rem hic voluptatem accusamus tempora sapiente molestiae at nesciunt dolore totam non, et, culpa consequuntur a ea voluptates eum quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum sapiente culpa similique repellendus error fugiat itaque, fugit dolorum mollitia distinctio odio, minima alias, quae repudiandae odit suscipit cupiditate eum?"
              )
            ),
            i.a.createElement(
              "div",
              null,
              i.a.createElement("img", {
                id: "why-join-section--arrow",
                src: b.a,
                width: "75px",
                height: "75px",
                alt: "Right arrow",
              }),
              i.a.createElement(
                "div",
                { id: "why-join-section--left" },
                i.a.createElement(
                  "h1",
                  {
                    className: "title--white vertical-center",
                    style: { fontSize: "42px", textAlign: "center" },
                  },
                  "Why join Game Development Club?"
                )
              ),
              i.a.createElement(
                "div",
                { id: "why-join-section--right" },
                i.a.createElement(
                  "h1",
                  { className: "title center-text" },
                  "Reasons to Join"
                ),
                i.a.createElement(
                  "div",
                  { id: "why-join-section--list-text" },
                  i.a.createElement(
                    "p",
                    null,
                    "Meet new people who share your interests!"
                  ),
                  i.a.createElement("br", null),
                  i.a.createElement(
                    "p",
                    null,
                    "Learn game development skills!"
                  ),
                  i.a.createElement("br", null),
                  i.a.createElement(
                    "p",
                    null,
                    "Have fun with frequent milestone celebrations!"
                  ),
                  i.a.createElement("br", null),
                  i.a.createElement(
                    "p",
                    null,
                    "No previous experience needed!"
                  ),
                  i.a.createElement("br", null)
                )
              )
            ),
            i.a.createElement(g.a, { partialVisibility: !0 }, function (e) {
              var t = e.isVisible;
              return (
                console.log(a.joinTeamCards),
                (t = !!a.joinTeamCards || t),
                i.a.createElement(
                  p.Spring,
                  {
                    delay: 300,
                    config: { duration: 500, easing: u.a },
                    to: {
                      opacity: t ? 1 : 0,
                      transform: t ? "translateY(0)" : "translateY(50px)",
                    },
                    onRest: function () {
                      t && r(Object(m.a)({}, a, { joinTeamCards: !0 }));
                    },
                  },
                  function (e) {
                    return i.a.createElement(
                      "div",
                      { style: Object(m.a)({}, e) },
                      i.a.createElement(
                        "p",
                        { className: "title center-text" },
                        "Join a Team"
                      ),
                      i.a.createElement(
                        "div",
                        { id: "info-cards" },
                        i.a.createElement(
                          A,
                          { title: "Programmers", icon: C.a },
                          "Tie the project together! Programmers connect all assets and bring the game to life through Unity and C#."
                        ),
                        i.a.createElement(
                          A,
                          { title: "Artists", icon: j.a },
                          "Work together with other artists to create amazing 2D visuals for our games. Any art style is welcome!"
                        ),
                        i.a.createElement(
                          A,
                          { title: "Animators", icon: x.a },
                          "Bring the game to life! Work closely with the art team to make fluid, responsive, and engaging animations."
                        ),
                        i.a.createElement(
                          A,
                          { title: "Writers", icon: T.a },
                          "Layout layout the story of our games! Communicate with club members to create amazing stories!"
                        ),
                        i.a.createElement(
                          A,
                          { title: "Musicians", icon: q.a },
                          "Produce inspiring music that captures the feeling and emotion of the game environment."
                        )
                      )
                    );
                  }
                )
              );
            })
          );
        },
        W = a(25),
        z = a(77);
      function D() {
        var e = Object(z.a)([
          "\n    {\n        games {\n            id\n            name\n            description\n            year\n        }\n    }\n",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      var I = Object(W.gql)(D()),
        J = function () {
          var e = Object(W.useQuery)(I),
            t = e.data;
          return e.loading
            ? i.a.createElement("div", null, "Loading...")
            : i.a.createElement(
                "div",
                null,
                null === t || void 0 === t
                  ? void 0
                  : t.games.map(function (e) {
                      return i.a.createElement(
                        "div",
                        { key: e.id },
                        i.a.createElement("p", null, e.name),
                        i.a.createElement("p", null, e.year),
                        i.a.createElement("p", null, e.description),
                        i.a.createElement("p", null, e.id),
                        i.a.createElement("br", null)
                      );
                    })
              );
        },
        P = new W.ApolloClient({
          uri: "http://localhost:4000/graphql",
          cache: new W.InMemoryCache(),
        }),
        G = function () {
          return i.a.createElement(
            W.ApolloProvider,
            { client: P },
            i.a.createElement(
              c.a,
              null,
              i.a.createElement(o.a, { exact: !0, path: "/", component: L }),
              i.a.createElement(o.a, {
                exact: !0,
                path: "/our-games",
                component: J,
              })
            )
          );
        };
      l.a.render(i.a.createElement(G, null), document.getElementById("root"));
    },
    69: function (e, t, a) {
      e.exports = a.p + "static/media/concept_art.58080098.png";
    },
    70: function (e, t, a) {
      e.exports = a.p + "static/media/chevron_arrow_right.0f5a8337.png";
    },
    71: function (e, t, a) {
      e.exports = a.p + "static/media/animation-motion.820cc974.svg";
    },
    72: function (e, t, a) {
      e.exports = a.p + "static/media/brush-paintbrush.86f6b4de.svg";
    },
    73: function (e, t, a) {
      e.exports = a.p + "static/media/code.e4a2fdd9.svg";
    },
    74: function (e, t, a) {
      e.exports = a.p + "static/media/music.f7923dd7.svg";
    },
    75: function (e, t, a) {
      e.exports = a.p + "static/media/pencil-draw.afa1e6f6.svg";
    },
    84: function (e, t, a) {
      e.exports = a(115);
    },
    89: function (e, t, a) {},
  },
  [[84, 1, 2]],
]);
//# sourceMappingURL=main.023ae36c.chunk.js.map
