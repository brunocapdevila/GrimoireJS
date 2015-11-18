React = require 'react'
ChainResource = require './renderer-chain-resource-entity'
class RendererStageListEntity extends React.Component
  constructor:(props)->
    super props

  render:->
    chain = []
    for k,v of @props.stage.buffers
      chain.push <ChainResource texKey={k} texVal={v} key={k}/>
    <div style={styles.container}>
      <p>
        <span style={styles.index}>{@props.index + " : "}</span>
        <span style={styles.stageName}>{@props.stage.stage.getTypeName()}</span>
      </p>
      <div>
        {chain}
      </div>
    </div>

  styles =
    container:
      border:"solid 1px white"
      paddingLeft:100
    index:
      color:"white"
      fontSize:"x-large"
    stageName:
      color:"white"

module.exports = RendererStageListEntity;
