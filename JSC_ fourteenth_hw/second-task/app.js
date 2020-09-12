$(()=>{
    const root = []
    root.push($('#s1').text())
    root.push($('.s2').text())
    root.push($('#second i').text())
    root.push($('[title="hello"]').text())
    root.push($('[target="_blank"]').text())
    root.push($('.extra:eq(1)').text())  
    
    alert(root.join(''))
})