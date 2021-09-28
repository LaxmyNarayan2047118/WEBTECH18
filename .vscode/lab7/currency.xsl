<?xml version ="1.0"?>
<!--currency.xsl-->
<xsl:stylesheet version = "1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns="http://www.w3.org/TR/xhtml1/strict">
<xsl:template match = "/">
<h2> Traders Record </h2>
<xsl:for-each select="Traders/Client">
<br/>
<span style="font-weight:bold;color:red"> FirstName: </span> 
<xsl:value-of select="name/firstname" />
<span style="font-weight:bold;color:red"> LastName: </span>
<xsl:value-of select="name/lastname" /> <br/>
<span style="font-weight:bold;color:green"> Street: </span>
<xsl:value-of select="address/street" /> <br/>
<span style="font-weight:bold;color:green"> City: </span>
<xsl:value-of select="address/city" /> <br/>
<span style="font-weight:bold;color:blue"> Email: </span>
<xsl:value-of select="address/email" /> <br/>
<span style="font-weight:bold;color:green"> Phone: </span>
<xsl:value-of select="address/phone" /> <br/>
</xsl:for-each>
</xsl:template>
</xsl:stylesheet>