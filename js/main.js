$(function () {

    $('#TsrBtn').on('click', function () {
        const TsrTmess = document.getElementById('TsrTmess').value
        const TsrTbr = document.getElementById('TsrTbr').value
        const TsrTsld = document.getElementById('TsrTsld').value

        answer = parseInt(TsrTmess) + parseInt(TsrTbr) + parseInt(TsrTsld) + 1
        if (TsrTsld !== '' && TsrTsld !== null) {
            document.getElementById('TsrAnswer').innerText = parseInt(answer)
        }
    })

    $('#TslBtn').on('click', function () {
        const TslL = document.getElementById('L').value
        const TslVsr = document.getElementById('Vsr').value

        answer = parseInt(TslL) * 60 / parseInt(TslVsr)
        if (TslL !== '' && TslL !== null && TslVsr !== '' && TslVsr !== null) {
            document.getElementById('TslAnswer').innerText = parseInt(answer)
        }
    })

    $('#LpojBtn').on('click', function () {
        const LpojV = document.getElementById('LpojV').value
        const LpojT = document.getElementById('LpojT').value

        answer = LpojV * 0.5 * parseInt(LpojT)
        if (LpojV !== '' && LpojV !== null && LpojT !== '' && LpojT !== null) {
            document.getElementById('LpojAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#LpojBtn-10').on('click', function () {
        const LpojV10 = document.getElementById('LpojV-10').value
        const LpojT10 = document.getElementById('LpojT-10').value

        answer = LpojV10 * 0.5 * 10 + LpojV10 * (parseInt(LpojT10) - 10)
        if (LpojV10 !== '' && LpojV10 !== null && LpojT10 !== '' && LpojT10 !== null) {
            document.getElementById('LpojAnswer-10').innerText = answer.toFixed(2)
        }
    })

    $('#SRad').on('click', function () {
        const SRadLput = document.getElementById('SRad-Lput').value

        answer = (parseFloat(SRadLput * SRadLput)) * 3.14
        if (SRadLput !== '' && SRadLput !== null) {
            document.getElementById('SRadAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#SAng').on('click', function () {
        const SAngLput = document.getElementById('SAng-Lput').value
        const SAngang = document.getElementById('SAng-ang').value

        answer = (parseFloat(SAngLput) * parseFloat(SAngLput)) * parseFloat(SAngang / 360) * 3.14
        if (SAngLput !== '' && SAngLput !== null && SAngang !== '' && SAngang !== null) {
            document.getElementById('SAngAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#SRec').on('click', function () {
        const SRecA = document.getElementById('SRec-A').value
        const SRecB = document.getElementById('SRec-B').value

        answer = parseFloat(SRecA) * parseFloat(SRecB)
        if (SRecA !== '' && SRecA !== null && SRecB !== '' && SRecB !== null) {
            document.getElementById('SRecAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#SRecDB').on('click', function () {
        const SRecDBA = document.getElementById('SRecDB-A').value
        const SRecDBB1 = document.getElementById('SRecDB-B1').value
        const SRecDBB2 = document.getElementById('SRecDB-B2').value

        answer = parseFloat(SRecDBA) * (parseFloat(SRecDBB1) + parseFloat(SRecDBB2))
        if (SRecDBA !== '' && SRecDBA !== null && SRecDBB1 !== '' && SRecDBB1 !== null && SRecDBB2 !== '' && SRecDBB2 !== null) {
            document.getElementById('SRecDBAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#PCir').on('click', function () {
        const PCirR = document.getElementById('PCirR').value

        answer = parseFloat(PCirR) * 2 * 3.14
        if (PCirR !== '' && PCirR !== null) {
            document.getElementById('PCirAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#PAng').on('click', function () {
        const PAngAng = document.getElementById('PAng-ang').value
        const PAngR = document.getElementById('PAngR').value

        answer = parseFloat(PAngR) * (2 + (parseFloat(PAngAng / 360)))
        if (PAngAng !== '' & PAngAng !== null && PAngR !== '' && PAngR !== null) {
            document.getElementById('PAngAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#PRect').on('click', function () {
        const PRectA = document.getElementById('PRect-a').value
        const PRectB = document.getElementById('PRect-b').value

        answer = 2 * (parseFloat(PRectA) + parseFloat(PRectB))
        if (PRectA !== '' && PRectA !== null && PRectB !== '' && PRectB !== null) {
            document.getElementById('PRectAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#PRectDB').on('click', function () {
        const PRectDBA = document.getElementById('PRectDB-a').value
        const PRectDBB1 = document.getElementById('PRectDB-b1').value
        const PRectDBB2 = document.getElementById('PRectDB-b2').value

        answer = 2 * parseFloat(PRectDBA) + (parseFloat(PRectDBB1) + parseFloat(PRectDBB2))
        if (PRectDBA !== '' && PRectDBA !== null && PRectDBB1 !== '' && PRectDBB1 !== null && PRectDBB2 !== '' && PRectDBB2 !== null) {
            document.getElementById('PRectDBAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#SExtCir').on('click', function () {
        const SExtCirR = document.getElementById('SExtCirR').value
        const SExtCirDp = document.getElementById('SExtCirDp').value

        answer = 3.14 * parseFloat(SExtCirDp) * (2 * parseFloat(SExtCirR) - parseFloat(SExtCirDp))
        if (SExtCirR !== '' && SExtCirR !== null && SExtCirDp !== '' && SExtCirDp !== null) {
            document.getElementById('SExtCirAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#SExtAng').on('click', function () {
        const SExtAngAng = document.getElementById('SExtAngAng').value
        const SExtAngDp = document.getElementById('SExtAngDp').value
        const SExtAngR = document.getElementById('SExtAngR').value

        answer = parseFloat(SExtAngAng / 360) * 3.14 * parseFloat(SExtAngDp) * (2 * parseFloat(SExtAngR) - parseFloat(SExtAngDp))
        if (SExtAngAng !== '' && SExtAngAng !== null && SExtAngDp !== '' && SExtAngDp !== null && SExtAngR !== '' && SExtAngR !== null) {
            document.getElementById('SExtAngAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#SExtRect').on('click', function () {
        const SExtRectA = document.getElementById('SExtRectA').value
        const SExtRectDp = document.getElementById('SExtRectDp').value

        answer = parseFloat(SExtRectA) * parseFloat(SExtRectDp)
        if (SExtRectA !== '' && SExtRectA !== null && SExtRectDp !== '' && SExtRectDp !== null) {
            document.getElementById('SExtRectAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#SExtRectDB').on('click', function () {
        const SExtRectDBA = document.getElementById('SExtRectDBA').value
        const SExtRectDBDp = document.getElementById('SExtRectDBDp').value

        answer = 2 * parseFloat(SExtRectDBDp) * parseFloat(SExtRectDBA)
        if (SExtRectDBDp !== '' && SExtRectDBDp !== null && SExtRectDBA !== '' && SExtRectDBA !== null) {
            document.getElementById('SExtRectDBAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#QExt').on('click', function () {
        const QExtA = document.getElementById('QExtA').value
        const QExtDp = document.getElementById('QExtDp').value

        answer = parseFloat(QExtA) * parseFloat(QExtDp)
        if (QExt !== '' && QExt !== null && QExtDp !== '' && QExtDp !== null) {
            document.getElementById('QExtAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#QPr').on('click', function () {
        const QPrA = document.getElementById('QPrA').value
        const QPrDp = document.getElementById('QPrDp').value

        answer = parseFloat(QPrA) * parseFloat(QPrDp)
        if (QPrA !== '' && QPrA !== null && QPrDp !== '' && QPrDp !== null) {
            document.getElementById('QPrAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#NStWt').on('click', function () {
        const NStWtA = document.getElementById('NStWtA').value
        const NStWtB = document.getElementById('NStWtB').value

        answer = parseFloat(NStWtA) / parseFloat(NStWtB)
        if (NStWtA !== '' && NStWtA !== null && NStWtB !== '' && NStWtB !== null && NStWtB !== 0) {
            document.getElementById('NStWtAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#NStFS').on('click', function () {
        const NStFSA = document.getElementById('NStFSA').value
        const NStFSB = document.getElementById('NStFSB').value

        answer = parseFloat(NStFSA) / parseFloat(NStFSB)
        if (NStFSA !== '' && NStFSA !== null && NStFSB !== '' && NStFSB !== null && NStFSB !== 0) {
            document.getElementById('NStFSAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#NStFV').on('click', function () {
        const NStFVA = document.getElementById('NStFVA').value
        const NStFVB = document.getElementById('NStFVB').value

        answer = (parseFloat(NStFVA) * 3) / (parseFloat(NStFVB) / 15)
        if (NStFVA !== '' && NStFVA !== null && NStFVB !== '' && NStFVB !== null) {
            document.getElementById('NStFVAnswer').innerText = Math.ceil(answer)
        }
    })

    $('#TAStNW').on('click', function () {
        const TAStNWV1 = document.getElementById('TAStNWV1').value
        const TAStNWV2 = document.getElementById('TAStNWV2').value
        const TAStNWN1 = document.getElementById('TAStNWN1').value
        const TAStNWN2 = document.getElementById('TAStNWN2').value
        const TAStNWQ = document.getElementById('TAStNWQ').value

        answer = (parseFloat(TAStNWV1) - parseFloat(TAStNWN1) * parseFloat(TAStNWV2)) / (parseFloat(TAStNWN2) * parseFloat(TAStNWQ) * 60)
        if (TAStNWV1 !== '' && TAStNWV1 !== null && TAStNWN1 !== '' && TAStNWN1 !== null && TAStNWV2 !== '' && TAStNWV2 !== null && TAStNWN2 !== '' && TAStNWN2 !== null && TAStNWQ !== '' && TAStNWQ !== null) {
            document.getElementById('TAStNWAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#TAStW').on('click', function () {
        const TAStWV1 = document.getElementById('TAStWV1').value
        const TAStWV2 = document.getElementById('TAStWV2').value
        const TAStWN1 = document.getElementById('TAStWN1').value
        const TAStWN2 = document.getElementById('TAStWN2').value
        const TAStWQ = document.getElementById('TAStWQ').value

        answer = (0.9 * parseFloat(TAStWV1) - parseFloat(TAStWN1) * parseFloat(TAStWV2)) / (parseFloat(TAStWQ) * parseFloat(TAStWN2) * 60)
        if (TAStWV1 !== '' && TAStWV1 !== null && TAStWV2 !== '' && TAStWV2 !== null && TAStWN1 !== '' && TAStWN1 !== null && TAStWN2 !== '' && TAStWN2 !== null && TAStWQ !== '' && TAStWQ !== null) {
            document.getElementById('TAStWAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#TAGPSPO').on('click', function () {
        const TAGPSPO1 = document.getElementById('TAGPSPO1').value

        answer = parseFloat(TAGPSPO1) / 0.36
        if (TAGPSPO1 !== '' && TAGPSPO1 !== null) {
            document.getElementById('TAGPSPOAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#TAGPSW').on('click', function () {
        const TAGPSW1 = document.getElementById('TAGPSW1').value

        answer = parseFloat(TAGPSW1) / 5.64
        if (TAGPSW1 !== '' && TAGPSW1 !== null) {
            document.getElementById('TAGPSWAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#UDoz').on('click', function () {
        const UDozV = document.getElementById('UDozV').value
        const UDozQ = document.getElementById('UDozQ').value

        answer = parseFloat(UDozV) / (parseFloat(UDozQ) * 60)
        if (UDozV !== '' && UDozV !== null && UDozQ !== '' && UDozQ !== null) {
            document.getElementById('UDozAnswer').innerText = answer.toFixed(2)
        }
    })

    $('#TQW').on('click', function () {
        const TQWV = document.getElementById('TQWV').value
        const TQWN = document.getElementById('TQWN').value
        const TQWQ = document.getElementById('TQWQ').value

        answer = parseFloat(TQWV) / (parseFloat(TQWN) * parseFloat(TQWQ) * 60)
        if (TQWV !== '' && TQWV !== null && TQWN !== '' && TQWN !== null && TQWQ !== '' && TQWQ !== null) {
            document.getElementById('TQWAnswer').innerText = answer.toFixed(2)
        }
    })
    /* формулы РТП-рассчётов */

    if (window.location.pathname == '/RTPCalc.html') {
        /* const TsrBtn = document.getElementById('TsrBtn')
        TsrBtn.addEventListener('click', function () {
            const TsrTmess = document.getElementById('TsrTmess').value
            const TsrTbr = document.getElementById('TsrTbr').value
            const TsrTsld = document.getElementById('TsrTsld').value

            answer = parseInt(TsrTmess) + parseInt(TsrTbr) + parseInt(TsrTsld) + 1
            if (TsrTsld !== '' && TsrTsld !== null) {
                document.getElementById('TsrAnswer').innerText = parseInt(answer)
            }
        }) */

        /* const TslBtn = document.getElementById('TslBtn')
        TslBtn.addEventListener('click', function () {
            const TslL = document.getElementById('L').value
            const TslVsr = document.getElementById('Vsr').value

            answer = parseInt(TslL) * 60 / parseInt(TslVsr)
            if (TslL !== '' && TslL !== null && TslVsr !== '' && TslVsr !== null) {
                document.getElementById('TslAnswer').innerText = parseInt(answer)
            }
        }) */

        /* const LpojBtn = document.getElementById('LpojBtn')
        LpojBtn.addEventListener('click', function () {
            const LpojV = document.getElementById('LpojV').value
            const LpojT = document.getElementById('LpojT').value

            answer = LpojV * 0.5 * parseInt(LpojT)
            if (LpojV !== '' && LpojV !== null && LpojT !== '' && LpojT !== null) {
                document.getElementById('LpojAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const LpojBtn10 = document.getElementById('LpojBtn-10')
        LpojBtn10.addEventListener('click', function () {
            const LpojV10 = document.getElementById('LpojV-10').value
            const LpojT10 = document.getElementById('LpojT-10').value

            answer = LpojV10 * 0.5 * 10 + LpojV10 * (parseInt(LpojT10) - 10)
            if (LpojV10 !== '' && LpojV10 !== null && LpojT10 !== '' && LpojT10 !== null) {
                document.getElementById('LpojAnswer-10').innerText = answer.toFixed(2)
            }
        }) */

        /* const SRad = document.getElementById('SRad')
        SRad.addEventListener('click', function () {
            const SRadLput = document.getElementById('SRad-Lput').value

            answer = (parseFloat(SRadLput * SRadLput)) * 3.14
            if (SRadLput !== '' && SRadLput !== null) {
                document.getElementById('SRadAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const SAng = document.getElementById('SAng')
        SAng.addEventListener('click', function () {
            const SAngLput = document.getElementById('SAng-Lput').value
            const SAngang = document.getElementById('SAng-ang').value

            answer = (parseFloat(SAngLput) * parseFloat(SAngLput)) * parseFloat(SAngang / 360) * 3.14
            if (SAngLput !== '' && SAngLput !== null && SAngang !== '' && SAngang !== null) {
                document.getElementById('SAngAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const SRec = document.getElementById('SRec')
        SRec.addEventListener('click', function () {
            const SRecA = document.getElementById('SRec-A').value
            const SRecB = document.getElementById('SRec-B').value

            answer = parseFloat(SRecA) * parseFloat(SRecB)
            if (SRecA !== '' && SRecA !== null && SRecB !== '' && SRecB !== null) {
                document.getElementById('SRecAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /*    const SRecDB = document.getElementById('SRecDB')
           SRecDB.addEventListener('click', function () {
               const SRecDBA = document.getElementById('SRecDB-A').value
               const SRecDBB1 = document.getElementById('SRecDB-B1').value
               const SRecDBB2 = document.getElementById('SRecDB-B2').value
   
               answer = parseFloat(SRecDBA) * (parseFloat(SRecDBB1) + parseFloat(SRecDBB2))
               if (SRecDBA !== '' && SRecDBA !== null && SRecDBB1 !== '' && SRecDBB1 !== null && SRecDBB2 !== '' && SRecDBB2 !== null) {
                   document.getElementById('SRecDBAnswer').innerText = answer.toFixed(2)
               }
           }) */

        /*   const PCir = document.getElementById('PCir')
          PCir.addEventListener('click', function () {
              const PCirR = document.getElementById('PCirR').value
  
              answer = parseFloat(PCirR) * 2 * 3.14
              if (PCirR !== '' && PCirR !== null) {
                  document.getElementById('PCirAnswer').innerText = answer.toFixed(2)
              }
          }) */

        /* const PAng = document.getElementById('PAng')
        PAng.addEventListener('click', function () {
            const PAngAng = document.getElementById('PAng-ang').value
            const PAngR = document.getElementById('PAngR').value

            answer = parseFloat(PAngR) * (2 + (parseFloat(PAngAng / 360)))
            if (PAngAng !== '' & PAngAng !== null && PAngR !== '' && PAngR !== null) {
                document.getElementById('PAngAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /*  const PRect = document.getElementById('PRect')
         PRect.addEventListener('click', function () {
             const PRectA = document.getElementById('PRect-a').value
             const PRectB = document.getElementById('PRect-b').value
 
             answer = 2 * (parseFloat(PRectA) + parseFloat(PRectB))
             if (PRectA !== '' && PRectA !== null && PRectB !== '' && PRectB !== null) {
                 document.getElementById('PRectAnswer').innerText = answer.toFixed(2)
             }
         }) */

        /* const PRectDB = document.getElementById('PRectDB')
        PRectDB.addEventListener('click', function () {
            const PRectDBA = document.getElementById('PRectDB-a').value
            const PRectDBB1 = document.getElementById('PRectDB-b1').value
            const PRectDBB2 = document.getElementById('PRectDB-b2').value

            answer = 2 * parseFloat(PRectDBA) + (parseFloat(PRectDBB1) + parseFloat(PRectDBB2))
            if (PRectDBA !== '' && PRectDBA !== null && PRectDBB1 !== '' && PRectDBB1 !== null && PRectDBB2 !== '' && PRectDBB2 !== null) {
                document.getElementById('PRectDBAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /*  const SExtCir = document.getElementById('SExtCir')
         SExtCir.addEventListener('click', function () {
             const SExtCirR = document.getElementById('SExtCirR').value
             const SExtCirDp = document.getElementById('SExtCirDp').value
 
             answer = 3.14 * parseFloat(SExtCirDp) * (2 * parseFloat(SExtCirR) - parseFloat(SExtCirDp))
             if (SExtCirR !== '' && SExtCirR !== null && SExtCirDp !== '' && SExtCirDp !== null) {
                 document.getElementById('SExtCirAnswer').innerText = answer.toFixed(2)
             }
         }) */

        /* const SExtAng = document.getElementById('SExtAng')
        SExtAng.addEventListener('click', function () {
            const SExtAngAng = document.getElementById('SExtAngAng').value
            const SExtAngDp = document.getElementById('SExtAngDp').value
            const SExtAngR = document.getElementById('SExtAngR').value

            answer = parseFloat(SExtAngAng / 360) * 3.14 * parseFloat(SExtAngDp) * (2 * parseFloat(SExtAngR) - parseFloat(SExtAngDp))
            if (SExtAngAng !== '' && SExtAngAng !== null && SExtAngDp !== '' && SExtAngDp !== null && SExtAngR !== '' && SExtAngR !== null) {
                document.getElementById('SExtAngAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const SExtRect = document.getElementById('SExtRect')
        SExtRect.addEventListener('click', function () {
            const SExtRectA = document.getElementById('SExtRectA').value
            const SExtRectDp = document.getElementById('SExtRectDp').value

            answer = parseFloat(SExtRectA) * parseFloat(SExtRectDp)
            if (SExtRectA !== '' && SExtRectA !== null && SExtRectDp !== '' && SExtRectDp !== null) {
                document.getElementById('SExtRectAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const SExtRectDB = document.getElementById('SExtRectDB')
        SExtRectDB.addEventListener('click', function () {
            const SExtRectDBA = document.getElementById('SExtRectDBA').value
            const SExtRectDBDp = document.getElementById('SExtRectDBDp').value

            answer = 2 * parseFloat(SExtRectDBDp) * parseFloat(SExtRectDBA)
            if (SExtRectDBDp !== '' && SExtRectDBDp !== null && SExtRectDBA !== '' && SExtRectDBA !== null) {
                document.getElementById('SExtRectDBAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const QExt = document.getElementById('QExt')
        QExt.addEventListener('click', function () {
            const QExtA = document.getElementById('QExtA').value
            const QExtDp = document.getElementById('QExtDp').value

            answer = parseFloat(QExtA) * parseFloat(QExtDp)
            if (QExt !== '' && QExt !== null && QExtDp !== '' && QExtDp !== null) {
                document.getElementById('QExtAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const QPr = document.getElementById('QPr')
        QPr.addEventListener('click', function () {
            const QPrA = document.getElementById('QPrA').value
            const QPrDp = document.getElementById('QPrDp').value

            answer = parseFloat(QPrA) * parseFloat(QPrDp)
            if (QPrA !== '' && QPrA !== null && QPrDp !== '' && QPrDp !== null) {
                document.getElementById('QPrAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const NStWt = document.getElementById('NStWt')
        NStWt.addEventListener('click', function () {
            const NStWtA = document.getElementById('NStWtA').value
            const NStWtB = document.getElementById('NStWtB').value

            answer = parseFloat(NStWtA) / parseFloat(NStWtB)
            if (NStWtA !== '' && NStWtA !== null && NStWtB !== '' && NStWtB !== null && NStWtB !== 0) {
                document.getElementById('NStWtAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const NStFS = document.getElementById('NStFS')
        NStFS.addEventListener('click', function () {
            const NStFSA = document.getElementById('NStFSA').value
            const NStFSB = document.getElementById('NStFSB').value

            answer = parseFloat(NStFSA) / parseFloat(NStFSB)
            if (NStFSA !== '' && NStFSA !== null && NStFSB !== '' && NStFSB !== null && NStFSB !== 0) {
                document.getElementById('NStFSAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const NStFV = document.getElementById('NStFV')
        NStFV.addEventListener('click', function () {
            const NStFVA = document.getElementById('NStFVA').value
            const NStFVB = document.getElementById('NStFVB').value

            answer = (parseFloat(NStFVA) * 3) / (parseFloat(NStFVB) / 15)
            if (NStFVA !== '' && NStFVA !== null && NStFVB !== '' && NStFVB !== null) {
                document.getElementById('NStFVAnswer').innerText = Math.ceil(answer)
            }
        }) */

        /* const TAStNW = document.getElementById('TAStNW')
        TAStNW.addEventListener('click', function () {
            const TAStNWV1 = document.getElementById('TAStNWV1').value
            const TAStNWV2 = document.getElementById('TAStNWV2').value
            const TAStNWN1 = document.getElementById('TAStNWN1').value
            const TAStNWN2 = document.getElementById('TAStNWN2').value
            const TAStNWQ = document.getElementById('TAStNWQ').value

            answer = (parseFloat(TAStNWV1) - parseFloat(TAStNWN1) * parseFloat(TAStNWV2)) / (parseFloat(TAStNWN2) * parseFloat(TAStNWQ) * 60)
            if (TAStNWV1 !== '' && TAStNWV1 !== null && TAStNWN1 !== '' && TAStNWN1 !== null && TAStNWV2 !== '' && TAStNWV2 !== null && TAStNWN2 !== '' && TAStNWN2 !== null && TAStNWQ !== '' && TAStNWQ !== null) {
                document.getElementById('TAStNWAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const TAStW = document.getElementById('TAStW')
        TAStW.addEventListener('click', function () {
            const TAStWV1 = document.getElementById('TAStWV1').value
            const TAStWV2 = document.getElementById('TAStWV2').value
            const TAStWN1 = document.getElementById('TAStWN1').value
            const TAStWN2 = document.getElementById('TAStWN2').value
            const TAStWQ = document.getElementById('TAStWQ').value

            answer = (0.9 * parseFloat(TAStWV1) - parseFloat(TAStWN1) * parseFloat(TAStWV2)) / (parseFloat(TAStWQ) * parseFloat(TAStWN2) * 60)
            if (TAStWV1 !== '' && TAStWV1 !== null && TAStWV2 !== '' && TAStWV2 !== null && TAStWN1 !== '' && TAStWN1 !== null && TAStWN2 !== '' && TAStWN2 !== null && TAStWQ !== '' && TAStWQ !== null) {
                document.getElementById('TAStWAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const TAGPSPO = document.getElementById('TAGPSPO')
        TAGPSPO.addEventListener('click', function () {
            const TAGPSPO1 = document.getElementById('TAGPSPO1').value

            answer = parseFloat(TAGPSPO1) / 0.36
            if (TAGPSPO1 !== '' && TAGPSPO1 !== null) {
                document.getElementById('TAGPSPOAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const TAGPSW = document.getElementById('TAGPSW')
        TAGPSW.addEventListener('click', function () {
            const TAGPSW1 = document.getElementById('TAGPSW1').value

            answer = parseFloat(TAGPSW1) / 5.64
            if (TAGPSW1 !== '' && TAGPSW1 !== null) {
                document.getElementById('TAGPSWAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const UDoz = document.getElementById('UDoz')
        UDoz.addEventListener('click', function () {
            const UDozV = document.getElementById('UDozV').value
            const UDozQ = document.getElementById('UDozQ').value

            answer = parseFloat(UDozV) / (parseFloat(UDozQ) * 60)
            if (UDozV !== '' && UDozV !== null && UDozQ !== '' && UDozQ !== null) {
                document.getElementById('UDozAnswer').innerText = answer.toFixed(2)
            }
        }) */

        /* const TQW = document.getElementById('TQW')
        TQW.addEventListener('click', function () {
            const TQWV = document.getElementById('TQWV').value
            const TQWN = document.getElementById('TQWN').value
            const TQWQ = document.getElementById('TQWQ').value

            answer = parseFloat(TQWV) / (parseFloat(TQWN) * parseFloat(TQWQ) * 60)
            if (TQWV !== '' && TQWV !== null && TQWN !== '' && TQWN !== null && TQWQ !== '' && TQWQ !== null) {
                document.getElementById('TQWAnswer').innerText = answer.toFixed(2)
            }
        }) */

    }

    $('#menu-open').on('click', function () {
        $('.leftside__menu').removeClass('--hidden')
    })

    $('#menu-close').on('click', function () {
        $('.leftside__menu').toggleClass('--hidden')
    })

    $('#map-btn').on('click', function () {
        $('#table-btn').removeClass('--active')
        $('#table-btn').removeAttr('disabled')
        $('#map-btn').toggleClass('--active')
        $('#map-btn').attr('disabled', 'disabled')
        $('.header__nav').removeClass('--table')
        $('.header__nav').toggleClass('--map')
        $('.waters__map-inner').removeClass('--hidden')
        $('.waters__table-inner').toggleClass('--hidden')
    })

    $('#table-btn').on('click', function () {
        $('#map-btn').removeClass('--active')
        $('#map-btn').removeAttr('disabled')
        $('#table-btn').toggleClass('--active')
        $('#table-btn').attr('disabled', 'disabled')
        $('.header__nav').removeClass('--map')
        $('.header__nav').toggleClass('--table')
        $('.waters__table-inner').removeClass('--hidden')
        $('.waters__map-inner').toggleClass('--hidden')
    })

    $('#formul-btn').on('click', function () {
        $('#calc-btn').removeClass('--acitve')
        $('#calc-btn').removeAttr('disabled')
        $('#formul-btn').toggleClass('--active')
        $('#formul-btn').attr('disabled', 'disabled')
        $('.header__nav').removeClass('--calc')
        $('.header__nav').toggleClass('--formul')
        $('.calc__formul-inner').removeClass('--hidden')
        $('.calc__calc-inner').toggleClass('--hidden')
    })

    $('#calc-btn').on('click', function () {
        $('#formul-btn').removeClass('--acitve')
        $('#formul-btn').removeAttr('disabled')
        $('#calc-btn').toggleClass('--active')
        $('#calc-btn').attr('disabled', 'disabled')
        $('.header__nav').removeClass('--formul')
        $('.header__nav').toggleClass('--calc')
        $('.calc__calc-inner').removeClass('--hidden')
        $('.calc__formul-inner').toggleClass('--hidden')
    })

    $('#type').on('click', function () {
        $(document.querySelectorAll('#typeSort')).toggleClass('--active')
    })

    const type = document.getElementById('type')
    const typeSort = document.querySelectorAll('#typeSort')
    const watersTable = document.querySelectorAll('.waters__table-body')
    const watersTableRow = document.querySelectorAll('#waters-table-row')
    const watersTableCell = document.querySelectorAll('#waters-table-type')
    let rowArr = Array(watersTableRow)
    typeSort.forEach((item) => {
        item.addEventListener('click', function () {
            if (item.value == 0) console.log('0')

            else if (item.value == 2) {
                watersTableCell.forEach((cell) => {
                    cell.value = cell.innerHTML
                    watersTableRow.forEach((row) => {
                        if (row.contains(cell) && cell.value == 'Гидрант') {
                            row.parentNode.removeChild(row)
                            console.log(watersTable)
                            console.log(rowArr)
                            console.log(row)
                        }
                    })
                })



                /* if (watersTableCell.innerText == 'Гидрант'.toLowerCase()) console.log('1')
                watersTableRow.forEach((row) => {
                    console.log(row)
                    console.log(watersTableCell)
                }) */
            }

            else if (item.value == 1) {
                watersTableCell.forEach((cell) => {
                    cell.value = cell.innerHTML
                    watersTableRow.forEach((row) => {
                        if (row.contains(cell) && cell.value == 'Водоём') {
                            row.parentNode.removeChild(row)
                            console.log(row.parentNode)
                        }
                    })
                })
            }

            $(typeSort).removeClass('--active')
        })
    })

    let myMap;

    ymaps.ready(init);

    function init() {
        let myMap = new ymaps.Map("map", {
            center: [65.854576, 74.487753],
            zoom: 15,
            controls: ['routeButtonControl'],

        }, {
            searchControlProvider: 'yandex#search'
        }),


            // Создаем геообъект с типом геометрии "Точка".
            myGeoObject = new ymaps.GeoObject();


        myMap.geoObjects
            .add(myGeoObject)

            .add(new ymaps.Placemark([65.849295, 74.474673], {
                balloonContentHeader: '<h4>ПГ-10</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/10.jpg" height="252" width="336">',
                iconCaption: 'ПГ-10'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.849849, 74.475851], {
                balloonContentHeader: '<h4>ПГ-11</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/11.jpg" height="252" width="336">',
                iconCaption: 'ПГ-11'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.849059, 74.471988], {
                balloonContentHeader: '<h4>ПГ-12</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/12.jpg" height="252" width="336">',
                iconCaption: 'ПГ-12'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.848000, 74.471795], {
                balloonContentHeader: '<h4>ПГ-9</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/9.jpg" height="252" width="336">',
                iconCaption: 'ПГ-9'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. полярников */

            .add(new ymaps.Placemark([65.859503, 74.501579], {
                balloonContentHeader: '<h4>ПГ-51</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/51.jpg" height="252" width="336">',
                iconCaption: 'ПГ-51'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860965, 74.500286], {
                balloonContentHeader: '<h4>ПГ-57</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/57.jpg" height="252" width="336">',
                iconCaption: 'ПГ-57'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.86059, 74.504193], {
                balloonContentHeader: '<h4>ПГ-53</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/53.jpg" height="320" width="240">',
                iconCaption: 'ПГ-53'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.861491, 74.501885], {
                balloonContentHeader: '<h4>ПГ-56</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/56.jpg" height="252" width="336">',
                iconCaption: 'ПГ-56'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860061, 74.504790], {
                balloonContentHeader: '<h4>ПГ-52</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-52'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.859691, 74.50382], {
                balloonContentHeader: '<h4>ПГ-52в</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-52в'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860135, 74.502734], {
                balloonContentHeader: '<h4>ПГ-54</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/54.jpg" height="252" width="336">',
                iconCaption: 'ПГ-54'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860544, 74.501494], {
                balloonContentHeader: '<h4>ПГ-55</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/55.jpg" height="316" width="232">',
                iconCaption: 'ПГ-55'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.859934, 74.499757], {
                balloonContentHeader: '<h4>ПГ-60</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-60'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860520, 74.498458], {
                balloonContentHeader: '<h4>ПГ-87</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-87'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.861203, 74.496951], {
                balloonContentHeader: '<h4>ПГ-88</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/88.jpg" height="252" width="336">',
                iconCaption: 'ПГ-88'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.859904, 74.500386], {
                balloonContentHeader: '<h4>ПГ-8</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/8.jpg" height="252" width="336">',
                iconCaption: 'ПГ-8'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. энергетиков */

            .add(new ymaps.Placemark([65.858945, 74.497512], {
                balloonContentHeader: '<h4>ПГ-58</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/58.jpg" height="252" width="336">',
                iconCaption: 'ПГ-58'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.859145, 74.498715], {
                balloonContentHeader: '<h4>ПГ-59</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/59.jpg" height="252" width="336">',
                iconCaption: 'ПГ-59'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.853109, 74.484775], {
                balloonContentHeader: '<h4>ПГ-120</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/120.jpg" height="252" width="336">',
                iconCaption: 'ПГ-120'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.856806, 74.494603], {
                balloonContentHeader: '<h4>ПГ-112</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/112.jpg" height="150" width="200">',
                iconCaption: 'ПГ-112'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.858202, 74.494047], {
                balloonContentHeader: '<h4>ПГ-89</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-89'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.857832, 74.497343], {
                balloonContentHeader: '<h4>ПГ-111</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/111.jpg" height="150" width="200">',
                iconCaption: 'ПГ-111'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.855646, 74.491541], {
                balloonContentHeader: '<h4>ПГ-42</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/42.jpg" height="150" width="200">',
                iconCaption: 'ПГ-42'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.855196, 74.492420], {
                balloonContentHeader: '<h4>ПГ-44</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/44.jpg" height="150" width="200">',
                iconCaption: 'ПГ-44'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.858629, 74.499456], {
                balloonContentHeader: '<h4>ПГ-110</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/110.jpg" height="150" width="200">',
                iconCaption: 'ПГ-110'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.850384, 74.479550], {
                balloonContentHeader: '<h4>ПГ-20</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/20.jpg" height="150" width="200">',
                iconCaption: 'ПГ-20'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.851534, 74.480542], {
                balloonContentHeader: '<h4>ПГ-19</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/19.jpg" height="150" width="200">',
                iconCaption: 'ПГ-19'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.852269, 74.484810], {
                balloonContentHeader: '<h4>ПГ-21</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/21.jpg" height="150" width="200">',
                iconCaption: 'ПГ-21'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. ленина */

            .add(new ymaps.Placemark([65.857066, 74.500021], {
                balloonContentHeader: '<h4>ПГ-148</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/148.jpg" height="150" width="200">',
                iconCaption: 'ПГ-148'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.851783, 74.489254], {
                balloonContentHeader: '<h4>ПГ-137</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/137.jpg" height="150" width="200">',
                iconCaption: 'ПГ-137'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.852163, 74.490238], {
                balloonContentHeader: '<h4>ПГ-139</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/139.jpg" height="150" width="200">',
                iconCaption: 'ПГ-139'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.850461, 74.483441], {
                balloonContentHeader: '<h4>ПГ-108</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/108.jpg" height="150" width="200">',
                iconCaption: 'ПГ-108'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.857715, 74.504587], {
                balloonContentHeader: '<h4>ПГ-145</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/145.jpg" height="150" width="200">',
                iconCaption: 'ПГ-145'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854036, 74.495159], {
                balloonContentHeader: '<h4>ПГ-46</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/46.jpg" height="150" width="200">',
                iconCaption: 'ПГ-46'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.855020, 74.497669], {
                balloonContentHeader: '<h4>ПГ-49</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/49.jpg" height="150" width="200">',
                iconCaption: 'ПГ-49'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854351, 74.495989], {
                balloonContentHeader: '<h4>ПГ-47</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/47.jpg" height="150" width="200">',
                iconCaption: 'ПГ-47'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.856825, 74.502164], {
                balloonContentHeader: '<h4>ПГ-144</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/144.jpg" height="150" width="200">',
                iconCaption: 'ПГ-144'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.850313, 74.485106], {
                balloonContentHeader: '<h4>ПГ-125</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/125.jpg" height="150" width="200">',
                iconCaption: 'ПГ-125'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.852782, 74.491889], {
                balloonContentHeader: '<h4>ПГ-28</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/28.jpg" height="150" width="200">',
                iconCaption: 'ПГ-28'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854629, 74.496731], {
                balloonContentHeader: '<h4>ПГ-48</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/48.jpg" height="150" width="200">',
                iconCaption: 'ПГ-48'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854097, 74.491522], {
                balloonContentHeader: '<h4>ПГ-30</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/30.jpg" height="252" width="336">',
                iconCaption: 'ПГ-30'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854712, 74.495182], {
                balloonContentHeader: '<h4>ПГ-45</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/45.jpg" height="252" width="336">',
                iconCaption: 'ПГ-45'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.855612, 74.496433], {
                balloonContentHeader: '<h4>ПГ-50</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/50.jpg" height="252" width="336">',
                iconCaption: 'ПГ-50'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854976, 74.494828], {
                balloonContentHeader: '<h4>ПГ-43</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/43.jpg" height="252" width="336">',
                iconCaption: 'ПГ-43'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.851196, 74.484787], {
                balloonContentHeader: '<h4>ПГ-22</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/22.jpg" height="252" width="336">',
                iconCaption: 'ПГ-22'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. мира */

            .add(new ymaps.Placemark([65.860718, 74.495094], {
                balloonContentHeader: '<h4>ПГ-128</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/128.jpg" height="252" width="336">',
                iconCaption: 'ПГ-128'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.860236, 74.495029], {
                balloonContentHeader: '<h4>ПГ-129</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/129.jpg" height="252" width="336">',
                iconCaption: 'ПГ-129'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.851673, 74.475978], {
                balloonContentHeader: '<h4>ПГ-15</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/15.jpg" height="252" width="336">',
                iconCaption: 'ПГ-15'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.858570, 74.493859], {
                balloonContentHeader: '<h4>ПГ-40</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/40.jpg" height="252" width="336">',
                iconCaption: 'ПГ-40'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.858938, 74.491200], {
                balloonContentHeader: '<h4>ПГ-36</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/36.jpg" height="252" width="336">',
                iconCaption: 'ПГ-36'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.857214, 74.486701], {
                balloonContentHeader: '<h4>ПГ-34</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/34.jpg" height="252" width="336">',
                iconCaption: 'ПГ-34'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.852758, 74.474442], {
                balloonContentHeader: '<h4>ПГ-17</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/17.jpg" height="252" width="336">',
                iconCaption: 'ПГ-17'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.857152, 74.486042], {
                balloonContentHeader: '<h4>ПГ-33</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/33.jpg" height="252" width="336">',
                iconCaption: 'ПГ-33'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854953, 74.481048], {
                balloonContentHeader: '<h4>ПГ-122</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/122.jpg" height="252" width="336">',
                iconCaption: 'ПГ-122'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.858185, 74.489221], {
                balloonContentHeader: '<h4>ПГ-35</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/35.jpg" height="252" width="336">',
                iconCaption: 'ПГ-35'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.856739, 74.482979], {
                balloonContentHeader: '<h4>ПГ-26</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/26.jpg" height="252" width="336">',
                iconCaption: 'ПГ-26'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.853627, 74.475736], {
                balloonContentHeader: '<h4>ПГ-23</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/23.jpg" height="252" width="336">',
                iconCaption: 'ПГ-23'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.859152, 74.493284], {
                balloonContentHeader: '<h4>ПГ-39</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/39.jpg" height="252" width="336">',
                iconCaption: 'ПГ-39'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.857828, 74.491398], {
                balloonContentHeader: '<h4>ПГ-38</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/38.jpg" height="252" width="336">',
                iconCaption: 'ПГ-38'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.856610, 74.489789], {
                balloonContentHeader: '<h4>ПГ-37</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/37.jpg" height="252" width="336">',
                iconCaption: 'ПГ-37'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.853407, 74.479750], {
                balloonContentHeader: '<h4>ПГ-106</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/106.jpg" height="252" width="336">',
                iconCaption: 'ПГ-106'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.853812, 74.478856], {
                balloonContentHeader: '<h4>ПГ-109</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/109.jpg" height="252" width="336">',
                iconCaption: 'ПГ-109'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.852380, 74.474386], {
                balloonContentHeader: '<h4>ПГ-16</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/16.jpg" height="252" width="336">',
                iconCaption: 'ПГ-16'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. звёздная */

            .add(new ymaps.Placemark([65.859712, 74.495963], {
                balloonContentHeader: '<h4>ПГ-130</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/130.jpg" height="252" width="336">',
                iconCaption: 'ПГ-130'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.859328, 74.495487], {
                balloonContentHeader: '<h4>ПГ-131</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/131.jpg" height="252" width="336">',
                iconCaption: 'ПГ-131'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. спортивная */

            .add(new ymaps.Placemark([65.854911, 74.483821], {
                balloonContentHeader: '<h4>ПГ-27</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/27.jpg" height="252" width="336">',
                iconCaption: 'ПГ-27'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.853383, 74.491033], {
                balloonContentHeader: '<h4>ПГ-29</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/29.jpg" height="252" width="336">',
                iconCaption: 'ПГ-29'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854339, 74.488040], {
                balloonContentHeader: '<h4>ПГ-31</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/31.jpg" height="252" width="336">',
                iconCaption: 'ПГ-31'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.855396, 74.486436], {
                balloonContentHeader: '<h4>ПГ-32</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/32.jpg" height="252" width="336">',
                iconCaption: 'ПГ-32'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. строителей */

            .add(new ymaps.Placemark([65.851567, 74.474375], {
                balloonContentHeader: '<h4>ПГ-14</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/14.jpg" height="252" width="336">',
                iconCaption: 'ПГ-14'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.851394, 74.473606], {
                balloonContentHeader: '<h4>ПГ-13</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="252" width="336">',
                iconCaption: 'ПГ-13'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. набережная */

            .add(new ymaps.Placemark([65.849286, 74.477380], {
                balloonContentHeader: '<h4>ПГ-7</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: тупиковая',
                balloonContentFooter: '<img src="./images/waterObjects/7.jpg" height="252" width="336">',
                iconCaption: 'ПГ-7'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.848059, 74.476498], {
                balloonContentHeader: '<h4>ПГ-6</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/6.jpg" height="252" width="336">',
                iconCaption: 'ПГ-6'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.847228, 74.472522], {
                balloonContentHeader: '<h4>ПГ-4</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/4.jpg" height="252" width="336">',
                iconCaption: 'ПГ-4'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.847425, 74.474653], {
                balloonContentHeader: '<h4>ПГ-5</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/5.jpg" height="252" width="336">',
                iconCaption: 'ПГ-5'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. газодобытчиков */

            .add(new ymaps.Placemark([65.840714, 74.460534], {
                balloonContentHeader: '<h4>ПГ-41</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: тупиковая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-41'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты пр-д Медвежье */

            .add(new ymaps.Placemark([65.844504, 74.466424], {
                balloonContentHeader: '<h4>ПГ-68</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-68'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.845687, 74.472038], {
                balloonContentHeader: '<h4>ПГ-65</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-65'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.843993, 74.467498], {
                balloonContentHeader: '<h4>ПГ-91</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-91'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.844302, 74.465515], {
                balloonContentHeader: '<h4>ПГ-114</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-114'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.845457, 74.468086], {
                balloonContentHeader: '<h4>ПГ-64</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-64'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.846379, 74.467022], {
                balloonContentHeader: '<h4>ПГ-63</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-63'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.847161, 74.469814], {
                balloonContentHeader: '<h4>ПГ-67</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-67'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.846273, 74.465511], {
                balloonContentHeader: '<h4>ПГ-1</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-1'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.845667, 74.463749], {
                balloonContentHeader: '<h4>ПГ-2</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-2'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.841049, 74.471664], {
                balloonContentHeader: '<h4>ПГ-76</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-76'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.840638, 74.472402], {
                balloonContentHeader: '<h4>ПГ-75</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-75'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.840484, 74.472682], {
                balloonContentHeader: '<h4>ПГ-126</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-126'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.840484, 74.472682], {
                balloonContentHeader: '<h4>ПГ-126</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-126'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.841216, 74.474825], {
                balloonContentHeader: '<h4>ПГ-77</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-77'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.841644, 74.475118], {
                balloonContentHeader: '<h4>ПГ-78</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-78'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.850675, 74.506976], {
                balloonContentHeader: '<h4>ПГ-142</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-142'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.853236, 74.505489], {
                balloonContentHeader: '<h4>ПГ-61</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-61'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.851878, 74.505471], {
                balloonContentHeader: '<h4>ПГ-62</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-62'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.843982, 74.485030], {
                balloonContentHeader: '<h4>ПГ-90</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-90'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.843210, 74.484300], {
                balloonContentHeader: '<h4>ПГ-136</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-136'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
        /* гидранты пр-е */


        let control = myMap.controls.get('routeButtonControl')

        // Зададим координаты пункта отправления с помощью геолокации.
        control.routePanel.geolocate('from')

        // Откроем панель для построения маршрутов.
        control.state.set('expanded', true)

        myMap.events.add('click', function (e) {
            if (!myMap.balloon.isOpen()) {
                let coords = e.get('coords');
                myMap.balloon.open(coords, {
                    contentHeader: 'Координаты точки:',
                    contentBody: '<p>Широта:<br></p>' + coords[0].toPrecision(6) +
                        '<p>Долгота:<br>' + coords[1].toPrecision(6)
                });
            }
            else {
                myMap.balloon.close();
            }
        });

        // Скрываем хинт при открытии балуна.
        myMap.events.add('balloonopen', function (e) {
            myMap.hint.close();
        });


    }

    function dates() {

        const options = {
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            day: 'numeric', month: 'numeric', year: 'numeric',
            weekday: 'short',
            timeZoneName: 'short'
        }

        let time = new Date()
        document.getElementById('time-viget').innerHTML = time.toLocaleDateString('ru-RU', options)

    }

    setInterval(dates, 30);
    dates();

    const tempValC = document.getElementById('weather-temp-value-C')
    const tempValF = document.getElementById('weather-temp-value-F')
    const tempIcon = document.getElementById('weather-temp-img')
    const coundIcon = document.getElementById('weather-cound-img')
    const coundText = document.getElementById('weather-cound-text')
    const windIcon = document.getElementById('weather-wind-img')
    const windText = document.getElementById('weather-wind-text')
    let tempResponse = fetch(`https://api.weatherapi.com/v1/current.json?key=d91aebb7dc8a467fbd9193631242706&q=65.533142,72.528935&aqi=yes`, {})
        .then(tempResponse => tempResponse.json())
        .then(tempResponse => {
            tempValC.innerHTML = tempResponse.current.temp_c + "°C"
            tempValF.innerHTML = tempResponse.current.temp_f + "°F"

            if (tempResponse.current.temp_c >= 16) {
                $(tempIcon).toggleClass('hot')
            }

            else if (tempResponse.current.temp_c <= 16) {
                $(tempIcon).toggleClass('cold')
            }
        })

    let coundResponse = fetch(`https://api.weatherapi.com/v1/marine.json?q=65.533142%2C72.528935&days=1&lang=ru&key=d91aebb7dc8a467fbd9193631242706`, {})
        .then(coundResponse => coundResponse.json())
        .then(coundResponse => {

            const coundResponseText = coundResponse.forecast.forecastday[0].day.condition.text
            coundText.innerHTML = coundResponseText

            if (coundResponseText.toLowerCase().includes('снег')) {
                $(coundIcon).toggleClass('snow')
            }

            else if (coundResponseText.toLowerCase().includes('солнечно') || coundResponseText.toLowerCase().includes('ясно')) {
                $(coundIcon).toggleClass('sunny')
            }

            else if (coundResponseText.toLowerCase().includes('облачно') || coundResponseText.toLowerCase().includes('пасмурно')) {
                $(coundIcon).toggleClass('cloud')
            }

            else if (coundResponseText.toLowerCase().includes('дожд') || coundResponseText.toLowerCase().includes('гроза')) {
                $(coundIcon).toggleClass('rain')
            }
        })

    let windResponse = fetch(`https://api.weatherapi.com/v1/current.json?key=d91aebb7dc8a467fbd9193631242706&q=65.533142,72.528935&aqi=yes`, {})
        .then(windResponse => windResponse.json())
        .then(windResponse => {
            let windDir = windResponse.current.wind_dir
            switch (windDir) {
                case 'N': windDir = 'С'
                    break
                case 'S': windDir = 'Ю'
                    break
                case 'W': windDir = 'З'
                    break
                case 'E': windDir = 'В'
                    break
                case 'SW': windDir = 'ЮЗ'
                    break
                case 'SE': windDir = 'ЮВ'
                    break
                case 'NW': windDir = 'СЗ'
                    break
                case 'NNW': windDir = 'ССЗ'
                    break
                case 'WNW': windDir = 'ЗСЗ'
                    break
                case 'WSW': windDir = 'ЗЮЗ'
                    break
                case 'EWE': windDir = 'ВСВ'
                    break
                case 'ESE': windDir = 'ВЮВ'
                    break
                case 'SSW': windDir = 'ЮЮЗ'
                    break
                default: windDir = ''
                    break
            }
            windText.innerHTML = (windResponse.current.wind_kph * 1000 / 3600).toFixed(2) + 'м/с' + ' ' + windDir
            console.log(windResponse)
        })

    $('.calculator__btn').on('click', function calc() {

        let firstFM = document.getElementById('firstFM').value
        let secondFM = document.getElementById('secondFM').value
        let therdFM = document.getElementById('therdFM').value
        let fourFM = document.getElementById('fourFM').value
        let fiveFM = document.getElementById('fiveFM').value

        let HoursOn = document.getElementById('HoursOn').value
        let MinutesOn = document.getElementById('MinutesOn').value

        let AirQ = document.getElementById('AirQ').value
        let BallonV = document.getElementById('BallonV').value

        let FastPmin__on = document.getElementById('FastPmin__on').value

        let Pmin__on = [firstFM, secondFM, therdFM, fourFM, fiveFM]

        Array.prototype.remove = function (value) {
            var index = this.indexOf(value)
            if (index !== -1) {
                this.splice(index, 1)
            }
        }

        for (i = 0; i < 5; i++) {

            const zeroValue = 0
            const emptyValue = ''
            Pmin__on.remove(zeroValue)
            Pmin__on.remove(emptyValue)
        }

        let min = Math.min(...Pmin__on)

        FastPmin__on = min

        let Pmax__pad = min / 3
        let Pcontrexit = min - Pmax__pad
        let DeltaTime = (Pmax__pad * BallonV) / AirQ


        HoursOn = parseInt(HoursOn)
        MinutesOn = parseInt(MinutesOn)



        if ((MinutesOn + DeltaTime) < 59) {

            MinutesOn += DeltaTime
        }

        else if ((MinutesOn + DeltaTime) > 59) {

            HoursOn += 1;
            MinutesOn = (MinutesOn + DeltaTime) - 60

        }

        if (HoursOn < 10) {
            HoursOn = '0' + HoursOn
        }

        if (HoursOn > 23) {
            HoursOn = '0' + 0
        }

        let Texit;

        if (MinutesOn < 10) {
            Texit = HoursOn + ' : 0' + Math.floor(MinutesOn)
        }

        else if (MinutesOn > 10) {
            Texit = HoursOn + ' : ' + Math.floor(MinutesOn)
        }

        let Tjob = (min * BallonV) / AirQ

        let Tback

        HoursOn = parseInt(HoursOn)
        MinutesOn = parseInt(MinutesOn)

        if ((MinutesOn + Tjob) < 59) {
            MinutesOn += Tjob
        }

        else if ((MinutesOn + Tjob) > 59) {
            HoursOn += 1
            MinutesOn = (MinutesOn + Tjob) - 60

        }

        if (HoursOn < 10) {
            HoursOn = '0' + HoursOn
        }

        if (HoursOn > 23) {
            HoursOn = '0' + 0
        }

        if (MinutesOn < 10) {
            Tback = HoursOn + ' : 0' + Math.floor(MinutesOn)
        }

        else if (MinutesOn > 10) {
            Tback = HoursOn + ' : ' + Math.floor(MinutesOn)
        }

        document.getElementById('Pmax__pad').innerHTML = Math.floor(Pmax__pad)
        document.getElementById('Pcontrexit').innerHTML = Math.floor(Pcontrexit)
        document.getElementById('DeltaTime').innerHTML = Math.floor(DeltaTime)
        document.getElementById('Texit').innerHTML = Texit
        document.getElementById('Tjob').innerHTML = Math.floor(Tjob)
        document.getElementById('Tback').innerHTML = Tback
        document.getElementById('FastPmin__on').innerHTML = FastPmin__on
    })

    /* база знаний -->*/
    $('#tactic').on('click', function () {
        /* $('.knowlage__base-item__theme.tactic').toggleClass('--active') */
        if (document.querySelector('.knowlage__base-item__theme.tactic').classList.contains('--active')) {
            document.querySelector('.knowlage__base-item__theme.tactic').classList.remove('--active')
        }
        else if (!document.querySelector('.knowlage__base-item__theme.tactic').classList.contains('--active')) {
            document.querySelector('.knowlage__base-item__theme.tactic').classList.add('--active')
        }
    })
    $('#tactic-1').on('click', function () {
        $('#tacticInfo-1').toggleClass('--acitve')
    })
    $('#tactic-2').on('click', function () {
        $('#tacticInfo-2').toggleClass('--acitve')
    })
    $('#tactic-3').on('click', function () {
        $('#tacticInfo-3').toggleClass('--acitve')
    })
    $('#tactic-4').on('click', function () {
        $('#tacticInfo-4').toggleClass('--acitve')
    })
    $('#tactic-5').on('click', function () {
        $('#tacticInfo-5').toggleClass('--acitve')
    })
    $('#tactic-6').on('click', function () {
        $('#tacticInfo-6').toggleClass('--acitve')
    })
    $('#tactic-7').on('click', function () {
        $('#tacticInfo-7').toggleClass('--acitve')
    })
    $('#tactic-8').on('click', function () {
        $('#tacticInfo-8').toggleClass('--acitve')
    })
    $('#tactic-9').on('click', function () {
        $('#tacticInfo-9').toggleClass('--acitve')
    })
    $('#tactic-10').on('click', function () {
        $('#tacticInfo-10').toggleClass('--acitve')
    })
    $('#tactic-11').on('click', function () {
        $('#tacticInfo-11').toggleClass('--acitve')
    })
    /*<-- база знаний */
});