import logo from 'assets/img/logo/desktop-logo-fill.svg'

export default function Logo() {
   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw'
         }}
      >
         <img src={logo} width={720} height={720} />
      </div>
   )
}
