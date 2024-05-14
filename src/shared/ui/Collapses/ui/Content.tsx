import s from './Content.module.scss'

export interface CollapseContentProps {
  header: string
  main: string[]
  img?: string
  imgAlt?: string
}

export const Content = (props: CollapseContentProps) => {
  const { header, main, img, imgAlt } = props
  console.log(img, 'img')
  return (
    <div className={s.container}>
      <h3 className={s.header}>{header}</h3>
      {main.map((str, idx) => (
        <p key={`${idx}-${str}`} className={s.main}>
          {main}
        </p>
      ))}
      {img != null && <img className={s.img} src={img} alt={imgAlt} />}
    </div>
  )
}
