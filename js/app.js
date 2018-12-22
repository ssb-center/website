(function () {

  // var path = [window.DTree[1][1][1][1][1][1]]
  var path = [window.DTree]

  var MainPicker = {
    view() {
      //
      // Provide a key: so Mithril will create a new dom element
      // instead of reuse the previous one when re-choosing a question.
      // This is to retrigger the .fade-in animation.
      //
      return path.map((node, i) => m(Question, { node, i, key: node[0] }))
    }
  }

  var Question = {
    oncreate(vnode) {
      if (vnode.attrs.i === 0) return
      window.smoothScroll(vnode.dom, 800)
    },
    view(vnode) {
      var {node, i} = vnode.attrs

      if (node[0] === 'END') {
        return node.slice(1).map((charId, i) => {
          var char = window.Characters[charId]
          var content = m('.promo',
            m('a.promo__link-wrapper[target=_blank]',
              {
                href: `https://www.smashbros.com/en_US/fighter/${char.num}.html`,
              },
              m('.character-image',
                {
                  class: `-align-${char.align}`,
                },
                m('img.portrait', { src: `https://www.smashbros.com/assets_v2/img/fighter/${charId}/main.png` }),
                m('img.name', { src: `https://www.smashbros.com/assets_v2/img/fighter/${charId}/fighter_name_sp.svg` })
              )
            ),
          )
          return m('.care-card.care-card--non-urgent',
            m('.care-card__heading-container',
              m('h3.care-card__heading',
                i === 0
                ? "In that case, you should main..."
                : "Alternatively, you can main..."
              ),
              m('.care-card__arrow', { ariaHidden: "true" })
            ),
            m('.care-card__content', { style: 'padding-top: 4rem' }, content)
          )
        })
      }

      return m('.list-panel',
        {
          id: letters[i],
          class: i > 0 ? 'fade-in' : ''
        },
        m('h2.list-panel__label', letters[i]),
        m('.list-panel__box.list-panel__box--with-label',
          m('p.list-panel--results-items__question', node[0]),
        ),

        m('ul.list-panel__list.nhsuk-list-panel__list--with-label',
          node.slice(1).map(([text, next]) =>
            m('li.list-panel__item',
              m('a.list-panel__link[href=#]', {
                onclick(e) {
                  e.preventDefault()
                  path = path.slice(0,i+1).concat([next])
                }
              }, text),
            ),
          ),
        ),

        i > 0 &&
        m('.back-to-top',
          m('a.back-to-top__link[href=#]', {
            onclick(e) {
              e.preventDefault()
              path = path.slice(0,i)
              // Pop and re-add to re-trigger animation
              var node = path.pop()
              setTimeout(() => {
                path.push(node)
                m.redraw()
              })
            }
          }, arrowUp, 'Back'),
        ),
      )
    }
  }

  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  var arrowUp = m.trust(`
    <svg class="icon icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
    </svg>
  `)

  function range (from,to,f) {
    var results = []
    for (var i=from; i < to; i++) {
      results.push(f(i))
    }
    return results
  }

//        <div class="list-panel">
//
//          <h2 class="list-panel__label" id="B">B</h2>
//
//
//          <div class="list-panel__box list-panel__box--with-label ">
//            <p class="list-panel--results-items__no-results">There are currently no conditions listed</p>
//          </div>
//
//
//          <div class="back-to-top">
//            <a class="back-to-top__link" href="#nav-a-z">
//              <svg class="icon icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
//                <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
//              </svg>
//              Back to top
//            </a>
//          </div>
//
//        </div>
  m.mount(document.getElementById('app'), MainPicker)
})()
